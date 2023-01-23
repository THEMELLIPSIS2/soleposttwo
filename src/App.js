import logo from './logo.svg';
import supabase from './supabase';
import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Footer } from './components/Footer';
import Routes from './components/Routes';

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
      <CssBaseline />
      <img src={logo} className="App-logo" alt="logo" />
      <p>I Love Shoes</p>
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
