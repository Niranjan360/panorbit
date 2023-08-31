import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {

    let id = useOutletContext();

    let [currentUserId , setCurrentUserId] = useState(id);
    let [currentUser , setCurrentUser] = useState(null);

    useEffect(()=>{
        fetch("https://panorbit.in/api/users.json")
        .then(res=>res.json())
        .then((data)=>{
            let user = data.users.find((user)=>{return user.id==currentUserId});
            setCurrentUser(user);
        })
    } , [id])


    return ( 
        <div className="dashboard">
            {currentUser && <div className="user-detail">
                <div className="c1">
                    <img src={currentUser.profilepicture} alt="userpic" />
                    <h2>{currentUser.name}</h2>
                    <div className="details">
                        <span>Username : </span> <span>{currentUser.username}</span>
                        <span>e-mail : </span> <span>{currentUser.email}</span>
                        <span>Phone : </span> <span>{currentUser.phone}</span>
                        <span>Website : </span> <span>{currentUser.website}</span>
                    </div>
                    <hr />
                    <div className="company-details">
                        <h2>Company</h2>
                        <div>
                            <span>Name : </span> <span>{currentUser.company.name}</span>
                            <span>catchPhrase : </span> <span>{currentUser.company.catchPhrase}</span>
                            <span>bs : </span> <span>{currentUser.company.bs}</span>
                        </div>
                    </div>
                </div>

                <div className="verticle-divider"></div>

                <div className="c2">
                    <h1>Address:</h1>
                    <div className="address-details">
                        <div>
                            <span>Street : </span> <span>{currentUser.address.street}</span>
                            <span>Suite : </span> <span>{currentUser.address.suite}</span>
                            <span>City : </span> <span>{currentUser.address.city}</span>
                            <span>Zipcode : </span> <span>{currentUser.address.zipcode}</span>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
}
export default Dashboard;