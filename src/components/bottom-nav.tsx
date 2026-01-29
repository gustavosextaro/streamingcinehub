'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, ListVideo, Clock, PlusSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useProfile } from '@/context/profile-context';

const navItems = [
  { href: '/', label: 'Início', icon: Home, authRequired: false },
  { href: '/search', label: 'Ver Todos', icon: Search, authRequired: false },
  { href: '/my-list', label: 'Minha Lista', icon: ListVideo, authRequired: true },
  { href: '/recent', label: 'Recentes', icon: Clock, authRequired: false },
];

const adminNavItem = { href: '/add-movie', label: 'Adicionar', icon: PlusSquare, authRequired: true };


export function BottomNav() {
  const pathname = usePathname();
  const { user } = useProfile();

  const allNavItems = user?.email === 'gustavosextaro@gmail.com' ? [...navItems, adminNavItem] : navItems;

  return (
    <footer className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-t">
      <nav className="flex justify-around items-center h-16">
        {allNavItems.map((item) => {
          const isActive = (item.href === '/' && pathname === '/') || (item.href !== '/' && pathname.startsWith(item.href));
          const href = item.authRequired && !user ? '/login' : item.href;
          return (
            <Link key={item.label} href={href} className="flex flex-col items-center gap-1 text-xs text-muted-foreground flex-1 py-2">
              <item.icon className={cn('h-6 w-6', isActive && 'text-accent')} />
              <span className={cn(isActive && 'text-accent font-semibold')}>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}
