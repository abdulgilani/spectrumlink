import icon from "../../assets/images/brain-guru-intellectual-svgrepo-com.svg"
import "./HeaderDashboard.scss";
import { Link } from "react-router-dom";

function HeaderDashboard(){
    return(
        <div className="header">
            <div className="header__logo">
                <img className="header__icon" src={icon} alt="SpectrumLink Icon" />
                <h1 className="header__title">SpectrumLink</h1>
            </div>
            <div className="header__buttons">
                <Link to="/dashboard"><button className="header__button">Suggestions</button></Link>
                <Link to="/friendRequest"><button className="header__button">Friend Requests</button></Link>
                <Link to="/friends"><button className="header__button header__button--active">Friends</button></Link>
                <Link to="/"><button className="header__button header__button--sign-out">Sign Out</button></Link>
            </div>
        </div>
    );
}

export default HeaderDashboard;