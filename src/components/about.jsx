import "./about.scss";

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>

      <div className="about-section">
        <h2>Intro :</h2>
        <p>
          This website is a Phasmophobia ghost guide created for players who
          want a simple way to understand ghosts and their evidence. Users can
          explore the site to browse ghost information, search for ghost names,
          and filter results by evidence.
        </p>
      </div>

      <div className="about-section">
        <h2>Features :</h2>
        <p>
          This website allows users to browse ghost cards, search ghosts by
          name, filter ghosts by evidence, and quickly view the evidence needed
          for each ghost.
        </p>
      </div>

      <div className="about-section">
        <h2>Project Purpose :</h2>
        <p>
          This project was made as a Phasmophobia guide to help players identify
          ghosts faster during gameplay. It was also built as a learning project
          using React and SCSS.
        </p>
      </div>

      <div className="about-footer">
        <p>Thank you for visiting this website.</p>
        <p>Feel free to explore the Ghosts page to learn more.</p>
      </div>
    </div>
  );
}

export default About;
