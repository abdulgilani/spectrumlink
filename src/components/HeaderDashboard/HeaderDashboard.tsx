import icon from "../../assets/images/brain-guru-intellectual-svgrepo-com.svg"
import "./HeaderDashboard.scss";

function HeaderDashboard(){
    return(
        <div className="header">
            <div className="header__logo">
                <img className="header__icon" src={icon} alt="SpectrumLink Icon" />
                <h1 className="header__title">SpectrumLink</h1>
            </div>
            <div className="header__buttons">
                <button className="header__button">Friends</button>
                <button className="header__button">Friend Request</button>
                <button className="header__button header__button--active">Chat</button>
                <button className="header__button header__button--sign-out">Sign Out</button>
            </div>
        </div>
    );
}

export default HeaderDashboard;