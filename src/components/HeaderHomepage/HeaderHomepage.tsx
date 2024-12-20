import { Link } from "react-router-dom";
import './HeaderHomepage.scss';
import icon from "../../assets/images/brain-guru-intellectual-svgrepo-com.svg"

function HeaderHomepage(){
    return(
        <div className="header">
            <div className="header__logo">
                <img className="header__icon" src={icon} alt="SpectrumLink Icon" />
                <h1 className="header__title">SpectrumLink</h1>
            </div>
            <div className="header__buttons">
                <Link to="/signIn" className="header__link"><button className="header__button">Sign In</button></Link>
                <Link to="/register" className="header__link"><button className="header__button header__button--sign-up">Sign Up</button></Link>
            </div>
        </div>
    );
}

export default HeaderHomepage;