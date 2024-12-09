import './FriendRequests.scss';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import PersonCard from "../PersonCard/PersonCard";

const URL = import.meta.env.VITE_URL;

function FriendRequest(){
    const [friendRequests, setFriendRequests] = useState<any[]>([]);

    useEffect(() => {
        const fetchFriendRequests = async() =>{
            try{
                const response = await axios.get(
                    `${URL}/friendRequestList`
                );
                setFriendRequests(response.data);
            } catch(error){
                console.error(error);
            }
        }

        fetchFriendRequests();
    }, []);

    return(
        <div className="suggestions">
            <h2 className="suggestion__title">Friend Requests</h2>
            <ul className="suggestion__lists">
            {
                friendRequests.map((friendRequest) => (
                    <li key={friendRequest.id} className="suggestion__list">
                        <Link to={`/person/${friendRequest.id}`} className="suggestion__link">
                        <PersonCard photo={friendRequest.photo} name={friendRequest.name} neurodivergent_disorders={friendRequest.neurodivergent_disorders} />
                        </Link>
                    </li>
                ))
            }
            </ul>
        </div>
    );
}

export default FriendRequest;