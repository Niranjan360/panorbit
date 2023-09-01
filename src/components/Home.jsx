import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Home = () => {

    let {id} = useParams(); // extracting id to display exact user details
    let[page , setPage] = useState("Profile"); 

    // function to change page name in navbar , once click has been done is sidebar
    let currentPage = (crntPage)=>{
        setPage(crntPage);
    }

    return ( 
    <div className="home-cont">
        <Sidebar currentPage={currentPage}/>
        <div>
            <Navbar currentPage={page} id={id}/>
            <Outlet context={id} />
        </div>
        
    </div> );
}
export default Home;