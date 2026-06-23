import { buttonVariants } from "@/components/ui/button";
import { DiscordIcon } from "@/components/icons/discord-icon";
import { YouTubeIcon } from "@/components/icons/youtube-icon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-start overflow-hidden bg-background">
      {/* Spacer: pushes logo higher on larger screens */}
      <div
        className="flex-none h-[2vh] sm:h-[2vh] lg:h-[0.5vh]"
        aria-hidden="true"
      />
      {/* Fixed background image */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url(/background.jpg)",
        }}
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/80 z-0" />

      {/* Decorative top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent z-10" />

      {/* Corner decorations */}
      <div className="absolute top-3 left-3 border-t-2 border-l-2 border-border w-8 h-8 sm:top-4 sm:left-4 sm:w-12 sm:h-12 z-10" />
      <div className="absolute top-3 right-3 border-t-2 border-r-2 border-border w-8 h-8 sm:top-4 sm:right-4 sm:w-12 sm:h-12 z-10" />
      <div className="absolute bottom-3 left-3 border-b-2 border-l-2 border-border w-8 h-8 sm:bottom-4 sm:left-4 sm:w-12 sm:h-12 z-10" />
      <div className="absolute bottom-3 right-3 border-b-2 border-r-2 border-border w-8 h-8 sm:bottom-4 sm:right-4 sm:w-12 sm:h-12 z-10" />

      {/* Content */}
      <div className="z-10 flex flex-col items-center gap-4 px-4 pb-8 sm:gap-10 sm:px-6 sm:pb-0">
        {/* Logo */}
        <Image
          src="/ga-ru-logo.png"
          alt="[GA-RU] logo"
          width={600}
          height={200}
          className="h-auto w-full max-w-56 sm:max-w-64 lg:max-w-120"
          priority
        />

        {/* Welcome message */}
        <h1 className="text-cente text-base text-accent sm:text-xl lg:text-2xl">
          Добро пожаловать на сайт клана GA.RU
        </h1>

        {/* Divider */}
        <div className="flex w-full items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs tracking-[0.5em] uppercase text-muted-foreground">
            Links
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
            href="https://discord.com/invite/s6ZgA6S9xn"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full min-w-0 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-sans uppercase tracking-wider sm:w-auto sm:min-w-40",
            )}
          >
            <DiscordIcon />
            Discord
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=LaX5C9REMbM&list=PLysDvxyhx9B69cXvMbTJj0H6s1Hp9tZNR"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full min-w-0 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-sans uppercase tracking-wider sm:w-auto sm:min-w-40",
            )}
          >
            <YouTubeIcon />
            YouTube
          </Link>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent z-10" />
    </main>
  );
}
