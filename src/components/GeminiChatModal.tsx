import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Trash2,
  Minimize2,
  Maximize2,
  ChevronDown,
  Zap,
  Flame,
  Brain,
  MessageCircle,
  Dumbbell,
  Apple,
  HeartPulse,
  RotateCcw
} from 'lucide-react';
import { ASSETS, getWhatsAppLink } from '../data/content';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  modelUsed?: string;
}

export type ChatRole = 'coach' | 'nutritionist' | 'rehab';
export type TaskComplexity = 'general' | 'fast' | 'complex';

const ROLE_METADATA: Record<ChatRole, { name: string; title: string; avatar: string; icon: any; starter: string }> = {
  coach: {
    name: 'Pro Fit Gym AI Coach',
    title: 'North Nazimabad Fitness Lead',
    avatar: ASSETS.gymInterior,
    icon: Dumbbell,
    starter: "Hey! Welcome to Pro Fit Gym in North Nazimabad. I'm here to guide your training, classes (Aerobics, Zumba, Cycling), and fitness journey. What goal are we conquering today?",
  },
  nutritionist: {
    name: 'Pro Fit Gym Sports Nutritionist',
    title: 'Macronutrient & Metabolic Expert',
    avatar: ASSETS.nutrition,
    icon: Apple,
    starter: "Welcome! I calculate exact caloric deficits/surpluses, protein thresholds, and customized Pakistani & international meal protocols. What's your current weight & target?",
  },
  rehab: {
    name: 'Biomechanics & Rehab Specialist',
    title: 'Injury Recovery & Adaptive Movement',
    avatar: ASSETS.trainerSpotting,
    icon: HeartPulse,
    starter: "Hello! I specialize in joint decompression, spine alignment, and safe movement for past injuries or Cerebral Palsy (CP). Where are you experiencing discomfort or weakness?",
  },
};

const SUGGESTED_PROMPTS: Record<ChatRole, string[]> = {
  coach: [
    'Design a 4-day hypertrophy split for me',
    'Which Pro Fit Gym membership suits my goals?',
    'How do I stay consistent when busy?',
  ],
  nutritionist: [
    'How much protein do I need for fat loss?',
    'Healthy high-protein Pakistani meal ideas',
    'Should I take creatine monohydrate?',
  ],
  rehab: [
    'Lower back pain during deadlifts/squats',
    'Mobility routine for stiff desk workers',
    'Adaptive training principles for Cerebral Palsy',
  ],
};

