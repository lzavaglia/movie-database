import Nav from './Nav';
import Hamburger from './Hamburger';

function Header() {
    return (
        <header>
            <Hamburger />
            <div className='hLine'></div>
        </header>
    );
}

export default Header
