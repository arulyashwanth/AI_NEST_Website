import './App.css';
import Navbar from './components/layout/Navbar';
import HomePage from './components/pages/HomePage';
import { ThemeProvider } from './components/theme/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ai-nest-theme">
      <div className="min-h-screen w-full bg-background font-sans">
        <Navbar />
        <HomePage />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;