import logo from './logo.svg';
import supabase from './supabase';
import { useState } from 'react';
import './App.css';

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
      <img src={logo} className="App-logo" alt="logo" />
      <p>I Love Shoes</p>
      {!user ? (
        <button onClick={signInWithGithub}>SIGN IN WITH GITHUB</button>
      ) : (
        <button onClick={signOut}>SIGN OUT {user?.email}</button>
      )}
    </div>
  );
}

export default App;
