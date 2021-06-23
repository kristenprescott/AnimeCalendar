import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [calendarData, setCalendarData] = useState({});
  const [title, setTitle] = useState("");

  async function fetchData() {
    try {
      const res = await axios.get(
        "https://www.reddit.com/r/animecalendar/new/.json?&limit=30"
      );
      console.log(res.data);
      const dateData = res.data;
      setCalendarData(dateData);
    } catch (err) {
      console.error(err);
    }
    console.log("cal data: ", calendarData);
  }

  useEffect(() => {
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
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
