import { getYear } from '../utilities/Date';

function Footer() {
    return (
        <footer>
            <div className='hLine'></div>
            <p>&copy; {getYear()} Chris Zsolyomy, Lily Zavaglia, Lucille Chesshire.</p>
        </footer>
    )
}

export default Footer
