import { useState } from "react";
import "./Aftermovie.css";

const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017];

const aftermovieLinks = {
  2024: "https://www.youtube.com/embed/Gj4GY6cLikI",
  2023: "https://www.youtube.com/embed/ttbe0l-dyF0",
  2022: "https://www.youtube.com/embed/OXCaUqnZTMs",
  2021: "https://www.youtube.com/embed/yourVideoID2023",
  2020: "https://www.youtube.com/embed/7RWJMat8JM4",
  2019: "https://www.youtube.com/embed/yourVideoID2023",
  2018: "https://www.youtube.com/embed/yourVideoID2023",
  // Add the rest of the links similarly
};

export default function Aftermovies() {
  const [selectedYear, setSelectedYear] = useState(2024);

  return (
    <section className="aftermovie-section">
      <h2 className="aftermovie-title">AFTERMOVIES</h2>

      <div className="year-selector">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`year-button ${
              selectedYear === year ? "active-year" : ""
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="video-container">
        <div className="video-wrapper">
          <iframe
            src={aftermovieLinks[selectedYear]}
            title={`Aftermovie ${selectedYear}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="youtube-frame"
          ></iframe>
        </div>
      </div>
    </section>
  );
}