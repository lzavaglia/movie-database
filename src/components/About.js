import { useEffect } from "react";
import { appTitle } from "../globals/Variables";

const AboutPage = () => {
    
    useEffect(() => {
		document.title = `${appTitle} - About`;
	}, []);

    return (
        <main>
		    <section>
                <h2>Welcome to Film Town!</h2>
                <p>We are a movie database service that can give you information on all things movies! Find out what's popular right now and which movies have the best ratings. You can also check out what's playing in theatres now as well as what movies are yet to come. Don't forget to add a heart to your favourite flicks to add them to your favourites!
                </p>
                
            </section>
	    </main>
    );
	
}

export default AboutPage;
