import { useState, useEffect } from "react";
import axios from "axios";
import "./RegisterCard.scss"
import { Link } from "react-router-dom";

const URL = import.meta.env.VITE_URL;

function RegisterCard(){
    const [neurodivergent, setNeurodivergent] = useState([]);

    useEffect(() => {
        const fetchNeurodivergentList = async () => {
            try{
                const response = await axios.get(
                    `${URL}/neurodivergent`
                );
                setNeurodivergent(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchNeurodivergentList();
    }, []);

    const handleSubmit = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
    }

    return(
        <div className="register">
            <h2 className="register__title">Register</h2>
            <form className="register__form" onSubmit={handleSubmit}>

                <div className="register__container">
                <label htmlFor="name" className="register__label">Name</label>
                <input className="register__input" type="text" id="name" />
                </div>

                <div className="register__container">
                <label htmlFor="email" className="register__label">Email</label>
                <input className="register__input" type="email" id="email" />
                </div>

                <div className="register__container">
                <label htmlFor="password" className="register__label">Password</label>
                <input className="register__input" type="password" id="password" />
                </div>

                <div className="register__container">
                <label htmlFor="password" className="register__label">Confirm Password</label>
                <input className="register__input" type="password" id="password" />
                </div>

                <div className="register__container">
                <label htmlFor="occupation" className="register__label">Occupation</label>
                <input className="register__input" type="text" id="occupation" />
                </div>

                <div className="register__container">
                <label htmlFor="description" className="register__label">Description</label>
                <textarea className="register__input" id="description"></textarea>
                </div>

                <div className="register__container">
                <label htmlFor="neurodivergent" className="register__label">Neurodivergent Disorders</label>
                <select className="register__input" id="neurodivergent" >
                    {
                        neurodivergent.map((neuro) =>(
                            <option value={neuro}>{neuro}</option>
                        ))
                    }
                </select>
                </div>

                <div className="register__container">
                <Link to="/dashboard"><button className="register__button">Register</button></Link>
                </div>
            </form>
        </div>
    );
}

export default RegisterCard;