import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [calendarData, setCalendarData] = useState({});

  useEffect(async () => {
    try {
      const res = await axios(
        "https://www.reddit.com/r/animecalendar/new/.json?&limit=10&raw_json=1"
      );
      console.log("calendar data: ", res.data);
      const dateData = res.data;
      setCalendarData(dateData);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ textAlign: "center", padding: ".5rem" }}
      >
        <h1 className="title">Anime Calendar</h1>
        {/* <hr style={{ width: "99vw" }}></hr> */}
        <main>
          {/* <div className="date">
            {calendarData.data && calendarData.data.children[0].data.title}
          </div> */}
          <div className="content-wrapper">
            {/* <div>ウィークデイ</div> */}
            <div className="words">ウィークエンド</div>

            <div style={{ marginTop: "2rem" }} className="img-wrapper">
              <img
                className="image"
                style={{ width: "80%", borderRadius: "4px" }}
                src={
                  calendarData.data && calendarData.data.children[0].data.url
                }
              />
              <div className="arrow-btn-wrapper">
                <div className="arrow-btn prev-btn">
                  <a href={calendarData.data && calendarData.data.before}>
                    &#5130;
                  </a>
                </div>
                <div className="arrow-btn next-btn">
                  <a href={calendarData.data && calendarData.data.after}>
                    &#5125;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
