import { Routes, Route } from 'react-router-dom';
import supabase from '../supabase';
import { useState, useEffect } from 'react';

export default function () {
  const [user, setUser] = useState(null);

  supabase.auth.onAuthStateChange((e, session) => {
    if (session?.user) {
      setUser((user) => (user = session.user));
    }
  });

  async function signInWithGithub() {
    const { user, session, error } = await supabase.auth.signInWithOAuth({
      provider: 'github'
    });
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    setUser((user) => (user = null));
  }

  return (
    <div>
      {!user ? (
        <button onClick={signInWithGithub}>SIGN IN WITH GITHUB</button>
      ) : (
        <button onClick={signOut}>SIGN OUT {user?.email}</button>
      )}
    </div>
  );
}
