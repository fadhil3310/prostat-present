import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import Footer from "../components/Footer";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown, Music } from "lucide-react";

gsap.registerPlugin(useGSAP);

import appCss from "../styles.css?url";
import { useCallback } from "react";
import CanvasStarrySky from "#/components/presentation/CanvasStarrySky";
import { StarrySky } from "#/components/presentation/StarrySky";

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "MISSION: PROBABILITY — An Among Us Statistical Investigation",
      },
      {
        name: "description",
        content:
          "Investigasi Statistik 4 Distribusi Probabilitas (Binomial, Poisson, Eksponensial, Normal) Berbasis Tema Among Us",
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "/assets/among-us/characters/impostor-purple-kill.png",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const appRef = useRef<HTMLDivElement>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const slideOverlayRef = useRef<HTMLDivElement>(null);

  const bgmRef = useRef<HTMLAudioElement>(null);
  const [isBgmPlaying, setIsBgmPlaying] = useState(false);
  const [isAppOpen, setIsAppOpen] = useState(false);

  const toggleApp = useCallback(() => {
    if (isAppOpen) {
      new Audio("/funny-whoosh.mp3").play();
      gsap.to(appRef.current, {
        translateY: "-100%",
        rotateX: -110,
        duration: 1,
        ease: "expo.out",
      });

      gsap.to(slideOverlayRef.current, {
        opacity: 0,
        duration: 1,
        delay: 1.25,
        onComplete: () => {
          new Audio("/strong-wind.mp3").play();
          new Audio("/wind-whoosh.mp3").play();
        },
      });
      gsap.to(slideRef.current, {
        rotateX: 0,
        translateY: 0,
        scale: 0.6,
        duration: 1,
        delay: 1.25,
      });
      gsap.to(slideContainerRef.current, {
        translateY: 0,
        borderRadius: 0,
        duration: 1,
        delay: 1.25,
      });

      gsap.to(slideRef.current, {
        scale: 1,
        duration: 1,
        delay: 3.25,
        onComplete: () => {
          new Audio("/shinese-gong.mp3").play();
        },
      });
      setIsAppOpen(false);
    } else {
      gsap.to(slideRef.current, {
        scale: 0.6,
        duration: 1,
        onComplete: () => {
          new Audio("/strong-wind.mp3").play();
        },
      });

      gsap.to(slideOverlayRef.current, {
        opacity: 1,
        duration: 1,
        delay: 1.5,
      });
      gsap.to(slideRef.current, {
        rotateX: 80,
        scale: 1.2,
        duration: 1,
        delay: 1.5,
      });
      gsap.to(slideContainerRef.current, {
        translateY: 400,
        borderRadius: 20,
        duration: 1.5,
        delay: 1.5,
        onComplete: () => {
          new Audio("/strong-wind.mp3").play();
          new Audio("/wind-whoosh.mp3").play();
        },
      });

      gsap.fromTo(
        appRef.current,
        {
          rotateX: -110,
          translateY: "-120%",
        },
        {
          translateY: 0,
          duration: 1.5,
          rotateX: 0,
          delay: 3,
          ease: "expo.out",
          onComplete: () => {
            new Audio("/funny-whoosh.mp3").play();
          },
        }
      );
      setIsAppOpen(true);
    }
  }, [isAppOpen, setIsAppOpen, slideRef, appRef]);

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="overflow-hidden scrollbar-none"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="relative w-screen h-screen scrollbar-none bg-black perspective-normal">
        <audio ref={bgmRef} src="/amogus.mp3" />

        <button
          className="absolute left-0 bottom-0 rounded-tr-2xl z-100 p-2 cursor-pointer"
          style={{
            background: isBgmPlaying ? 'green' : 'red'
          }}
          onClick={() => {
            if (isBgmPlaying) {
              bgmRef.current?.pause();
              setIsBgmPlaying(false);
            } else {
              bgmRef.current?.play();
              setIsBgmPlaying(true);
            }
          }}
        >
          <Music color="white" />
        </button>

        {/* <CanvasStarrySky className="absolute left-0 top-0 w-full h-full z-1" backgroundColor="black" /> */}

        {/* <div
          ref={starrySkyRef}
          className="absolute left-0 top-0 w-full h-full z-1 opacity-0"
        >
          <StarrySky
            backgroundColor="black"
            starColor="#eeeeee" // A light sky-blue glow
            lineSize={2} // Thicker falling lines
            staticStarCount={300}
            fallingLineCount={20}
            className="w-full h-full"
          />
        </div> */}

        <StarrySky
          backgroundColor="black"
          starColor="#eeeeee" // A light sky-blue glow
          lineSize={2} // Thicker falling lines
          staticStarCount={300}
          fallingLineCount={20}
          className="absolute left-0 top-0 z-1 w-full h-full"
        />

        {!isAppOpen && (
          <div className="absolute top-0 left-0 w-full flex justify-center z-10">
            <button
              className="rounded-b-2xl p-2 border-[3px] border-black bg-red-700 px-3.5 py-2 font-display opacity-40 hover:opacity-100 translate-y-[-20px] hover:translate-y-0 transition-opacity transition-transform cursor-pointer"
              onClick={toggleApp}
            >
              <p>= DEMO =</p>
            </button>
          </div>
        )}

        <div
          ref={appRef}
          className="absolute top-0 left-0 w-full h-[calc(100vh_-_200px)] z-2 px-60 pt-8 pb-20 transform-[translateY(-100%)]"
        >
          <iframe
            src="http://127.0.0.1:58722/"
            className="w-full h-full rounded-lg shadow-2xl"
          />
          {isAppOpen && (
            <div className="w-full flex justify-center">
              <button
                className="rounded-b-2xl p-2 border-[3px] border-black bg-red-700 px-3.5 py-2 font-display cursor-pointer"
                onClick={toggleApp}
              >
                <p>= DEMO =</p>
              </button>
            </div>
          )}
        </div>

        <div
          ref={slideContainerRef}
          className="absolute left-0 top-0 z-1 w-screen h-screen perspective-normal"
        >
          <div ref={slideRef} className="w-full h-full ">
            <div
              ref={slideOverlayRef}
              className="absolute left-0 top-0 w-full h-full opacity-0 bg-linear-to-b from-black via-black to-transparent pointer-events-none z-2"
            ></div>

            <div className="absolute left-0 top-0 w-full h-full flex flex-col bg-[#070b14] text-slate-100 font-body antialiased [overflow-wrap:anywhere] selection:bg-cyan-500/30 selection:text-cyan-200 z-1">
              {/* <Header /> */}
              <div className="flex-1">{children}</div>
              <Footer />
              {/* <TanStackDevtools
            config={{
              position: "bottom-right",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          /> */}
            </div>
          </div>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
