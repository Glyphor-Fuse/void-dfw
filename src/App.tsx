import { useEffect } from 'react';
import Index from './pages/Index';

function App() {
  useEffect(() => {
    // Smooth scroll behavior or custom cursor logic could go here
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <main className="relative min-h-screen">
      <div className="grain" />
      <Index />
    </main>
  );
}

export default App;