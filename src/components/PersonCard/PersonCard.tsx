import checkmark from "../../assets/images/reshot-icon-checkmark-GVRAE73C9Z.svg";
import x from "../../assets/images/reshot-icon-x-XL3PMTW87F-17ba4.svg";

import "./PersonCard.scss";

function PersonCard(props: any){
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
                <img className="member__accept" src={checkmark} alt="Checkmark icon" />
                <img className="member__decline" src={x} alt="X Icon" />
            </div>
        </div>
    );
}

export default PersonCard;