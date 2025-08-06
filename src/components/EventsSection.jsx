// src/components/EventsSection.jsx
import { useEffect, useState } from "react";

const EventsSection = () => {
  const apiKey =
    "89851f15ae5cae03c281a8eb7e5dfc64485b8aca245d1c61d8ce7373f5634803";
  const params = {
    engine: "google_events",
    q: "Washington DC events",
    hl: "en",
    gl: "us",
    tbs: "lf:1,lf_ui:2",
    num: 25,
    api_key: apiKey,
  };

  const url = `https://serpapi.com/search.json?${new URLSearchParams(params)}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let event = data.event_results;
      console.log(data.events_results);
    });

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="event-container">
      {events.events_results.map((event) => (
        <div key={event.id} className="event-card">
          <img src={event.images} alt={event.name} />
          <h2>{event.name}</h2>
          <p>{event.date.when}</p>
        </div>
      ))}
    </div>
  );
};

export default EventsSection;
// single call (async/await)
// const json = await getJson({ engine: "google", api_key: API_KEY, q: "coffee" });

// const EventsSection = () => {
//   const [events, setEvents] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchEvents = async () => {
//     try {
//       const res = await fetch(
//         `url`
//       );
//       const data = await res.json();

//       if (data._embedded?.events) {
//         setEvents(data._embedded.events);
//       } else {
//         setEvents([]);
//       }
//     } catch (err) {
//       console.error("Error fetching events:", err);
//       setError("Could not load events");
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);
// }