interface GeminiChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const GeminiChatModal: React.FC<GeminiChatModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [role, setRole] = useState<ChatRole>('coach');
  const [complexity, setComplexity] = useState<TaskComplexity>('general');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'model',
      text: ROLE_METADATA.coach.starter,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modelUsed: 'gemini-3.5-flash',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showRoleMenu, setShowRoleMenu] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized, isLoading]);

  // Handle role change
  const handleRoleChange = (newRole: ChatRole) => {
    setRole(newRole);
    setShowRoleMenu(false);
    setMessages((prev) => [
      ...prev,
      {
        id: `role-switch-${Date.now()}`,
        role: 'model',
        text: `Switched mode to **${ROLE_METADATA[newRole].name}** (${ROLE_METADATA[newRole].title}). ${ROLE_METADATA[newRole].starter}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: complexity === 'fast' ? 'gemini-3.1-flash-lite' : complexity === 'complex' ? 'gemini-3.1-pro-preview' : 'gemini-3.5-flash',
      },
    ]);
  };

  // Handle sending a message
  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Build conversation history (excluding introductory or welcome messages if desired)
      const history = messages.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history,
          role,
          taskComplexity: complexity,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error ${res.status}`);
      }

      const data = await res.json();
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: data.modelUsed,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        text: "I hit a temporary connection glitch. If you need immediate guidance, you can also message Pro Fit Gym directly on WhatsApp (0320 8200254).",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: 'offline',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetConversation = () => {
    setMessages([
      {
        id: `reset-${Date.now()}`,
        role: 'model',
        text: ROLE_METADATA[role].starter,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: complexity === 'fast' ? 'gemini-3.1-flash-lite' : complexity === 'complex' ? 'gemini-3.1-pro-preview' : 'gemini-3.5-flash',
      },
    ]);
  };

  if (!isOpen) return null;

  const currentRoleMeta = ROLE_METADATA[role];
  const IconComponent = currentRoleMeta.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`w-full sm:max-w-2xl bg-[#121212] border border-[#2E2E2E] shadow-2xl rounded-t-3xl sm:rounded-3xl flex flex-col overflow-hidden transition-all duration-300 ${
          isMinimized ? 'h-16' : 'h-[92vh] sm:h-[680px]'
        }`}
      >
        {/* Chat Header */}
        <div className="p-3.5 sm:p-4 bg-[#181818] border-b border-[#282828] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37] bg-neutral-900 shrink-0">
                <img
                  src={currentRoleMeta.avatar}
                  alt={currentRoleMeta.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#D4AF37] border-2 border-black" />
            </div>

            {/* Role dropdown trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowRoleMenu(!showRoleMenu)}
                className="flex items-center gap-1.5 text-left group cursor-pointer focus:outline-none"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display text-base sm:text-lg text-white font-black tracking-tight group-hover:text-[#D4AF37] transition-colors">
                      {currentRoleMeta.name}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[11px] text-[#A0A0A0] block -mt-0.5">
                    {currentRoleMeta.title}
                  </span>
                </div>
              </button>

              {/* Role Dropdown Menu */}
              {showRoleMenu && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-[#1E1E1E] border border-[#333] shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest px-2.5 py-1">
                    Select Specialist Role
                  </div>
                  {(['coach', 'nutritionist', 'rehab'] as ChatRole[]).map((r) => {
                    const meta = ROLE_METADATA[r];
                    const RIcon = meta.icon;
                    return (
                      <button
                        key={r}
                        type="button"
                        onClick={() => handleRoleChange(r)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-colors cursor-pointer ${
                          role === r
                            ? 'bg-[#D4AF37] text-black font-bold'
                            : 'text-neutral-200 hover:bg-[#282828]'
                        }`}
                      >
                        <RIcon className="w-4 h-4 shrink-0" />
                        <div>
                          <div className="text-xs font-bold leading-tight">{meta.name}</div>
                          <div className={`text-[10px] ${role === r ? 'text-black/70' : 'text-neutral-400'}`}>
                            {meta.title}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handleResetConversation}
              title="Reset conversation"
              className="p-2 text-neutral-400 hover:text-white hover:bg-[#252525] rounded-xl transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              title={isMinimized ? 'Expand' : 'Minimize'}
              className="p-2 text-neutral-400 hover:text-white hover:bg-[#252525] rounded-xl transition-colors cursor-pointer"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              title="Close chat"
              className="p-2 text-neutral-400 hover:text-white hover:bg-[#252525] rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content when not minimized */}
        {!isMinimized && (
          <>
            {/* Speed & Complexity Model Toggle Bar */}
            <div className="px-4 py-2 bg-[#151515] border-b border-[#242424] flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-1 text-[11px] text-neutral-400 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Engine:</span>
              </div>
              <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[#0E0E0E] border border-[#262626]">
                <button
                  type="button"
                  onClick={() => setComplexity('fast')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer ${
                    complexity === 'fast'
                      ? 'bg-[#D4AF37] text-black shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Super fast responses using gemini-3.1-flash-lite"
                >
                  <Zap className="w-3 h-3" />
                  <span>Fast (Lite)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setComplexity('general')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer ${
                    complexity === 'general'
                      ? 'bg-[#D4AF37] text-black shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Balanced intelligent coaching using gemini-3.5-flash"
                >
                  <Flame className="w-3 h-3" />
                  <span>General (3.5)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setComplexity('complex')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer ${
                    complexity === 'complex'
                      ? 'bg-[#D4AF37] text-black shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Deep biomechanics & periodization analysis using gemini-3.1-pro-preview"
                >
                  <Brain className="w-3 h-3" />
                  <span>Complex (Pro)</span>
                </button>
              </div>
            </div>

            {/* Scrollable Message Thread */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#0E0E0E]">
              {messages.map((msg) => {
                const isUser = msg.role === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!isUser && (
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D4AF37]/50 bg-neutral-900 shrink-0 mt-1">
                        <img
                          src={currentRoleMeta.avatar}
                          alt="Coach"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}

                    <div className={`max-w-[85%] sm:max-w-[78%] flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                      <div
                        className={`rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                          isUser
                            ? 'bg-[#222222] text-white border border-[#333333]'
                            : 'bg-[#181818] text-neutral-200 border border-[#2A2A2A]'
                        }`}
                      >
                        {msg.text}
                      </div>

                      <div className="flex items-center gap-2 mt-1 px-1 text-[10px] text-neutral-400">
                        <span>{msg.timestamp}</span>
                        {msg.modelUsed && (
                          <>
                            <span>·</span>
                            <span className="text-[#D4AF37]/90 font-mono">{msg.modelUsed}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {isUser && (
                      <div className="w-8 h-8 rounded-full bg-[#262626] border border-[#383838] flex items-center justify-center shrink-0 mt-1 text-white">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex gap-3 justify-start items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D4AF37]/50 bg-neutral-900 shrink-0">
                    <img
                      src={currentRoleMeta.avatar}
                      alt="Coach"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="rounded-2xl px-4 py-2.5 bg-[#181818] border border-[#2A2A2A] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:0.4s]" />
                    <span className="text-[11px] text-neutral-400 ml-1.5">Analyzing protocol...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Starters */}
            <div className="px-4 py-2 bg-[#121212] border-t border-[#222222] overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-2 whitespace-nowrap">
                {SUGGESTED_PROMPTS[role].map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(prompt)}
                    className="px-3 py-1.5 rounded-full bg-[#1A1A1A] hover:bg-[#252525] border border-[#2A2A2A] text-[11px] text-neutral-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Input & Conversion Footer */}
            <div className="p-3.5 sm:p-4 bg-[#181818] border-t border-[#262626]">
              <div className="flex items-end gap-2.5 bg-[#0D0D0D] border border-[#2C2C2C] focus-within:border-[#D4AF37] rounded-2xl p-2 transition-colors">
                <textarea
                  ref={textareaRef}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={`Ask ${currentRoleMeta.name} anything about workouts, diet, or Karachi training...`}
                  rows={2}
                  className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none resize-none px-2 py-1 leading-normal"
                />
                <button
                  type="button"
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim() || isLoading}
                  aria-label="Send message"
                  className="p-2.5 rounded-xl bg-[#D4AF37] text-black font-bold hover:bg-[#c59e2b] disabled:opacity-40 disabled:hover:bg-[#D4AF37] transition-all cursor-pointer active:scale-95 shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Quick Connect Banner */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-2.5 text-[11px] text-neutral-400 px-1">
                <span>Want hands-on 1-on-1 private training in Karachi?</span>
                <div className="flex items-center gap-3">
                  <a
                    href={getWhatsAppLink('Hi Pro Fit Gym, I was chatting with your AI coach and would like to inquire about joining in North Nazimabad.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] hover:underline font-semibold flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Pro Fit Gym</span>
                  </a>
                  <span>·</span>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenBooking();
                    }}
                    className="text-white hover:text-[#D4AF37] font-semibold underline"
                  >
                    Free Assessment
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
