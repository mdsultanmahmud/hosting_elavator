
import { Link } from 'react-router-dom';
import UpperNav from '../UpperNav/UpperNav';
import logo from '../../assets/navbar/navbarLogo.png'
const Navbar = () => {
    const menuList = <>
        <li><Link to={'/'}>Home</Link></li>
        <li tabIndex={0}>
            <details>
                <summary>
                    <Link to={'/about'}>About</Link>
                </summary>
                <ul className="p-2">
                    <li><a>Company Profile</a></li>
                    <li><a>Factory View</a></li>
                    <li><a>Certificates</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Video</a></li>
                </ul>
            </details>
        </li>
        <li tabIndex={0}>
            <details>
                <summary>
                    <Link to={'/products'}>Products</Link>
                </summary>
                <ul className="p-2">
                    <li><a>Passenger Elevator</a></li>
                    <li><a>Home Elevator</a></li>
                    <li><a>Panoramic Elevator</a></li>
                    <li><a>Hospital Elevator</a></li>
                    <li><a>Freight Elevator</a></li>
                    <li><a>Escalators & Moving Walks</a></li>
                </ul>
            </details>
        </li>
        <li><Link to={'/modernization'}>Modernization</Link></li>
        <li tabIndex={0}>
            <details>
                <summary><Link to={'/projects'}>Projects</Link></summary>
                <ul className="p-2">
                    <li><a>Overeases Project</a></li>
                    <li><a>Domestic Project</a></li>
                </ul>
            </details>
        </li>
        <li><Link to={"/download"}>Download</Link></li>
        <li tabIndex={0}>
            <details>
                <summary><Link to={'/blog'}>Blog</Link></summary>
                <ul className="p-2">
                    <li><a>Exhibition and news</a></li>
                    <li><a>Articles</a></li>
                </ul>
            </details>

        </li>
        <li><Link to={"/agent"}>Agent</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
    </>
    return (
        <div className='shadow-lg fixed top-0 left-0 w-full z-10 bg-white'>
            <UpperNav/>
            <div className="navbar container ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuList}
                        </ul>
                    </div>
                    <Link to={'/'}><img src={logo} alt="logo of the website" className='h-[66px] w-[156px]' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuList}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/contact'}>Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;