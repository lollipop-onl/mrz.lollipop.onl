import { Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";

type Props = { children: React.ReactNode };

export const Document = ({ children }: Props) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
};
