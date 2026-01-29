import Link from 'next/link';
import { Film } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-2xl font-headline font-bold text-white", className)}>
      <Film className="h-8 w-8 text-accent" />
      CineHub
    </Link>
  );
}
