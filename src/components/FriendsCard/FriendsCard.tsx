import "./FriendsCard.scss";
import chatIcon from "../../assets/images/chat-svgrepo-com.svg";


function FriendsCard(props: any){
    return(
        <div className="member">
            <div className="member__profile">
                <img className="member__photo" src={props.photo} alt={props.name} />
                <p className="member__name">{props.name}</p>
            </div>
            <div className="member__disorders">
                <ul className="member__disorders-list">
                    {
                        props.neurodivergent_disorders.map((disorder: any, index: any) => (
                            <li className="member__disorder" key={index}>{disorder}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="member__acceptance">
                <img className="member__chat" src={chatIcon} alt="Checkmark icon" />
            </div>
        </div>
    );
}

export default FriendsCard;