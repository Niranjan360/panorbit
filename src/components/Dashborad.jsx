import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import map from '../assets/map.JPG'

const Dashboard = () => {

    let id = useOutletContext();

    // users states
    let [currentUser , setCurrentUser] = useState(null); // to store current user details
    let [users , setUsers] = useState(null); // to store all users

    // chats states
    let [currentChat , setCurrentChat] = useState(null); // to store all users
    let [chatboxOpen , setChatboxOpen] = useState(false); // to control chatbox
    let [messageboxOpen , setMessageboxOpen] = useState(true); // to control messagebox


    //  fetching new user wheneever another user is called from the profile bar
    useEffect(()=>{
        fetch("https://panorbit.in/api/users.json")
        .then(res=>res.json())
        .then((data)=>{
            let user = data.users.find((user)=>{return user.id==id});
            setCurrentUser(user);
            setUsers(data.users)
        })
    } , [id])


    return ( 
        <div className="dashboard">
            {currentUser && <div className="user-detail">

                {/* first coloumn to diplay user details */}
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

                {/* secongd coloumn to diplay user address  details */}
                <div className="c2">
                    <h2>Address:</h2>
                    <div className="address-details">
                        <div>
                            <span>Street : </span> <span>{currentUser.address.street}</span>
                            <span>Suite : </span> <span>{currentUser.address.suite}</span>
                            <span>City : </span> <span>{currentUser.address.city}</span>
                            <span>Zipcode : </span> <span>{currentUser.address.zipcode}</span>
                        </div>
                    </div>
                    <div className="area-map">
                        <img src={map} alt="" />
                        <p>
                            Lat: <span>{currentUser.address.geo.lat}</span>   
                            Long: <span>{currentUser.address.geo.lat}</span>   
                        </p>
                    </div>

                </div>

            </div>}


            {users&& 
            <div className="chats" style={{bottom : chatboxOpen ? "40px" : "5px" }}>
                <div className="chathead">
                    <p><i className='bx bx-comment-minus bx-flip-horizontal' ></i> Chats</p>
                    <button onClick={()=>{setChatboxOpen(!chatboxOpen)}}>
                        {chatboxOpen ? <i className='bx bx-chevron-down'></i> 
                                    :  <i className='bx bx-chevron-up'></i>}
                    </button>
                </div>
                {chatboxOpen && 
                    <ul>
                    {
                        users.map((user)=>{
                        return(<li onClick={()=>{setCurrentChat(user)}}>
                                    <div>
                                    <img src={user.profilepicture} alt="user-chat-pic" />
                                    <p>{user.name}</p>
                                    </div>
                                    <span style={{backgroundColor : user.id%2==0 ? "green" : "gainsboro"}}></span>
                            </li>)
                        })
                    }
                    </ul>}
            </div>}


            {currentChat && 
            <div className="messagebox">
                <div className="message-head">
                    <div>
                        <img src={currentChat.profilepicture} alt="current-chat"/>
                        <p>{currentChat.name}</p>
                    </div>
                    <div>
                        <button onClick={()=>{setMessageboxOpen(!messageboxOpen)}}>
                            {messageboxOpen ? <i className='bx bx-chevron-down'></i>
                                            : <i className='bx bx-chevron-up'></i>}
                        </button>
                        <button onClick={()=>{setCurrentChat(null)}}><i className='bx bx-x'></i></button>
                    </div>
                </div>

                {messageboxOpen && <div className="message-interface">
                    <div className="left-chat">
                        <recevied>Hello 🔆  </recevied>
                        <recevied>Good morning , how are you !!</recevied>
                    </div>

                    <div className="right-chat">
                        <me>Hi , good morning ⛅ </me>
                        <me>doing good </me>
                        <me>hbu</me>
                    </div>

                    <div className="left-chat">
                        <recevied>same here</recevied>
                        <recevied>let's catch up if you are free 🥶  </recevied>
                    </div>

                    <div className="right-chat">
                        <me>Sure 😜 </me>
                    </div>
                </div>}

                <div className="typer">
                    <input type="text" placeholder="Type your message here"/>
                    <button> <i className='bx bxs-send' ></i> </button>
                </div>
            </div>}


        </div>
    );
}
export default Dashboard;