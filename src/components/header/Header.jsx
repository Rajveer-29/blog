import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="./images/blog1.jpeg" height="600px" width="1400px" alt=""></img>
    </div>
  )
}

export default Header;