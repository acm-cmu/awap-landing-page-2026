import "../styles/Schedule.css";
import ReactDOMServer from "react-dom/server";

const fridaySchedule = () => {
  return (
    <div>
      <div class="schedule-event main-event2">
        <div class="col">
          <p>11:00 AM - 12:00 PM</p>
        </div>
        <div class="col">
          <p>Check-in</p>
          <p class="details">Cohon University Center Rangos Ballroom</p>
        </div>
      </div>

      <div class="schedule-event main-event2">
        <div class="col">
          <p>12:00 PM - 12:40 PM</p>
        </div>
        <div class="col">
          <p>Opening Ceremony</p>
          <p class="details">Cohon University Center Rangos Ballroom</p>
        </div>
      </div>

      <div class="schedule-event foods">
        <div class="col">
          <p>12:40 PM - 1:00 PM</p>
        </div>
        <div class="col">
          <p>Lunch</p>
          <p class="details">Cohon University Center Rangos Ballroom</p>
        </div>
      </div>

      <div class="schedule-event foods">
        <div class="col">
          <p>6:00 PM - 7:00 PM</p>
        </div>
        <div class="col">
          <p>Dinner</p>
          <p class="details">Cohon University Center Rangos Ballroom</p>
        </div>
      </div>

      <div class="schedule-event foods">
        <div class="col">
          <p>11:00 PM - 12:00 AM</p>
        </div>
        <div class="col">
          <p>Midnight Snack</p>
          <p class="details">Cohon University Center Rangos Ballroom</p>
        </div>
      </div>
    </div>
  );
};

const saturdaySchedule = () => {
  return (
    <div>
      <div class="schedule-event foods">
        <div class="col">
          <p>12:00 PM - 1:00 PM</p>
        </div>
        <div class="col">
          <p>Lunch</p>
          <p class="details">Cohon University Center Rangos Ballroom</p>
        </div>
      </div>

      <div class="schedule-event main-event2">
        <div class="col">
          <p>5:00 PM</p>
        </div>
        <div class="col">
          <p>End Coding</p>
          <p class="details">Cohon University Center Rangos Ballroom</p>
        </div>
      </div>

      <div class="schedule-event foods">
        <div class="col">
          <p>5:00 PM - 7:00 PM</p>
        </div>
        <div class="col">
          <p>Dinner</p>
          <p class="details">Cohon University Center Rangos Ballroom</p>
        </div>
      </div>

      <div class="schedule-event main-event2">
        <div class="col">
          <p>7:00 PM - 8:00 PM</p>
        </div>
        <div class="col">
          <p>Closing Ceremony</p>
          <p class="details">Cohon University Center Rangos Ballroom</p>
        </div>
      </div>
    </div>
  );
};

function showFriday() {
  document.getElementById("friday").style.border = "3px solid white";
  document.getElementById("saturday").style.border = "0px solid white";
  document.getElementById("schedule").innerHTML =
    ReactDOMServer.renderToStaticMarkup(fridaySchedule());
}

function showSaturday() {
  document.getElementById("friday").style.border = "0px solid white";
  document.getElementById("saturday").style.border = "3px solid white";
  document.getElementById("schedule").innerHTML =
    ReactDOMServer.renderToStaticMarkup(saturdaySchedule());
}

const EventDetails = () => {
  return (
    <div className="schedule-page">
      <div className="schedule-content">
        <div className="schedule-header"></div>
        <div className="section-header">Schedule</div>
        <div className="section-paragraph">
          Have questions? Head over to Cohon University Center Rangos Ballroom
        </div>

        <div class="legend">
          <div class="legend-event">
            <div class="legend-box foods"></div>
            <p class="legend-label">Food</p>
          </div>
          <div class="legend-event">
            <div class="legend-box main-event2"></div>
            <p class="legend-label">Main Event</p>
          </div>
        </div>

        <div class="schedule-days">
          <button class="year-button" id="friday" onClick={showFriday}>
            <span class="schedule-header-word">SATURDAY 1/31</span>
          </button>
          <button class="year-button" id="saturday" onClick={showSaturday}>
            <span class="schedule-header-word">SUNDAY 2/1</span>
          </button>
        </div>

        <div class="schedule" id="schedule">
          {fridaySchedule()}
        </div>

        <div className="container-after"></div>
      </div>
    </div>
  );
};

export default EventDetails;
