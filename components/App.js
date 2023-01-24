import logo from '../logo.svg';
import supabase from '../supabase';
import { useState, useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Footer } from './Footer';
import Image from 'next/image';

function App() {
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
    <div className="App">
      <NavBar />
      <Image src={logo} className="App-logo" alt="logo" />
      <p>I Love Shoes</p>
      <Footer />
    </div>
  );
}

export default App;
