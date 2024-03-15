import { Footer } from "~/components/Footer";

type Props = { children: React.ReactNode };

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-3 bg-slate-400 shrink-0" />
      <main className="grow">
      {children}
      </main>
      <footer className="shrink-0">
        <Footer />
      </footer>
    </div>
  )
}