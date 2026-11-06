/* eslint-disable */
// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import React, { useState, useEffect } from "react";
import { BuildingParticles } from "@/components/originkit/ui/hero-20/building-particles";
import { GridRail } from "@/components/originkit/ui/hero-20/grid-rail";
import { Reveal, RevealGroup } from "@/components/originkit/ui/hero-20/reveal";

/** Public asset under /sections/hero-20/assets */
function asset(file: string) {
  return `/originkit/hero-20/${file}`;
}

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

const ArrowIcon = ({ src }: { src: string }) => (
  <span className="relative block size-[22px] shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-[3px]">
    <span className="absolute inset-[28.66%_35.71%_23.78%_35.72%] block">
      <img src={src} alt="" className="absolute inset-0 size-full max-w-none object-contain" />
    </span>
  </span>
);

export const Section24Hero = () => {
  const [productCount, setProductCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      if (count <= 17) {
        setProductCount(count);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "Library", href: "#library" },
    { label: "Thaddeus", href: "#shipping" },
    { label: "Studio", href: "#studio" },
    { label: "Feedback", href: "#feedback" },
  ];

  return (
    <main className="w-full bg-[#f5f5f2]">
      <div className="relative mx-auto flex min-h-dvh w-full flex-col items-center overflow-hidden ultrawide:max-w-[2000px]">
        <GridRail className="left-0" />
        <GridRail className="right-0" />

        {/* Nav */}
        <Reveal className="w-full">
          <nav className="relative z-10 mx-8 flex h-14 items-center justify-between p-4 ipad:mx-13 ipad:h-[74px] ipad:p-6 desktop-sm:mx-auto desktop-sm:h-[50px] desktop-sm:w-full desktop-sm:max-w-[752px] desktop-sm:p-0 desktop-sm:mt-[18px] full-hd:max-w-[1000px] full-hd:h-[64px] full-hd:mt-6 ultrawide:max-w-[1240px] ultrawide:h-[76px] ultrawide:mt-8">
            {/* Logo: The TOS logo mark, then TOS Labs in the same size and weight */}
            <a
              href="#top"
              className="flex items-center gap-[6.154px] transition-opacity duration-200 ease-out ipad:gap-2 [@media(hover:hover)]:hover:opacity-70"
            >
              <img
                src={asset("logo-mark.svg")}
                alt="TOS"
                width={14}
                height={16}
                className="h-[15.385px] w-[13.846px] ipad:h-5 ipad:w-[18px] full-hd:h-6 full-hd:w-[21px] ultrawide:h-7 ultrawide:w-[25px]"
              />
              <span className="font-sans text-[15.385px] leading-[19.615px] font-semibold tracking-[-0.3077px] text-[#121212] ipad:text-[20px] ipad:leading-[25.5px] ipad:tracking-[-0.4px] full-hd:text-[24px] full-hd:leading-[30px] full-hd:tracking-[-0.48px] ultrawide:text-[28px] ultrawide:leading-[36px] ultrawide:tracking-[-0.56px]">
                TOS Labs
              </span>
            </a>

            {/* Desktop Nav Links: Library, Thaddeus, Studio, Feedback */}
            <ul className="hidden items-center gap-6 font-tight text-[17px] leading-[25.5px] tracking-[-0.34px] text-black desktop-sm:flex full-hd:gap-8 full-hd:text-[19px] ultrawide:gap-10 ultrawide:text-[22px] ultrawide:leading-[30px]">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="relative whitespace-nowrap text-black/70 transition-colors duration-200 ease-out after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-200 after:ease-out [@media(hover:hover)]:hover:text-black [@media(hover:hover)]:hover:after:origin-left [@media(hover:hover)]:hover:after:scale-x-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA: Get notified with chevron */}
            <a
              href="#signup"
              className="group hidden cursor-pointer items-center justify-center gap-[10px] rounded-[10px] border border-black/10 bg-black/[0.02] py-[14px] pr-[12px] pl-[20px] transition-colors duration-200 ease-out desktop-sm:flex [@media(hover:hover)]:hover:border-black/20 [@media(hover:hover)]:hover:bg-black/[0.05]"
            >
              <span className="font-lato text-[14px] leading-[1.5] font-bold tracking-[-0.42px] whitespace-nowrap text-[#121212]">
                Get notified
              </span>
              <ArrowIcon src={asset("arrow-dark.svg")} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="size-6 cursor-pointer transition-opacity duration-200 ease-out desktop-sm:hidden [@media(hover:hover)]:hover:opacity-60"
            >
              <img
                src={asset("menu.svg")}
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
            </button>
          </nav>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="mx-8 mt-2 rounded-xl border border-black/10 bg-[#f5f5f2] p-4 shadow-lg desktop-sm:hidden animate-in fade-in duration-200 relative z-20">
              <ul className="flex flex-col gap-3 font-tight text-[16px] text-black">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-black/80 hover:text-black"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2 border-t border-black/10">
                  <a
                    href="#signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between font-lato text-[14px] font-bold text-[#121212]"
                  >
                    <span>Get notified</span>
                    <ArrowIcon src={asset("arrow-dark.svg")} />
                  </a>
                </li>
              </ul>
            </div>
          )}
        </Reveal>

        {/* Hero Section */}
        <section className="relative z-10 mx-auto mt-[113px] flex w-full max-w-[402px] flex-col items-center gap-8 px-[43.5px] ipad:mt-[126px] ipad:max-w-[745px] ipad:px-[73px] desktop-sm:mt-[95.5px] desktop-sm:max-w-[599px] desktop-sm:px-0 full-hd:mt-[128px] full-hd:max-w-[760px] full-hd:gap-10 ultrawide:mt-[176px] ultrawide:max-w-[940px] ultrawide:gap-12">
          <RevealGroup className="flex flex-col items-center gap-5" delay={0.15}>
            {/* Pill Tag: A lab by The Obsidian Studios (with tiny shard / gem icon) */}
            <Reveal className="relative flex items-center justify-center gap-[7.222px] border-[0.722px] border-dashed border-[rgba(2,2,2,0.1)] px-4 py-3">
              <CornerTicks />
              <span
                aria-hidden
                className="absolute top-1/2 left-1/2 h-[44px] w-[222px] -translate-x-1/2 -translate-y-1/2 opacity-5"
                style={{
                  backgroundImage: `url(${asset("diagonal-lines.png")})`,
                  backgroundSize: "5.056px 5.056px",
                }}
              />
              <span className="relative flex items-center gap-[10px]">
                {/* Tiny shard/gem polygon icon */}
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-[16px] text-[#121212]"
                >
                  <polygon points="6 3 18 3 22 9 12 22 2 9" />
                </svg>
                <span className="font-lato text-[14px] leading-[1.5] font-bold tracking-[-0.42px] text-[#121212]">
                  A lab by The Obsidian Studios
                </span>
              </span>
            </Reveal>

            {/* Headline: Build, Break, (line 1) and Ship. (line 2). On mobile: Build, / Break, / and Ship. */}
            <div className="flex flex-col items-center gap-4">
              <Reveal>
                <h1 className="text-center font-instrument-serif text-[44px] leading-[1.1] tracking-[-1.32px] text-[#121212] ipad:text-[68px] ipad:leading-[77px] ipad:tracking-[-2.04px] full-hd:text-[86px] full-hd:leading-[97px] full-hd:tracking-[-2.58px] ultrawide:text-[106px] ultrawide:leading-[120px] ultrawide:tracking-[-3.18px]">
                  Build, <br className="sm:hidden" />
                  Break,
                  <br />
                  and Ship.
                </h1>
              </Reveal>

              {/* Sub text: Tools, experiments and full products from The Obsidian Studios, each with its own home. */}
              <Reveal>
                <p className="w-[316px] text-center font-tight text-[16px] leading-[27px] tracking-[-0.32px] text-[#121212] opacity-60 ipad:w-[415px] ipad:text-[18px] ipad:tracking-[-0.36px] full-hd:w-[520px] full-hd:text-[21px] full-hd:leading-[32px] full-hd:tracking-[-0.42px] ultrawide:w-[640px] ultrawide:text-[25px] ultrawide:leading-[38px] ultrawide:tracking-[-0.5px]">
                  Tools, experiments and full products from The Obsidian Studios, each with its own home.
                </p>
              </Reveal>
            </div>
          </RevealGroup>

          {/* Buttons: Explore the lab & Meet Thaddeus */}
          <Reveal className="flex items-center gap-4 px-2">
            {/* Primary Button */}
            <a
              href="#library"
              className="group relative flex cursor-pointer items-center justify-between overflow-hidden rounded-[12px] border-t border-white/15 transition-transform duration-200 ease-out [@media(hover:hover)]:hover:-translate-y-[2px] py-[14px] pr-[14px] pl-[24px] shadow-[0px_63px_18px_0px_rgba(16,16,16,0),0px_40px_16px_0px_rgba(11,11,11,0.01),0px_23px_14px_0px_rgba(8,8,8,0.05),0px_10px_10px_0px_rgba(5,5,5,0.09),0px_3px_6px_0px_rgba(0,0,0,0.1)]"
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-[12px]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(255,255,255,0.2) 4.0988%, rgba(255,255,255,0) 43.902%), linear-gradient(90deg, rgb(41,41,41) 0%, rgb(41,41,41) 100%)",
                }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.3)]"
              />
              <span className="relative font-lato text-[16px] leading-[1.5] font-bold tracking-[-0.32px] whitespace-nowrap text-white">
                Explore the lab
              </span>
              <span className="relative">
                <ArrowIcon src={asset("arrow-light.svg")} />
              </span>
            </a>

            {/* Secondary Button */}
            <a
              href="#shipping"
              className="group flex cursor-pointer items-center justify-center gap-[10px] self-stretch rounded-[10px] border border-black/10 bg-black/[0.02] py-[14px] pr-[14px] pl-[24px] transition-colors duration-200 ease-out [@media(hover:hover)]:hover:border-black/20 [@media(hover:hover)]:hover:bg-black/[0.05]"
            >
              <span className="font-lato text-[14px] leading-[1.5] font-bold tracking-[-0.42px] whitespace-nowrap text-[#121212]">
                Meet Thaddeus
              </span>
              <ArrowIcon src={asset("arrow-dark.svg")} />
            </a>
          </Reveal>

          {/* Small stat line: 17 products in the lab (counts up from 0) + animated scroll cue */}
          <Reveal className="mt-8 flex flex-col items-center gap-3 relative z-20">
            <span className="font-mono text-xs uppercase tracking-wider text-[#121212]/60">
              <span className="font-semibold text-[#121212]">{productCount}</span> products in the lab.
            </span>
            <div className="w-[1px] h-8 bg-black/15 overflow-hidden relative">
              <div className="w-full h-3 bg-black/50 animate-[bounce_1.8s_infinite]" />
            </div>
          </Reveal>
        </section>

        {/*
          Dotted cloud & Building render — sits inside the rails, scales with the screen.
          Mobile ships a pre-rendered halftone still; the live particle field
          starts at ipad. Each has its own source aspect.
        */}
        <div
          className="absolute top-125 left-1/2 aspect-753/571 w-[calc(100%-64px)] -translate-x-1/2 ipad:aspect-1383/942 ipad:top-[60%] ipad:w-[calc(100%-104px)] ipad:translate-y-12 desktop-sm:translate-y-0 desktop-sm:top-[100px] desktop-sm:w-[calc(100%-144px)] ultrawide:top-[350px] ultrawide:max-w-[calc(2000px-144px)] [--fade-start:72%] [--fade-mid:88%] ultrawide:[--fade-start:48%] ultrawide:[--fade-mid:72%]"
          style={{
            maskImage:
              "linear-gradient(to bottom, #000 0%, #000 var(--fade-start), rgba(0,0,0,0.55) var(--fade-mid), transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 0%, #000 var(--fade-start), rgba(0,0,0,0.55) var(--fade-mid), transparent 100%)",
          }}
        >
          <img
            src={asset("mobile-hero.png")}
            alt=""
            width={753}
            height={571}
            className="size-full object-contain ipad:hidden"
            style={{
              maskImage: [
                "linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)",
                "linear-gradient(to bottom, #000 0%, #000 62%, rgba(0,0,0,0.5) 82%, transparent 100%)",
              ].join(", "),
              WebkitMaskImage: [
                "linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)",
                "linear-gradient(to bottom, #000 0%, #000 62%, rgba(0,0,0,0.5) 82%, transparent 100%)",
              ].join(", "),
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />
          <div className="hidden size-full ipad:block">
            <BuildingParticles />
          </div>
        </div>
      </div>
    </main>
  );
};
