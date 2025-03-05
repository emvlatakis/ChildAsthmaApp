import { Stack, useRouter, useSegments } from 'expo-router';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { auth } from '../FirebaseConfig';

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log('onAuthStateChanged', firebaseUser?.email ?? 'no user');
      setUser(firebaseUser);
      if (initializing) setInitializing(false);
    });
    return () => unsubscribe();
  }, [initializing]);

  useEffect(() => {
    if (initializing) {
      console.log('Still initializing, skipping navigation check');
      return;
    }
    const inAuthGroup = segments[0] === '(tabs)';
    console.log('Navigation check:', {
      isAuthenticated: !!user,
      currentSegment: segments[0],
      inAuthGroup
    });

    if (user && !inAuthGroup) {
      console.log('Authenticated user not in auth group, redirecting to /(tabs)');
      router.replace('/(tabs)/home');
    } else if (!user && inAuthGroup) {
      console.log('Unauthenticated user in auth group, redirecting to /');
      router.replace('/');
    }
  }, [initializing, user, segments]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
