import { Header } from "~/components/Header";
import "./globals.css";
import { Footer } from "~/components/Footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <html lang="ja">
      <body>
        <div className="flex flex-col min-h-full">
          <Header />
          <main className="flex-1 px-5 py-6">
            <div className="max-w-screen-lg mx-auto">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
