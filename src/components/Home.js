import { useEffect } from 'react';
import { appTitle } from '../globals/Variables';



   

function Home() {
    useEffect(() => {
        document.title = `${appTitle} - Home`;
    },[]);
    return (
        <div>
            Home
        </div>
    )
}
    

    




export default Home;