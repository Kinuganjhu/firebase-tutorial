import { signOut } from 'firebase/auth';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';

export default function Page() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/'); // Removed extra parentheses and placed navigate outside of alert
        alert('Sign out successful');
      })
      .catch((error) => {
        alert('Error signing out:', error);
      });
  };

  return (
    <div className='app'>
      <h1>Welcome to our blog</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}