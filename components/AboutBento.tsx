import React from 'react';
import { ArrowUpRight, ShieldCheck, Terminal, Compass, Layers, Sparkles } from 'lucide-react';

const CornerTicks = ({ size = 8.667, width = 0.722 }) => (
  <>
    {[
      "left-0 top-0 border-l border-t",
      "right-0 top-0 border-r border-t",
      "bottom-0 left-0 border-b border-l",
      "right-0 bottom-0 border-r border-b",
    ].map((position) => (
      <span
        key={position}
        aria-hidden
        className={`absolute border-black/20 ${position}`}
        style={{
          width: size,
          height: size,
          borderWidth: 0,
          borderTopWidth: position.includes("border-t") ? width : 0,
          borderBottomWidth: position.includes("border-b") ? width : 0,
          borderLeftWidth: position.includes("border-l") ? width : 0,
          borderRightWidth: position.includes("border-r") ? width : 0,
          margin: -width,
        }}
      />
    ))}
  </>
);

export const AboutBento: React.FC = () => {
  return (
    <section id="about" className="w-full bg-[#f5f5f2] py-24 px-6 ipad:px-12 desktop-sm:px-16 border-t border-black/10">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative inline-flex items-center justify-center gap-2 border-[0.722px] border-dashed border-black/15 px-4 py-2 mb-4">
            <CornerTicks />
            <span className="font-mono text-xs uppercase tracking-widest text-[#121212]/70 font-semibold">
              ABOUT THE LAB
            </span>
          </div>

          <h2 className="font-instrument-serif text-4xl sm:text-5xl lg:text-6xl text-[#121212] tracking-tight mb-4">
            Where We Ship What We Make.
          </h2>

          <p className="font-tight text-base sm:text-lg text-[#121212]/70 max-w-2xl">
            TOS Labs is the research and release arm of The Obsidian Studios, a software studio in Nigeria. This is where we ship what we make.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Core Mission (Large 7 Columns) */}
          <div className="md:col-span-7 relative rounded-2xl bg-white border border-black/10 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-[0px_4px_24px_rgba(0,0,0,0.03)] group hover:border-black/25 transition-all">
            <CornerTicks />
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#121212]/50">
                  01 / CORE MISSION
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#121212]/5 text-[#121212] font-mono text-[10px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#121212] animate-pulse" />
                  LAGOS, NIGERIA
                </span>
              </div>

              <h3 className="font-instrument-serif text-3xl sm:text-4xl text-[#121212] mb-4 leading-tight">
                Crafted in West Africa, shipped to the world.
              </h3>

              <p className="font-tight text-base text-[#121212]/80 leading-relaxed mb-6">
                TOS Labs is the research and release arm of The Obsidian Studios, a software studio in Nigeria. This is where we ship what we make.
              </p>

              <div className="p-4 rounded-xl bg-[#f5f5f2] border border-black/5 font-mono text-xs text-[#121212]/70 leading-relaxed">
                "Every tool, experiment, and product has a home here before it scales. No half-finished proofs of concept left in notebooks."
              </div>
            </div>

            <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs font-mono text-[#121212]/50">
              <span>EST. 2026</span>
              <span className="text-[#121212] font-semibold">THE OBSIDIAN STUDIOS</span>
            </div>
          </div>

          {/* Card 2: Tagline & Philosophy (5 Columns) */}
          <div className="md:col-span-5 relative rounded-2xl bg-[#121212] text-white p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl group">
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-[11px] font-semibold tracking-wider text-white/50 uppercase">
                02 / OPERATING PRINCIPLE
              </span>
              <Sparkles className="w-4 h-4 text-white/70" />
            </div>

            <div>
              <div className="font-instrument-serif text-4xl sm:text-5xl text-white mb-3 tracking-tight">
                Build. Break. Ship.
              </div>
              <p className="font-tight text-sm text-white/70 leading-relaxed">
                Fast iterations, rigorous adversarial testing, and uncompromising delivery to real public production URLs.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
              <div>
                <div className="font-mono text-2xl font-bold text-white">17+</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                  Products in Incubation
                </div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-white">100%</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                  Independent Studio
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Why the Lab Exists (6 Columns) */}
          <div className="md:col-span-6 relative rounded-2xl bg-white border border-black/10 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-[0px_4px_24px_rgba(0,0,0,0.03)] group hover:border-black/25 transition-all">
            <CornerTicks />
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Compass className="w-4 h-4 text-[#121212]/70" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#121212]/50">
                  WHY THE LAB EXISTS
                </span>
              </div>

              <h3 className="font-instrument-serif text-3xl text-[#121212] mb-4">
                Born out of real client work.
              </h3>

              <p className="font-tight text-sm sm:text-base text-[#121212]/80 leading-relaxed mb-6">
                The Obsidian Studios builds custom web apps, mobile apps and websites for clients. Along the way we kept building tools that make work easier, so we gave them a home. TOS Labs is that home: every product has its own site, its own status and its own feedback line.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-black/5 font-mono text-xs text-[#121212]/70">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#121212]" />
                <span>Dedicated standalone domain per product</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#121212]" />
                <span>Transparent public readiness tracker</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#121212]" />
                <span>Direct feedback channel on every release</span>
              </div>
            </div>
          </div>

          {/* Card 4: Who's Behind It — Daniel Iwayemi (6 Columns) */}
          <div className="md:col-span-6 relative rounded-2xl bg-white border border-black/10 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-[0px_4px_24px_rgba(0,0,0,0.03)] group hover:border-black/25 transition-all">
            <CornerTicks />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#121212]/70" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#121212]/50">
                    WHO'S BEHIND IT
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#121212]/50 uppercase tracking-widest">
                  FOUNDER PROFILE
                </span>
              </div>

              <h3 className="font-instrument-serif text-3xl text-[#121212] mb-2">
                Daniel Iwayemi
              </h3>
              <p className="font-mono text-xs text-[#121212]/60 uppercase tracking-wider mb-4">
                Founder & Lead Developer, The Obsidian Studios & TOS Labs
              </p>

              <p className="font-tight text-sm sm:text-base text-[#121212]/80 leading-relaxed mb-4">
                A software engineer and product architect obsessed with building high-performance systems, crisp visual design, and resilient backend pipelines.
              </p>
              <p className="font-tight text-sm sm:text-base text-[#121212]/80 leading-relaxed mb-6">
                He founded The Obsidian Studios to deliver production-grade software that solves immediate, tangible friction for businesses and creators across Africa and global markets. He cares deeply about clean craft, execution speed, and real-world utility over vanity metrics.
              </p>
            </div>

            <div className="pt-4 border-t border-black/5 flex items-center justify-between">
              <a
                href="https://theobsidianstudios.space"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#121212] hover:opacity-70 transition-opacity"
              >
                <span>Work with the Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="font-mono text-[11px] text-[#121212]/40">LAGOS, NG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
