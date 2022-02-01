import { useEffect } from "react";
import { appTitle } from "../globals/Variables";
import apiLogo from '../images/tmdb-logo.svg';

const AboutPage = () => {
  useEffect(() => {
    document.title = `${appTitle} - About`;
  }, []);

  return (
    <div className="about-container">
      <section className="about-section">
        <h2 className="about-us">About Us</h2>
        <div className="aLine"></div>
        <h2 className="about-welcome">Welcome to Film Town!</h2>
        <p className="about-text">
          We are a movie database service that can give you information on all
          things movies! Find out what's popular right now and which movies have
          the best ratings. You can also check out what's playing in theatres
          now as well as what movies are yet to come. Don't forget to add a
          heart to your favourite flicks to add them to your favourites!
        </p>
        <div className='credits'>
            <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            <img className="api-logo" src={apiLogo}></img>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
