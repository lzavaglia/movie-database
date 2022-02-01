import { getYear } from '../utilities/Date';


function Footer() {
    return (
        <footer>
            <div className='hLine'></div>
            <div className='hLine hLine2'></div>
            <div className='our-names'>
            <p>&copy; {getYear()} Chris Zsolyomy</p><p>Lucille Chesshire</p><p>Lily Zavaglia</p>
            </div>
        </footer>
    )
}

export default Footer;
