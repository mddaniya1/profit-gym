import React from 'react';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { ARTICLES, ArticleItem } from '../data/content';

interface ArticlesProps {
  onSelectArticle: (article: ArticleItem) => void;
}

export const Articles: React.FC<ArticlesProps> = ({ onSelectArticle }) => {
  return (
    <section id="articles" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#C6FF00] inline-block mb-3">
              TIPS FROM ZULQARNAIN
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[0.95]">
              NUTRITION & TRAINING GUIDES FOR BEGINNERS
            </h2>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onSelectArticle(ARTICLES[0])}
              className="inline-flex items-center gap-2.5 bg-[#C6FF00] text-black font-extrabold text-xs tracking-wider uppercase px-6 py-3 rounded-full hover:bg-[#b0e600] hover:shadow-[0_0_20px_rgba(198,255,0,0.35)] transition-all cursor-pointer group"
            >
              <span>VIEW ALL ARTICLES</span>
              <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-[#C6FF00] group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          </div>
        </div>

        {/* 3 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group rounded-3xl overflow-hidden bg-[#161616] border border-[#262626] hover:border-[#383838] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 shadow-xl"
            >
              {/* Image with Tag & Date Overlay matching reference */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1D1D1D]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Author & Date metadata chip */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-[11px] font-extrabold tracking-wider text-[#C6FF00] uppercase">
                  <span>{article.author}</span>
                  <span className="text-white/60">·</span>
                  <span className="text-white/80">{article.date}</span>
                </div>
              </div>

              {/* Title & Excerpt */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white tracking-tight mb-3 group-hover:text-[#C6FF00] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E8E8E] leading-relaxed line-clamp-2 mb-6">
                    {article.snippet}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#242424] flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-300 group-hover:text-[#C6FF00] transition-colors inline-flex items-center gap-1.5">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[11px] text-neutral-500 font-medium">
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
