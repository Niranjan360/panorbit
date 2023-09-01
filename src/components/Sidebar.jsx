import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({currentPage}) => {

    let pointer = useRef();

    useEffect(()=>{
        let li = document.querySelector("li");
        console.log(li.firstElementChild.offsetTop);
        pointer.current.style.top = (li.firstElementChild.offsetTop)-5 +"px";
    },[])

    let currentLink = (e)=>{
        let pos = e.target.offsetTop;
        console.log(pointer.current.style.top);
        pointer.current.style.top = (pos-5) +"px";
    }

    return ( 
    <div className="side-cont">
        <ul>
            <li onClick={()=>{currentPage("Profile")}}><Link onClick={(e)=>{currentLink(e);}} to={`profile`}>Profile</Link></li>
            <li onClick={()=>{currentPage("Posts")}}><Link onClick={(e)=>{currentLink(e);}}  to="posts">Posts</Link></li>
            <li onClick={()=>{currentPage("Gallery")}}><Link onClick={(e)=>{currentLink(e);}}  to="gallery">Gallery</Link></li>
            <li onClick={()=>{currentPage("ToDo")}}><Link onClick={(e)=>{currentLink(e);}}  to="todo">ToDo</Link></li>
        </ul>

        <div className="pointer" ref={pointer}>
            <i class='bx bx-chevron-right'></i>
        </div>

    </div> );
}
export default Sidebar;