import icon from "../../assets/images/brain-guru-intellectual-svgrepo-com.svg"
import './HeaderHomepage.scss';

function HeaderHomepage(){
    return(
        <div className="header">
            <div className="header__logo">
                <img className="header__icon" src={icon} alt="SpectrumLink Icon" />
                <h1 className="header__title">SpectrumLink</h1>
            </div>
            <div className="header__buttons">
                <button className="header__button">Sign In</button>
                <button className="header__button header__button--sign-up">Sign Up</button>
            </div>
        </div>
    );
}

export default HeaderHomepage;