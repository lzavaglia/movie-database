import { NavLink } from 'react-router-dom';

function NavSort() {
    return (
        <nav>
            <ul>
                <div className='filter-btns'>
                    <li>
                        <div className='filter popular' >
                            <NavLink to="/sort/popular">Popular</NavLink>
                        </div>
                    </li>
                    <li>
                        <div className='filter top-rated'>
                            <NavLink to="/sort/top-rated">Top Rated</NavLink>
                        </div>
                    </li>
                    <li>
                        <div className='filter now-playing'>
                            <NavLink to="/sort/now-playing">Now Playing</NavLink>
                        </div>
                    </li>
                    <li>
                        <div className='filter upcoming'>
                            <NavLink to="/sort/upcoming">Upcoming</NavLink>
                        </div>
                    </li>   
                </div>
                
                    
            </ul>
        </nav>
    )
}

export default NavSort;
