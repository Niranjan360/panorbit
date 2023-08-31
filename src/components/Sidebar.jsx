import { Link } from "react-router-dom";

const Sidebar = ({currentPage}) => {

    return ( 
    <div className="side-cont">
        <ul>
            <li onClick={()=>{currentPage("Profile")}}><Link to={`profile`}>Profile</Link></li>
            <li onClick={()=>{currentPage("Posts")}}><Link to="posts">Posts</Link></li>
            <li onClick={()=>{currentPage("Gallery")}}><Link to="gallery">Gallery</Link></li>
            <li onClick={()=>{currentPage("ToDo")}}><Link to="todo">ToDo</Link></li>
        </ul>
    </div> );
}
export default Sidebar;