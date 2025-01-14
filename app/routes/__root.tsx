// app/routes/__root.tsx
import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import React, { Suspense } from "react";

import styles from "../styles/index.css?inline";
import type { ReactNode } from "react";

const NotFoundComponent = () => <div>Not Found</div>;

export const Route = createRootRoute({
  head: () => ({
    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-16.png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-48.png",
        sizes: "48x48",
      },
      {
        rel: "manifest",
        href: "/manifest.json",
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
      {
        name: "theme-color",
        content: "#000000",
      },
      {
        name: "msapplication-TileColor",
        content: "#000000",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <style>{styles}</style>
      </head>
      <body className="antialiased dark:bg-zinc-900 dark:text-white">
        <Suspense>
          <TanStackRouterDevtools />
        </Suspense>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
