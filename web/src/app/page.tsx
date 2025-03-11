import Link from "next/link";
import { ArrowRight, Layers, Palette, Globe } from "lucide-react";
import React from "react";
import { LogoMarquee } from "../components/logo-marquee";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-gradient-to-b  via-taupe-300 via-[30%]  to-charcoal-900">
      {/* Hero section */}
      <section className="py-20 md:py-28 lg:py-36">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Car logos simplified
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A complete set of standardized logos for every car brand.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="/icons"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Browse Icons
            </a>
            <a
              href="/docs"
              className="rounded-full border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Get Started
            </a>
          </div>

          {/* Logo Marquee */}
          <div className="w-full max-w-none mx-auto mt-12 mb-8 relative overflow-hidden">
            {/* Gradient overlays - made thinner */}
            <div className="absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-[5%] bg-gradient-to-l from-background to-transparent z-10" />
            <LogoMarquee speed="medium" logoSize={46} rowCount={4} gap={24} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 ">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Seamless integration
          </h2>
          <p className="text-center text-muted-foreground">
            Use Cardog Icons in your projects with ease.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://cardog.ai"
              className="group hover:no-underline relative overflow-hidden shadow-[inset_0_0_3rem_#EAC6AD] hover:shadow-[inset_0_0_8rem_#EAC6AD,0_0_2rem_#EAC6AD] border-bernese-400/80 hover:border-bernese-300 bg-bernese-300/20 backdrop-blur-sm border text-bernese-300 p-4 flex-grow rounded-3xl flex flex-col items-start duration-500"
            >
              <img
                className="absolute -right-4 -top-4 sm:opacity-40 opacity-10 -z-[1] group-hover:scale-50 group-hover:-rotate-12 duration-500 group-hover:-translate-x-16"
                src="/logo.svg"
                alt=""
                width={96}
                height={96}
              />
              <img
                className="absolute right-2 top-2 opacity-40 sm:opacity-100 -z-[1] group-hover:rotate-12 group-hover:scale-150 group-hover:translate-y-2 group-hover:-translate-x-2 duration-500"
                src="/logo.svg"
                alt=""
                width={56}
                height={56}
              />
              <div className="bg-bernese-200 group-hover:bg-bernese-300 duration-500 font-bold text-black rounded-full px-2 text-sm">
                v2
              </div>
              <h1 className="text-2xl mt-2 text-black">By Cardog</h1>
              <span className="font-thin max-w-[28ch] text-black mt-1 opacity-70 group-hover:opacity-100 duration-1000">
                Built for developers by developers
              </span>
            </a>

            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://reactnative.dev/"
              className="group hover:no-underline relative overflow-hidden shadow-[inset_0_0_3rem_#fff4] hover:shadow-[inset_0_0_3rem_#fff4,0_0_2rem_#fff4] border-white/40 hover:border-white/70 bg-gradient-to-br from-yellow-400/10 via-cyan-400/10 to-pink-400/10 backdrop-blur-sm text-black dark:text-white p-4 flex-grow rounded-3xl hover:saturate-150 hover:brightness-110 flex flex-col items-start duration-500 border"
            >
              <img
                className="absolute right-2 top-2 opacity-40 sm:opacity-100 group-hover:scale-y-110 -z-[1] group-hover:-scale-x-110 duration-500 group-hover:-translate-x-2 group-hover:translate-y-2"
                src="/react.svg"
                alt="react-native"
                width={56}
                height={56}
              />
              <div className="bg-gradient-to-br from-orange-300/90 via-cyan-300/90 to-pink-300/90 duration-500 font-bold text-black rounded-full px-2 text-sm">
                v0.78
              </div>
              <h1 className="text-2xl font-semibold mt-2 bg-gradient-to-br from-yellow-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
                React Native
              </h1>
              <span className="font-thin max-w-[24ch] mt-1 opacity-70 group-hover:opacity-100 duration-1000">
                Integrate Cardog Icons in your React Native app seamlessly
              </span>
            </a>

            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://react.dev"
              className="group hover:no-underline relative overflow-hidden shadow-[inset_0_0_3rem_#61dafb] hover:shadow-[inset_0_0_8rem_#61dafb,0_0_2rem_#61dafb] border-[#61dafb]/90 hover:border-[#61dafb] bg-[#61dafb]/20 backdrop-blur-sm border text-[#087ea4] p-4 flex-grow rounded-3xl flex flex-col items-start duration-500"
            >
              <img
                className="absolute -right-3 -top-3 sm:opacity-40 opacity-10 -z-[1] group-hover:scale-110 group-hover:rotate-[30deg] duration-700"
                src="/react.svg"
                alt="react"
                width={96}
                height={96}
              />
              <img
                className="absolute right-2 top-2 text-white opacity-40 sm:opacity-100 -z-[1] group-hover:-rotate-[30deg] group-hover:scale-105 duration-500"
                src="/react.svg"
                alt="react navigation"
                width={56}
                height={56}
              />
              <div className="bg-[#61dafb] group-hover:bg-[#61dafb]/50 duration-500 font-bold text-black rounded-full px-2 text-sm">
                v15+
              </div>
              <h1 className="text-2xl mt-2">React</h1>
              <span className="font-thin text-blue-900 max-w-[24ch] mt-1 opacity-70 group-hover:opacity-100 duration-1000">
                Seamless integration with your React projects
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-background">
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to get started?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore our documentation to learn how to integrate Cardog Icons
            into your projects.
          </p>
          <a
            href="/docs"
            className="mt-8 flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Documentation
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

const ReactLogo = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
    >
      <title>React Logo</title>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" stroke-width="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
});
