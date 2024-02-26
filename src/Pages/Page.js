import { Link } from 'react-router-dom';
import Profile from './Profile.svg';
import Store from './Store.svg';
import {Link} from 'react-router-dom'
export default function Page() {
  return (
    <div className="page-container">
    <Link to = '/'>Go Back </Link>
      <div className="link-container">
        <img src={Store} alt="Store" />
      
        <Link to='/Store'>Go To Store</Link>
      </div>
      <div className="link-container">
        <img src={Profile} alt="Profile" />
        
        <Link to='/Profile'>Go To Profile</Link>
      </div>
    </div>
  );
}
