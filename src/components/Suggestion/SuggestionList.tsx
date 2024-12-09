import './SuggestionList.scss'
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import PersonCard from "../PersonCard/PersonCard";

const URL = import.meta.env.VITE_URL;

function SuggestionList(){
    const [suggestions, setSuggestions] = useState<any[]>([]);

    useEffect(() => {
        const fetchSuggestions = async() =>{
            try{
                const response = await axios.get(
                    `${URL}/suggestion`
                );
                setSuggestions(response.data);
            } catch(error){
                console.error(error);
            }
        }

        fetchSuggestions();
    }, []);

    return(
        <div className="suggestions">
            <h2 className="suggestion__title">Suggestions</h2>
            <ul className="suggestion__lists">
            {
                suggestions.map((suggestion) => (
                    <li key={suggestion.id} className="suggestion__list">
                        <Link to={`/person/${suggestion.id}`} className="suggestion__link">
                        <PersonCard photo={suggestion.photo} name={suggestion.name} neurodivergent_disorders={suggestion.neurodivergent_disorders} />
                        </Link>
                    </li>
                ))
            }
            </ul>
        </div>
    );
}

export default SuggestionList;