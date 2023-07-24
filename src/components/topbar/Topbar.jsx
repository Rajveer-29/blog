import { Link } from 'react-router-dom';
import './topbar.css';

function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
          <ul className="topList">
              <li className="topListItems">
                <Link to="/" className='link'>HOME</Link>
              </li>
              <li className="topListItems">
                <Link to="/settings" className='link'>SETTINGS</Link>
              </li>
              <li className="topListItems">
                <Link to="/post/:postId" className='link'>POST</Link>
              </li>
              <li className="topListItems">
                <Link to="/write" className='link'>WRITE</Link>
              </li>
              <li className="topListItems">
                {user && "LOGOUT" }
              </li>
          </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img src="./images/blog7.jpeg" className="topImg" alt="" />
          ) : (
            <ul className='topList'>
              <li className='topListItems'>
                <Link to="/login" className='link'>LOGIN</Link>
              </li>
              <li className='topListItems'>
                <Link to="/register" className='link'>REGISTER</Link>
              </li>
            </ul>
          )
        }
         
          <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}

export default Topbar;