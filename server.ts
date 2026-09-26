import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_ROLES: Record<string, string> = {
  coach: `You are the Lead Fitness & Conditioning Coach at Pro Fit Gym in Block A, North Nazimabad, Karachi 74600.
Founded under the visionary leadership of Muhammad Shafiq Jalil, Pro Fit Gym is North Nazimabad's premier fitness club ("Redefining Fitness with Elegance, Power & Prestige").
Operating hours: Monday through Saturday, 7:00 AM to 2:00 AM.
Your voice is disciplined, motivating, direct, welcoming, and deeply grounded in biomechanics, progressive overload, and lifestyle consistency.
Gym offerings:
- Imported strength & plate-loaded machine floor
- Group Studios: Aerobics, Zumba, and Indoor Cycling / Spin
- Dedicated Ladies-Only training slots with certified female instructors
- Personal Training (1-on-1 private coaching & form auditing)
- Sports Nutrition Consulting with Pakistani dietary meal plans (chicken, beef, eggs, daal, yogurt)
- Membership Tiers: Basic (gym floor & cardio), Pro (unlimited Zumba/Aerobics/Cycling + nutrition), Elite (+ 12 private PT sessions)
- Contact / WhatsApp: 0320 8200254. Location: Block A, North Nazimabad, Karachi.
Keep answers concise, actionable, and formatted cleanly with bullet points where appropriate. Encourage the user to visit for a free trial or contact the front desk on WhatsApp (0320 8200254).`,

  nutritionist: `You are the Lead Sports Nutritionist at Pro Fit Gym in North Nazimabad, Karachi.
You specialize in calculating caloric needs (BMR/TDEE), macronutrient splits (1.6-2.2g protein per kg for hypertrophy/fat loss), and practical dietary plans suited to Pakistani lifestyles and members.
Key advice points:
- Recommend sustainable caloric deficits (300-500 kcal) for fat loss without muscle wasting.
- Provide practical meal ideas incorporating chicken tikka, mutton/beef, eggs, lentils, oats, Greek yogurt, and rice.
- Answer questions on evidence-backed supplements: whey protein, creatine monohydrate (3-5g daily), omega-3s, and multivitamins.
- WhatsApp: 0320 8200254 for tailored meal plans at Pro Fit Gym.
Maintain a supportive, scientifically accurate, and encouraging tone.`,

  rehab: `You are the Biomechanics and Floor Instructor at Pro Fit Gym in North Nazimabad, Karachi.
You specialize in posture correction, lower back pain prevention, knee joint mobility, shoulder stability, and safe form on heavy plate-loaded equipment.
Key advice points:
- Emphasize intra-abdominal bracing (Valsalva), neutral spine mechanics, and pain-free full range of motion.
- Recommend controlled eccentric tempo and active mobility warmups (hip hinges, thoracic rotations, glute activation).
- Highlight our specialized group classes (Aerobics, Zumba, Cycling) and dedicated ladies slots for safe conditioning.
- For 1-on-1 form correction, invite members to meet our trainers on the gym floor (open 7:00 AM – 2:00 AM).
Be compassionate, precise, and empowering.`
};

// API endpoint for multi-turn chat
app.post('/api/chat', async (req, res) => {
  try {
    const {
      message,
      history = [],
      role = 'coach',
      taskComplexity = 'general', // 'general' | 'fast' | 'complex'
    } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Determine model based on prompt instructions:
    // - gemini-3.1-pro-preview for particularly complex tasks
    // - gemini-3.5-flash for general tasks
    // - gemini-3.1-flash-lite for tasks that should happen fast
    let modelName = 'gemini-3.5-flash';
    if (taskComplexity === 'fast') {
      modelName = 'gemini-3.1-flash-lite';
    } else if (taskComplexity === 'complex') {
      modelName = 'gemini-3.1-pro-preview';
    }

    const systemInstruction = SYSTEM_ROLES[role] || SYSTEM_ROLES.coach;

    // Build multi-turn contents array
    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    // Add prior conversation history
    if (Array.isArray(history)) {
      for (const h of history) {
        if (h && (h.role === 'user' || h.role === 'model') && typeof h.text === 'string') {
          contents.push({
            role: h.role,
            parts: [{ text: h.text }],
          });
        }
      }
    }

    // Add current user message
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    let response;
    try {
      response = await ai.models.generateContent({
        model: modelName,
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });
    } catch (modelError: any) {
      // If complex model fails (e.g. key permission), gracefully fall back to gemini-3.5-flash
      if (modelName !== 'gemini-3.5-flash') {
        console.warn(`Fallback to gemini-3.5-flash due to error on ${modelName}:`, modelError?.message);
        response = await ai.models.generateContent({
          model: 'gemini-3.5-flash',
          contents,
          config: {
            systemInstruction,
            temperature: 0.7,
          },
        });
      } else {
        throw modelError;
      }
    }

    const replyText = response.text || "I'm here to help you stay consistent and hit your fitness goals. What would you like to work on today?";

    return res.json({
      text: replyText,
      modelUsed: modelName,
    });
  } catch (error: any) {
    console.error('Error generating chat response:', error);
    return res.status(500).json({
      error: error?.message || 'Failed to generate response',
    });
  }
});

// Setup Vite middleware in development or serve static in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Pro.Fit server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
