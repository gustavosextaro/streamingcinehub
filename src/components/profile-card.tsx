import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Profile } from "@/types";
import { cn } from "@/lib/utils";

interface ProfileCardProps {
  profile: Profile;
  onClick: () => void;
  className?: string;
}

export function ProfileCard({ profile, onClick, className }: ProfileCardProps) {
  return (
    <button onClick={onClick} className={cn("flex flex-col items-center gap-2 group", className)}>
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-md overflow-hidden transition-all duration-300 group-hover:border-2 group-hover:border-white group-focus:border-2 group-focus:border-white outline-none">
        <Avatar className="w-full h-full rounded-md">
          <AvatarImage src={profile.avatar} alt={profile.name} />
          <AvatarFallback className="text-4xl rounded-md bg-primary text-primary-foreground">
            {profile.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
      <span className="text-muted-foreground group-hover:text-white transition-colors">{profile.name}</span>
    </button>
  );
}
