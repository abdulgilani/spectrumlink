import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard";
import axios from "axios";
import "./PersonInfo.scss";

const URL = import.meta.env.VITE_URL;

function PersonInfo(){
    const [member, setMember] = useState<any>([]);
    const { memberId } = useParams();

    const fetchMember = async () => {
        try{
            const response = await axios.get(
                `${URL}/suggestion/${memberId}`
            );
            setMember(response.data);
        } catch(error) {
            console.error(error);
        }

        console.log(memberId);
    }

    useEffect(() => {
        fetchMember();
    }, []);

    return(
        <>
        <HeaderDashboard />
        <div className="person-container">
        <div className="person-info">
            <img className="person-info__image" src={member.photo} alt={member.name} />
            <h2 className="person-info__name">{member.name}</h2>
            <p className="person-info__occupation">{member.occupation}</p>
            <p className="person-info__description">{member.description}</p>
        </div>
        </div>
        </>
    );
}

export default PersonInfo;