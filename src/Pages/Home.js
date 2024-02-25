import {
  auth
} from './Firebase';
import {
  useState,
  useEffect
} from 'react';

import {
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged
} from 'firebase/auth';
import {
  useNavigate
} from 'react-router-dom';
import log from './logo.svg';


export default function Home() {
  const [error,
    setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/Page');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSign = (event) => {
    event.preventDefault(); // Prevent the default behavior of the event
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
      <button className='sign-up-button' onClick={handleSign}>
        <img src={log} alt='logo' height='24' width='24' />
       Continue With Google
      </button>
      {error && <p>
      {error}
    </p>
    }
  </div>
);
}