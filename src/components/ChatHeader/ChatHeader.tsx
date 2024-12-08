import image from "../../assets/images/image.png";
import "./ChatHeader.scss";

function ChatHeader(){
    return(
        <div className="chat-header">
            <img className="chat-header__profile" src={image} alt="Recipient profile" />
            <h2 className="chat-header__name">Alex</h2>
        </div>
    );
}

export default ChatHeader;