import { useEffect , useState} from "react";

const Navbar = ({currentPage , id}) => {

    let [currentUser , setCurrentUser] = useState(null);

    useEffect(()=>{
        fetch("https://panorbit.in/api/users.json")
        .then(res=>res.json())
        .then((data)=>{
            let user = data.users.find((user)=>{return user.id==id});
            setCurrentUser(user);
        })
    } , [id])


    return ( 
    <nav>
        <h3>{currentPage}</h3>
        {currentUser && <div>
            <img src={currentUser.profilepicture} alt="" />
            <span>{currentUser.name}</span>
        </div>}
    </nav>);
}
export default Navbar;