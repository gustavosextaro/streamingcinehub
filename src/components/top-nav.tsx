'use client';

import Link from 'next/link';
import { Logo } from './logo';
import { SearchBar } from './search-bar';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useProfile } from '@/context/profile-context';
import { ProfileSwitcher } from './profile-switcher';

export function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useProfile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
        "hidden md:flex items-center justify-between px-6 py-3 fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled ? 'bg-background' : 'bg-gradient-to-b from-black/80 to-transparent'
      )}>
      <div className="flex items-center gap-8">
        <Logo />
        <nav className="flex items-center gap-4">
            <Button variant="ghost" asChild className="text-sm font-bold text-foreground hover:text-white">
                <Link href="/">Início</Link>
            </Button>
            <Button variant="ghost" asChild className="text-sm font-bold text-foreground hover:text-white">
                <Link href="/search">Ver Todos</Link>
            </Button>
            <Button variant="ghost" asChild className="text-sm font-bold text-foreground hover:text-white">
                <Link href={user ? "/my-list" : "/login"}>Minha Lista</Link>
            </Button>
            <Button variant="ghost" asChild className="text-sm font-bold text-foreground hover:text-white">
                <Link href="/recent">Recentes</Link>
            </Button>
            {user?.email === 'gustavosextaro@gmail.com' && (
              <Button variant="ghost" asChild className="text-sm font-bold text-foreground hover:text-white">
                  <Link href="/add-movie">Adicionar Filme</Link>
              </Button>
            )}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <SearchBar />
        {user ? (
            <ProfileSwitcher />
        ) : (
            <Button asChild>
                <Link href="/login">Entrar</Link>
            </Button>
        )}
      </div>
    </header>
  );
}
