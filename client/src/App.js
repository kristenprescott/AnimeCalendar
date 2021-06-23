import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [calendarData, setCalendarData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://www.reddit.com/r/animecalendar/new/.json?&limit=10"
        );
        // console.log(res.data);
        const dateData = res.data;
        setCalendarData(dateData);
      } catch (err) {
        console.error(err);
      }
      console.log("cal data: ", calendarData);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ textAlign: "center", padding: ".5rem" }}
      >
        <h1>Anime Calendar</h1>
        <hr style={{ width: "99vw" }}></hr>
        <main>
          {/* <div>{calendarData && calendarData.data.dist}</div> */}
          <div className="title">
            {calendarData && calendarData.data.children[0].data.title}
          </div>
          <div className="img-wrapper">
            <img
              style={{ width: "80%" }}
              src={calendarData && calendarData.data.children[0].data.url}
            />
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
