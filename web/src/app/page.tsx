import Link from "next/link";
import { ArrowRight, Layers, Palette, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero section */}
      <section className="py-20 md:py-28 lg:py-36">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Car logos simplified
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A complete set of standardized logos for every car brand.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/icons"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Browse Icons
            </Link>
            <Link
              href="/docs"
              className="rounded-full border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-accent/50">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Why Choose Cardog Icons?
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Layers className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Lightweight & Scalable</h3>
              <p className="mt-2 text-muted-foreground">
                Highly optimized SVG icons that scale perfectly for any screen
                size without losing quality.
              </p>
            </div>

            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://tamagui.dev/"
              className="group hover:no-underline relative overflow-hidden shadow-[inset_0_0_3rem_#fff4] hover:shadow-[inset_0_0_3rem_#fff4,0_0_2rem_#fff4] border-white/40 hover:border-white/70 bg-gradient-to-br from-yellow-400/10 via-cyan-400/10 to-pink-400/10 backdrop-blur-sm text-white p-4 flex-grow rounded-3xl hover:saturate-150 hover:brightness-110 flex flex-col items-start duration-500 border"
            >
              <img
                className="absolute right-2 top-2 opacity-40 sm:opacity-100 group-hover:scale-y-110 -z-[1] group-hover:-scale-x-110 duration-500 group-hover:-translate-x-2 group-hover:translate-y-2"
                src="/stack/tamagui.svg"
                alt="tamagui"
                width={56}
                height={56}
              />
              <div className="bg-gradient-to-br from-orange-300/90 via-cyan-300/90 to-pink-300/90 duration-500 font-bold text-black rounded-full px-2 text-sm">
                v1
              </div>
              <h1 className="text-2xl font-semibold mt-2 bg-gradient-to-br from-yellow-300 via-blue-200 to-pink-300 bg-clip-text text-transparent">
                React Native
              </h1>
              <span className="font-thin max-w-[24ch] mt-1 opacity-70 group-hover:opacity-100 duration-1000">
                ...
              </span>
            </a>

            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://react.dev"
              className="group hover:no-underline relative overflow-hidden shadow-[inset_0_0_3rem_#7b61c144] hover:shadow-[inset_0_0_8rem_#087ea4,0_0_2rem_#7b61c144] border-[#087ea4]/90 hover:border-[#087ea4] bg-[#087ea4]/20 backdrop-blur-sm border text-[#087ea4] p-4 flex-grow rounded-3xl flex flex-col items-start duration-500"
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
              <div className="bg-[#087ea4] group-hover:bg-[#087ea4] duration-500 font-bold text-blue-500 rounded-full px-2 text-sm">
                v15+
              </div>
              <h1 className="text-2xl mt-2">React</h1>
              <span className="font-thin text-blue-900 max-w-[24ch] mt-1 opacity-70 group-hover:opacity-100 duration-1000">
                Seamless integration with your React projects
              </span>
            </a>
            {/* <div className="flex flex-col items-center p-6 text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Framework Support</h3>
              <p className="mt-2 text-muted-foreground">
                Use with React, React Native, and more with our dedicated
                packages.
              </p>
            </div> */}
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
          <Link
            href="/docs"
            className="mt-8 flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Documentation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
