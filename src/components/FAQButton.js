import "../styles/About.css";
import { useState } from "react";

const FAQButton = ({question,answer}) => {

    const [isActive , setIsActive] = useState(false);

    const activateDropdown = () => {
        setIsActive(!isActive);
    }

    return (
     <>
     <button type="button" className={`beginner-button ${isActive ? "active" : null}`} onClick={activateDropdown}>
        {question}
      </button>
      <div className="beginner-content" style={{maxHeight: isActive ? "20rem" : null }}>
        <p>
          {answer}
        </p>
      </div>
    </>
    )
}

export default FAQButton;