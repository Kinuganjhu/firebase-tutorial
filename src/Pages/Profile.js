import { signOut } from 'firebase/auth';
import { auth } from './Firebase';
import {useNavigate} from 'react-router-dom';
export default function Profile() {
  const naviagate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert('Sign out successful');
        naviagate('/');
      })
      .catch((error) => {
        alert('Error signing out:', error);
      });
  };

  return (
    <div className='app'>
      <h1>Profile Page</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
