import { useState } from "react";
import sendIcon from "../../assets/images/send-svgrepo-com.svg"
import './ChatFooter.scss';

function ChatFooter(){
    const [text, setText] = useState('');

    return(
        <div className="chat-footer">
            <form className="chat-footer__form">
                <input className="chat-footer__text"
                type="text"
                placeholder="Write a message"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
                <button className="chat-footer__submit">Send <img className="chat-footer__send-icon" src={sendIcon} alt="Send Icon" /></button>
            </form>
        </div>
    );
}

export default ChatFooter;