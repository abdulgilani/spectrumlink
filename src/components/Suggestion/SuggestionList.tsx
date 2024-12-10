import "./SuggestionList.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import checkmark from "../../assets/images/reshot-icon-checkmark-GVRAE73C9Z.svg";
import x from "../../assets/images/reshot-icon-x-XL3PMTW87F-17ba4.svg";

const URL = import.meta.env.VITE_URL;

function SuggestionList() {
  const [suggestions, setSuggestions] = useState<any[]>([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(`${URL}/suggestion`);
        setSuggestions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSuggestions();
  }, []);

  const deleteSuggestion = async (memberId: any) => {
    try{
        const response = await axios.delete(`${URL}/suggestion/${memberId}`);
        setSuggestions(response.data);
    } catch (error) {
        console.error(error);
    }
  }

  const removeSuggestion = (member: any) => {
    deleteSuggestion(member.id);
  }

  return (
    <div className="suggestions">
      <h2 className="suggestion__title">Suggestions</h2>
      <ul className="suggestion__lists">
        {suggestions.map((suggestion) => (
          <li key={suggestion.id} className="suggestion__list">
              <div className="member">
                <div className="member__profile">
                 <Link to={`/person/${suggestion.id}`} className="suggestion__link"> <img
                    className="member__photo"
                    src={suggestion.photo}
                    alt={suggestion.name}
                  /></Link>
                  <p className="member__name">{suggestion.name}</p>
                </div>
                <div className="member__disorders">
                  <ul className="member__disorders-list">
                    {suggestion.neurodivergent_disorders.map(
                      (disorder: any, index: any) => (
                        <li className="member__disorder" key={index}>
                          {disorder}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="member__acceptance">
                  <img
                    className="member__accept"
                    src={checkmark}
                    alt="Checkmark icon"
                    onClick={() => removeSuggestion(suggestion)}
                  />
                  <img className="member__decline" src={x} alt="X Icon" 
                  onClick={() => removeSuggestion(suggestion)}/>
                </div>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestionList;
