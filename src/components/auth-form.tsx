
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup,
  getAdditionalUserInfo,
  signInAnonymously
} from 'firebase/auth';
import { collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Chrome } from 'lucide-react';
import { useAuth, useFirestore } from '@/firebase';

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('gustavosextaro@gmail.com');
  const [password, setPassword] = useState('991899gustavo');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const auth = useAuth();
  const firestore = useFirestore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth || !firestore) return;
    setLoading(true);
    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const profilesCol = collection(firestore, `users/${user.uid}/profiles`);
        const profileSnapshot = await getDocs(profilesCol);
        
        toast({ title: "Sucesso!", description: `Bem-vindo de volta ao CineHub.` });

        if (profileSnapshot.docs.length === 1) {
            const profileId = profileSnapshot.docs[0].id;
            Cookies.set('selected-profile', profileId, { expires: 30, path: '/' });
            router.push('/');
        } else {
            router.push('/profiles');
        }
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Create a default profile
        const profileName = email.split('@')[0] || 'Usuário';
        const avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(profileName)}`;
        const profilesCol = collection(firestore, `users/${user.uid}/profiles`);
        const docRef = await addDoc(profilesCol, {
          name: profileName,
          avatar: avatarUrl,
          createdAt: serverTimestamp(),
        });
        
        Cookies.set('selected-profile', docRef.id, { expires: 30, path: '/' });

        toast({ title: "Conta Criada!", description: `Bem-vindo ao CineHub.` });
        router.push('/');
      }
    } catch (error: any) {
      toast({ title: "Erro de Autenticação", description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if(!auth || !firestore) return;
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const additionalInfo = getAdditionalUserInfo(result);

      if (additionalInfo?.isNewUser) {
        const profileName = user.displayName?.split(' ')[0] || user.email?.split('@')[0] || 'Usuário';
        const avatarUrl = user.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(profileName)}`;
        const profilesCol = collection(firestore, `users/${user.uid}/profiles`);
        const docRef = await addDoc(profilesCol, {
          name: profileName,
          avatar: avatarUrl,
          createdAt: serverTimestamp(),
        });
        
        Cookies.set('selected-profile', docRef.id, { expires: 30, path: '/' });
        toast({ title: "Conta Criada!", description: "Login com Google realizado." });
        router.push('/');
      } else {
        toast({ title: "Sucesso!", description: "Login com Google realizado." });
        const profilesCol = collection(firestore, `users/${user.uid}/profiles`);
        const profileSnapshot = await getDocs(profilesCol);
        if (profileSnapshot.docs.length === 1) {
            const profileId = profileSnapshot.docs[0].id;
            Cookies.set('selected-profile', profileId, { expires: 30, path: '/' });
            router.push('/');
        } else {
            router.push('/profiles');
        }
      }
    } catch (error: any) {
      toast({ title: "Erro de Autenticação", description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleAnonymousSignIn = async () => {
    if(!auth || !firestore) return;
    setLoading(true);
    try {
      const userCredential = await signInAnonymously(auth);
      const user = userCredential.user;

      const profilesCol = collection(firestore, `users/${user.uid}/profiles`);
      const profileSnapshot = await getDocs(profilesCol);
      let profileId;

      if (profileSnapshot.empty) {
        const profileName = 'Convidado';
        const avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(profileName)}`;
        const docRef = await addDoc(profilesCol, {
          name: profileName,
          avatar: avatarUrl,
          createdAt: serverTimestamp(),
        });
        profileId = docRef.id;
      } else {
        profileId = profileSnapshot.docs[0].id;
      }

      Cookies.set('selected-profile', profileId, { expires: 30, path: '/' });
      toast({ title: "Bem-vindo!", description: "Navegando como convidado." });
      router.push('/');
    } catch (error: any) {
      toast({ title: "Erro de Autenticação", description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <h1 className="text-3xl font-headline text-center">{isLogin ? 'Entrar' : 'Criar Conta'}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <Button type="submit" className="w-full" disabled={loading || !auth || !firestore}>
          {loading ? 'Carregando...' : (isLogin ? 'Entrar' : 'Criar Conta')}
        </Button>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Ou</span>
        </div>
      </div>
      <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={loading || !auth || !firestore}>
        <Chrome className="mr-2 h-4 w-4" /> Google
      </Button>
      <Button variant="secondary" className="w-full" onClick={handleAnonymousSignIn} disabled={loading || !auth || !firestore}>
        Acessar como convidado
      </Button>
      <p className="text-center text-sm text-muted-foreground">
        {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}
        <Button variant="link" onClick={() => setIsLogin(!isLogin)} className="text-accent">
          {isLogin ? "Crie uma" : "Faça login"}
        </Button>
      </p>
    </div>
  );
}
