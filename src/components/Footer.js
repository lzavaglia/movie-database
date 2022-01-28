import { getYear } from '../utilities/Date';

function Footer() {
    return (
        <footer>
            <div className='hLine'></div>
            <div className='hLine hLine2'></div>
            <p><p>&copy; {getYear()} Chris Zsolyomy</p><p>Lucille Chesshire</p><p>Lily Zavaglia</p></p>
        </footer>
    )
}

export default Footer;
