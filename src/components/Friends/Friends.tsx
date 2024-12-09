import './Friends.scss';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import FriendsCard from "../FriendsCard/FriendsCard";

const URL = import.meta.env.VITE_URL;

function Friends(){
    const [friends, setFriends] = useState<any[]>([]);

    useEffect(() => {
        const fetchFriends = async() =>{
            try{
                const response = await axios.get(
                    `${URL}/friends`
                );
                setFriends(response.data);
            } catch(error){
                console.error(error);
            }
        }

        fetchFriends();
    }, []);

    return(
        <div className="suggestions">
            <h2 className="suggestion__title">Friends</h2>
            <ul className="suggestion__lists">
            {
                friends.map((friends) => (
                    <li key={friends.id} className="suggestion__list">
                        <Link to={`/chat/${friends.id}`} className="suggestion__link">
                        <FriendsCard photo={friends.photo} name={friends.name} neurodivergent_disorders={friends.neurodivergent_disorders} />
                        </Link>
                    </li>
                ))
            }
            </ul>
        </div>
    );
}

export default Friends;