import axios from "axios";
import { useState, useEffect } from "react";
import "./ChatHeader.scss";
import { useParams } from "react-router-dom";

const URL = import.meta.env.VITE_URL;

function ChatHeader(){
    const [member, setMember] = useState<any>([]);
    const { chatId } = useParams();

    const fetchMember = async () => {
        try{
            const response = await axios.get(
                `${URL}/friends/${chatId}`
            );
            setMember(response.data);
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchMember();
    }, []);

    return(
        <div className="chat-header">
            <img className="chat-header__profile" src={member.photo} alt="Recipient profile" />
            <h2 className="chat-header__name">{member.name}</h2>
        </div>
    );
}

export default ChatHeader;