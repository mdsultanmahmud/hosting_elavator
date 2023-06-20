
import { Link } from 'react-router-dom';
import UpperNav from '../UpperNav/UpperNav';
import logo from '../../assets/navbar/navbarLogo.png'
import {FaBars} from 'react-icons/fa'
import { useContext, useEffect, useState } from 'react';
import './Navbar.css'
import { NavbarContext } from '../../context/ContextProvider';
const Navbar = () => {
    const {isBanner} = useContext(NavbarContext)
    const [shownav, setShowNav] = useState(false)
    // console.log(isBanner, setIsBanner)
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
                    <Link to={'/company-profile'}>About</Link>
                </summary>
                <ul className="p-2 text-gray-500 text-[16px]">
                    <li><Link to={'/company-profile'}>Company Profile</Link></li>
                    <li><Link to={'/factory-view'}>Factory View</Link></li>
                    <li><Link to={'/certificate'}>Certificates</Link></li>
                    <li><Link to={'/faq'}>FAQ</Link></li>
                    <li><Link to={'/video'}>Video</Link></li>
                </ul>
            </details>
        </li>
        <li tabIndex={0}>
            <details>
                <summary>
                    <Link to={'/products'}>Products</Link>
                </summary>
                <ul className="p-2 text-gray-500 text-[16px]">
                    <li><Link to={'/passenger-elevator'}>Passenger Elevator</Link></li>
                    <li><Link to={'/home-elevator'}>Home Elevator</Link></li>
                    <li><Link to={'/panoramic-elevator'}>Panoramic Elevator</Link></li>
                    <li><Link to={'/hospital-elevator'}>Hospital Elevator</Link></li>
                    <li><Link to={'/freight-elevator'}>Freight Elevator</Link></li>
                    <li><Link to={'/escalators-moving-walks'}>Escalators & Moving Walks</Link></li>
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
    </>
    return (
        <div className={`fixed top-0 left-0 w-full z-10 ${isBanner && !shownav  ? 'bg-transparent' : 'shadow-lg bg-white'} navContainer`}>
            <UpperNav prop={{shownav, isBanner}}/>
            <div className="navbar container custom-nav">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden fixed top-7 md:top-9 right-3 text-black font-bold">
                           <FaBars size={24}/>
                        </label>
                        <ul tabIndex={0} className={`text-[14px] menu menu-sm dropdown-content mt-8 p-8 bg-base-100  w-[100vw] ml-[-10px]  ${isBanner && !shownav  ? "text-white" : "text-black"}`}>
                            {menuList}
                        </ul>
                    </div>
                    <Link to={'/'}><img src={logo} alt="logo of the website" className='h-[100px] w-[156px]' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`text-[14px] menu menu-horizontal px-1 font-bold tracking-wider ${isBanner && !shownav  ? "text-white" : "text-black"}`}>
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