"use client";
import { PageProvider } from "@/common/redux";
import "../styles/main.scss";
import { ILayout } from "@/common/interfaces";
import { PublicRoutes } from "@/common/routes";

export default function RootLayout({ children }: ILayout) {
  return (
    <html lang="en">
      <head>
        <title>Next-Ts-Template</title>
      </head>
      <body>
        <PageProvider>
          <PublicRoutes>
            <main style={{ padding: "10px" }}>{children}</main>
          </PublicRoutes>
        </PageProvider>
      </body>
    </html>
  );
}
