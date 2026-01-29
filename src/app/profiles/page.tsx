"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { useProfile } from '@/context/profile-context';
import type { Profile } from '@/types';
import { ProfileCard } from '@/components/profile-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useFirestore } from '@/firebase';

export default function ProfilesPage() {
  const { user, setProfile, loading: authLoading } = useProfile();
  const firestore = useFirestore();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [newProfileName, setNewProfileName] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
      return;
    }
    if (authLoading || !user || !firestore) return;

    const fetchProfiles = async () => {
      setLoading(true);
      const profilesCol = collection(firestore, `users/${user.uid}/profiles`);
      const profileSnapshot = await getDocs(profilesCol);
      const profilesList = profileSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Profile));
      setProfiles(profilesList);
      setLoading(false);
    };

    fetchProfiles();
  }, [user, authLoading, firestore, router]);

  const handleProfileSelect = (profile: Profile) => {
    setProfile(profile);
    router.push('/');
  };

  const handleAddProfile = async () => {
    if (!user || newProfileName.trim() === "" || !firestore) return;
    const avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(newProfileName)}`;
    const newProfileData = {
      name: newProfileName,
      avatar: avatarUrl,
      userId: user.uid,
      createdAt: serverTimestamp(),
    };
    const profilesCol = collection(firestore, `users/${user.uid}/profiles`);
    const docRef = await addDoc(profilesCol, newProfileData);
    
    const newProfile: Profile = { 
      id: docRef.id,
      name: newProfileData.name,
      avatar: newProfileData.avatar,
    };
    
    handleProfileSelect(newProfile);
  };

  if (authLoading || (loading && user)) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center space-y-8">
        <h1 className="text-3xl md:text-5xl font-headline">Quem está assistindo?</h1>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Skeleton className="w-24 h-24 md:w-32 md:h-32 rounded-md" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 space-y-8">
      <h1 className="text-3xl md:text-5xl font-headline">Quem está assistindo?</h1>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {profiles.map(p => (
          <ProfileCard key={p.id} profile={p} onClick={() => handleProfileSelect(p)} />
        ))}
        {profiles.length < 5 && (
          isAdding ? (
            <div className="flex flex-col items-center gap-2 w-24 md:w-32">
              <Input
                placeholder="Nome"
                value={newProfileName}
                onChange={(e) => setNewProfileName(e.target.value)}
                className="text-center"
                autoFocus
              />
              <Button onClick={handleAddProfile} size="sm">Salvar</Button>
              <Button onClick={() => setIsAdding(false)} variant="ghost" size="sm">Cancelar</Button>
            </div>
          ) : (
            <button onClick={() => setIsAdding(true)} className="flex flex-col items-center gap-2 group">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-md flex items-center justify-center bg-muted/20 transition-all duration-300 group-hover:bg-muted/40">
                <Plus className="h-12 w-12 text-muted-foreground" />
              </div>
              <span className="text-muted-foreground group-hover:text-white transition-colors">Adicionar Perfil</span>
            </button>
          )
        )}
      </div>
    </div>
  );
}
