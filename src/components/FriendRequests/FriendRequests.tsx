import "./FriendRequests.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import checkmark from "../../assets/images/reshot-icon-checkmark-GVRAE73C9Z.svg";
import x from "../../assets/images/reshot-icon-x-XL3PMTW87F-17ba4.svg";

const URL = import.meta.env.VITE_URL;

function FriendRequest() {
  const [friendRequests, setFriendRequests] = useState<any[]>([]);

  useEffect(() => {
    const fetchFriendRequests = async () => {
      try {
        const response = await axios.get(`${URL}/friendRequestList`);
        setFriendRequests(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFriendRequests();
  }, []);

  const deleteFriendRequest = async (memberId: any) => {
    try{
        const response = await axios.delete(`${URL}/friendRequestList/${memberId}`);
        setFriendRequests(response.data);
    } catch (error){
        console.error(error);
    }
  }

  const acceptFriendRequest = async (member: any) => {
    try{
        await axios.post(`${URL}/friends`, {
            id: member.id,
            name: member.name,
            email: member.email,
            password: member.password,
            neurodivergent_disorders: member.neurodivergent_disorders,
            description: member.description,
            occupation: member.occupation,
            location: member.location,
            photo: member.photo
        });

        deleteFriendRequest(member.id);

    } catch (error){
        console.error(error);
    }
  }

  const removeFriendRequest = (member: any) => {
    deleteFriendRequest(member.id);
  }

  return (
    <div className="suggestions">
      <h2 className="suggestion__title">Friend Requests</h2>
      <ul className="suggestion__lists">
        {friendRequests.map((friendRequest) => (
          <li key={friendRequest.id} className="suggestion__list">
            <div className="member">
              <div className="member__profile">
                <Link
                  to={`/person/${friendRequest.id}`}
                  className="suggestion__link"
                >
                  {" "}
                  <img
                    className="member__photo"
                    src={friendRequest.photo}
                    alt={friendRequest.name}
                  />
                </Link>
                <p className="member__name">{friendRequest.name}</p>
              </div>
              <div className="member__disorders">
                <ul className="member__disorders-list">
                  {friendRequest.neurodivergent_disorders.map(
                    (disorder: any, index: any) => (
                      <li className="member__disorder" key={index}>
                        {disorder}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="member__acceptance">
                <img
                  className="member__accept"
                  src={checkmark}
                  alt="Checkmark icon"
                  onClick={() => acceptFriendRequest(friendRequest)}
                />
                <img
                  className="member__decline"
                  src={x}
                  alt="X Icon"
                  onClick={() => removeFriendRequest(friendRequest)}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendRequest;
