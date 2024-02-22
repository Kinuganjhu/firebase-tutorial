import { auth } from './Firebase';
import { useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithRedirect, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/Page');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSign = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
      .then((result) => {
        alert('Sign up successful');
        navigate('/Page');
        
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className='app'>
      <h1>Let's Get Started</h1>
        {error && <p>{error}</p>}
      <button onClick={handleSign}>Continue With Google</button>
    </div>
  );
}
