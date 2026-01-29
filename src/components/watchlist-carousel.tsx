"use client";

import { useState, useEffect } from "react";
import { useProfile } from "@/context/profile-context";
import type { Movie } from "@/types";
import { MovieCarousel } from "./movie-carousel";
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { useFirestore } from "@/firebase";

export function WatchlistCarousel() {
  const { user, profile } = useProfile();
  const [watchlist, setWatchlist] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const firestore = useFirestore();

  useEffect(() => {
    if (!user || !profile || !firestore) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const watchlistRef = collection(
      firestore,
      `users/${user.uid}/profiles/${profile.id}/watchlist`
    );
    const q = query(watchlistRef, orderBy("addedAt", "desc"), limit(20));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const movies = querySnapshot.docs.map(
        (doc) =>
          ({
            id: parseInt(doc.id),
            ...doc.data(),
          } as Movie)
      );
      setWatchlist(movies);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user, profile, firestore]);

  if (loading || watchlist.length === 0) {
    return null;
  }

  return <MovieCarousel title="Minha Lista" movies={watchlist} />;
}
