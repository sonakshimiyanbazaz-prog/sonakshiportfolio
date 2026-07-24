import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-5xl">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="mt-6 inline-block border-b border-foreground pb-0.5 text-sm">
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again.</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 border-b border-foreground pb-0.5 text-sm"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sonakshi Miyanbazaz — Researcher & Aspiring Mechatronics Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Sonakshi Miyanbazaz — high school senior exploring mechatronics, robotics, AI, physics, and interdisciplinary research.",
      },
      { name: "author", content: "Sonakshi Miyanbazaz" },
      { property: "og:title", content: "Sonakshi Miyanbazaz — Portfolio" },
      {
        property: "og:description",
        content:
          "Researcher, builder, and interdisciplinary thinker. Mechatronics, AI, robotics, physics, and philosophy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/education", label: "Education" },
  { to: "/research", label: "Research & Writing" },
  { to: "/experience", label: "Experience" },
  { to: "/interests", label: "Interests" },
  { to: "/publications", label: "Publication & Writing" },
  { to: "/awards", label: "Awards & Distinctions" },
  { to: "/contact", label: "Contact" },
] as const;

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-prose flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/70 font-serif text-sm">
            S
          </span>
          <span className="hidden font-serif text-lg tracking-tight sm:block">
            Sonakshi Miyanbazaz
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-[13px] text-muted-foreground lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden rounded-full border border-foreground px-4 py-1.5 text-xs tracking-wide transition-colors hover:bg-foreground hover:text-background lg:inline-block"
        >
          Get in touch
        </Link>
      </div>
      <div className="container-prose block overflow-x-auto pb-3 lg:hidden">
        <div className="flex gap-5 text-[13px] text-muted-foreground whitespace-nowrap">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="container-prose flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-serif text-lg">Sonakshi Miyanbazaz</p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Built with curiosity
        </p>
        <div className="flex gap-5 text-xs text-muted-foreground">
          <a href="mailto:sonakshimiyanbazaz@gmail.com" className="hover:text-foreground">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/sonakshi-miyanbazaz-15545b298"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
