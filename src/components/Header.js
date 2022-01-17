// import Nav from './Nav';
import Hamburger from './Hamburger';
import NavSort from './NavSort';

function Header() {
    return (
        <header>
            <Hamburger />
            <NavSort />
            <div className='hLine'></div>
        </header>
    );
}

export default Header
