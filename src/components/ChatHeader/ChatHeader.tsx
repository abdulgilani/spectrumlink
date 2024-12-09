import image from "../../assets/images/image.png";
import icon from "../../assets/images/reshot-icon-bottom-left-arrow-ZCNYEM2RH3.svg";
import "./ChatHeader.scss";

function ChatHeader(){
    return(
        <div className="chat-header">
            <img className="chat-header__icon" src={icon} alt="Back Arrow Icon" />
            <img className="chat-header__profile" src={image} alt="Recipient profile" />
            <h2 className="chat-header__name">Alex</h2>
        </div>
    );
}

export default ChatHeader;