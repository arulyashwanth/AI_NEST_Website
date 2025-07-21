import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Research', href: '#projects' },
  { name: 'People', href: '#people' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2 dark:bg-slate-900'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-maroon-700 dark:text-gold-400">
                AI NEST
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-maroon-600 transition-colors dark:text-neutral-200 dark:hover:text-gold-400"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-maroon-600 px-2 py-1 rounded-md transition-colors dark:text-neutral-200 dark:hover:text-gold-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {theme === 'light' ? (
            <Sun className="h-5 w-5" />
          ) : theme === 'dark' ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Laptop className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}