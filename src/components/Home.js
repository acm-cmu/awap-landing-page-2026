import "../styles/Home.css";
import awap_logo from "../AWAP-2026-Logo-Big.png";

const Homepage = () => {
  return (
    <div className="home">
      <div className="col onee">
        {/* <div className="home-content">
          <img src={awap_logo} width="100%" alt="AWAP logo" />
        </div> */}
      </div>
      <div className="col twoo">
        <div className="home-content">
        <img src={awap_logo} className="awap-logo" alt="AWAP logo" />
          <div className="home-acm">ACM@CMU PRESENTS</div>
          <div className="home-awap">Algorithms with a Purpose 2026:</div>
          <div className="home-event-title">Carnegie Cookoff</div>
          
          <div className="home-register-button-wrapper">
            <div className="home-register-button">
              <a
                className="home-register-link"
                href="https://bit.ly/awap2026"
                target="_blank"
              >
                Register Here!
              </a>
            </div>
          </div>            
         
          {/*
          <div className="home-registration-open">
            Registration Opening Soon!
          </div> 
          */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;