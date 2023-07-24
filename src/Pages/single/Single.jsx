import './single.css';
import '../../components/sidebar/sidebar.css';
import sImg from './blog11.webp';
import SinglePost from '../../components/singlePost/SinglePost';
function Single(){
    return(
        <div className='single'>
            <SinglePost />
            <div className="sidebar">
           <div className="sidebarItem">
               <span className="sidebarTitle">ABOUT ME</span>
               <img src={sImg} alt="" />
               <p>
                  ipsum dolor sit amet consectetur adipisicing elit. Explicabo eius nostrum illum laudantium Facilis, quis aspernatur velit quo dolore odio maiores nulla aut, expedita recusandae ipsam repellendus, quasi quam fort  
               </p>
           </div>
           <div className="sidbarItem">
                <span className="sidebarTitle cat">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle follow" >FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>

           </div>
        </div>
        </div>
    );
}

export default Single;