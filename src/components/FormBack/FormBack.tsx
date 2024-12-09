import icon from "../../assets/images/reshot-icon-bottom-left-arrow-ZCNYEM2RH3.svg";
import './FormBack.scss';
import { Link } from "react-router-dom";

function FormBack(){
    return(
    <div className="back-arrow">
        <Link to="/"><img className="back-arrow__icon" src={icon} alt="Back Arrow Icon" /></Link>
    </div>
    );
}

export default FormBack;