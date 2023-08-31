import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    let[users , setUsers] = useState(null);

    useEffect(()=>{
        // fetch all the users for a initial load
        fetch("https://panorbit.in/api/users.json")
        .then(res=>res.json())
        .then((data)=>{setUsers(data.users)})
    } , [])

    return (
    <>
        <div className="login-cont">
            {users && <div className="loginbox">
                <h1>Select an account</h1>
                <ul className="users-list">
                    {
                            users.map((user)=>{
                                return(<li>   
                                        <Link to={`/home/${user.id}/profile`}>
                                            <img src={user.profilepicture} alt="userpic" />
                                            {user.name} 
                                        </Link>
                                    </li>)
                            })
                    }
                </ul>
            </div>}
        </div>
    </> );
}
export default Login;