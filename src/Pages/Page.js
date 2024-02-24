import { Link } from 'react-router-dom';
import Profile from './Profile.svg';
import Store from './Store.svg';


export default function Page() {
  return (
    <div className="page-container">
      <div className="link-container">
        <img src={Store} alt="Store" />
        <h1>Welcome to our Store</h1>
        <Link to='/Store'>Go To Store</Link>
      </div>
      <div className="link-container">
        <img src={Profile} alt="Profile" />
        <h1>Welcome to your Profile</h1>
        <Link to='/Profile'>Go To Profile</Link>
      </div>
    </div>
  );
}
