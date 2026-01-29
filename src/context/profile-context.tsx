"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import type { Profile } from '@/types';
import { doc, getDoc } from 'firebase/firestore';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useAuth, useFirestore } from '@/firebase';

interface ProfileContextType {
  user: User | null;
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;
  loading: boolean;
  logout: () => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfileState] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const auth = useAuth();
  const firestore = useFirestore();

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        Cookies.set('firebase-session', user.uid, { expires: 7, path: '/' });
        const storedProfileId = Cookies.get('selected-profile');
        if (storedProfileId && firestore) {
            try {
                const profileDoc = await getDoc(doc(firestore, `users/${user.uid}/profiles/${storedProfileId}`));
                if (profileDoc.exists()) {
                    setProfileState({ id: profileDoc.id, ...profileDoc.data() } as Profile);
                } else {
                    // Profile not found, clear cookie
                    Cookies.remove('selected-profile');
                    setProfileState(null);
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
                Cookies.remove('selected-profile');
                setProfileState(null);
            }
        }
      } else {
        Cookies.remove('firebase-session');
        Cookies.remove('selected-profile');
        setProfileState(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth, firestore]);

  const setProfile = (newProfile: Profile | null) => {
    setProfileState(newProfile);
    if (newProfile) {
      Cookies.set('selected-profile', newProfile.id, { expires: 30, path: '/' });
    } else {
      Cookies.remove('selected-profile');
    }
  };

  const logout = async () => {
    if (auth) {
      await auth.signOut();
    }
    setUser(null);
    setProfile(null);
    router.push('/login');
  };
  
  return (
    <ProfileContext.Provider value={{ user, profile, setProfile, loading, logout }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}
