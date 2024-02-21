import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const App: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="flex-grow">
        <p>MRZ Simulator</p>
      </main>
      <Footer />
    </div>
  );
};
