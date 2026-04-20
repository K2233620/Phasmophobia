import "./PhasmoPage.scss";

import feature1 from "../assets/images/feature1.png";
import feature2 from "../assets/images/feature2.png";
import feature3 from "../assets/images/feature3.png";

function Phasmo() {
  return (
    <div className="phasmo-page">
      {/* HERO */}
      <section className="hero-section">
        <h1 className="game-title">PHASMOPHOBIA</h1>
        <br />
        <h2 className="purchase-title">PURCHASE NOW</h2>

        <div className="platforms">
          <div className="platform-card">STEAM</div>
          <div className="platform-card">PS5</div>
          <div className="platform-card">XBOX</div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <h2 className="features-title">GAME FEATURES</h2>

        <div className="features-grid">
          {/* CARD 1 */}
          <div className="feature-card">
            <img src={feature1} alt="Investigate" className="feature-image" />
            <h3>INVESTIGATE THE UNKNOWN</h3>
            <p>
              Step into a terrifyingly immersive world of haunting spirits,
              unique behaviours, and specialised ghost-hunting tools.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="feature-card">
            <img src={feature2} alt="Play your way" className="feature-image" />
            <h3>PLAY YOUR WAY</h3>
            <p>
              Explore haunted locations, tackle challenges at your own pace, and
              customise the terror with your team.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="feature-card">
            <img src={feature3} alt="Multiplayer" className="feature-image" />
            <h3>MULTIPLAYER HORROR</h3>
            <p>
              Team up online with up to four players and survive the unknown
              together across chilling investigations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Phasmo;
