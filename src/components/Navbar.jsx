import { useEffect , useState} from "react";
import { Link } from "react-router-dom";

const Navbar = ({currentPage , id , closeMenu}) => {

    let [currentUser , setCurrentUser] = useState(null); // to store current user
    let [otherUsers , setOtherUsers] = useState(null);   // to store other users detail to show suggestions in popup box
    let [popup , setPopup] = useState(false);            // to control popup menu  


    useEffect(()=>{
        fetch("https://panorbit.in/api/users.json")
        .then(res=>res.json())
        .then((data)=>{
            let user = data.users.find((user)=>{return user.id==id});
            if(id<=8) // unless it's a last but 3rd , user take and store next two user details
            {
                let others = data.users.filter((user)=>{return user.id== +id+1 || user.id == +id+2 })
                setOtherUsers(others);
            }
            else // if it's a last but 3rd user , take and store previous two user details
            {
                let others = data.users.filter((user)=>{return user.id==id-1 || user.id==id-2 })
                setOtherUsers(others);
            }
            setCurrentUser({...user});
        })
    } , [id])


    // logout function to close popup bar
    let handleLinkClicks = ()=>{
        setPopup(false);

    }

    // function to close popup 
    let closePop = ()=>{
        setPopup(!popup)
    }

    return ( 
    <nav onClick={closePop}>
        <h3>{currentPage}</h3>


        {currentUser && 
        <div className="current-user">
            <img src={currentUser.profilepicture} alt="" />
            <span>{currentUser.name}</span>
        </div>}
        

        {popup && otherUsers && 
        <div className="popup">
            <img src={currentUser.profilepicture} alt="user pic" />
            <h3>{currentUser.name}</h3>
            <p>{currentUser.email}</p>
            <div className="other-users">
                {
                    otherUsers.map((user)=>{
                        return(
                            <Link to={`/home/${user.id}/profile`} onClick={handleLinkClicks}>
                                <img src={user.profilepicture} alt="other" />
                                <p>{user.name}</p>
                            </Link>
                        )
                    })
                }
            </div>
            
            <Link to="/"><button >Sign out</button></Link>
        </div>}

    </nav>);
}
export default Navbar;