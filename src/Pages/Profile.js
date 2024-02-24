import { signOut } from 'firebase/auth';
import { auth } from './Firebase';

export default function Profile() {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert('Sign out successful');
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
