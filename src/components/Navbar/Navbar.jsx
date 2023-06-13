
import { Link } from 'react-router-dom';
import UpperNav from '../UpperNav/UpperNav';
import logo from '../../assets/navbar/navbarLogo.png'
import {FaBars} from 'react-icons/fa'
import { useEffect, useState } from 'react';
import './Navbar.css'
const Navbar = () => {
    const [shownav, setShowNav] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            if (scrollY >= 170) {
                setShowNav(true)
            } else {
                setShowNav(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const menuList = <>
        <li><Link to={'/'}>Home</Link></li>
        <li tabIndex={0}>
            <details>
                <summary>
                    <Link to={'/about'}>About</Link>
                </summary>
                <ul className="p-2 text-gray-500 text-[16px]">
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
                <ul className="p-2 text-gray-500 text-[16px]">
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
                <ul className="p-2 text-gray-500 text-[16px]">
                    <li><a>Overeases Project</a></li>
                    <li><a>Domestic Project</a></li>
                </ul>
            </details>
        </li>
        <li><Link to={"/download"}>Download</Link></li>
        <li tabIndex={0}>
            <details>
                <summary><Link to={'/blog'}>Blog</Link></summary>
                <ul className="p-2 text-gray-500 text-[16px]">
                    <li><a>Exhibition and news</a></li>
                    <li><a>Articles</a></li>
                </ul>
            </details>

        </li>
        <li><Link to={"/agent"}>Agent</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
    </>
    return (
        <div className={`fixed top-0 left-0 w-full z-10 ${shownav ? 'shadow-lg bg-white' : 'bg-transparent'}`}>
            <UpperNav prop={{shownav}}/>
            <div className="navbar container custom-nav">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden fixed top-4 right-3 text-black font-bold">
                           <FaBars size={22}/>
                        </label>
                        <ul tabIndex={0} className="text-[14px] menu menu-sm dropdown-content mt-8 p-8 bg-base-100  w-[100vw] ml-[-10px]  text-gray-500">
                            {menuList}
                        </ul>
                    </div>
                    <Link to={'/'}><img src={logo} alt="logo of the website" className='h-[86px] w-[156px]' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`text-[14px] menu menu-horizontal px-1 font-bold tracking-wider ${shownav ? "text-gray-500" : "text-white"}`}>
                        {menuList}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className='mr-[3rem] lg:mr-0 primaryButton  rounded-xl md:rounded-2xl' to={'/contact'}>Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;