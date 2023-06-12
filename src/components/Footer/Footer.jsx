import { Link } from "react-router-dom";
import logo from '../../assets/navbar/navbarLogo.png'
import { CiFacebook } from 'react-icons/ci'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="container p-4 lg:p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 gap-8">
                    <div>
                        <img src={logo} alt="logo of the company" width={156} height={56} />
                        <p>Dongwu Town, Yinzhou District, Ningbo City, Zhejiang Province, P. R. China</p>
                        <p>overseas@nbxd.com ｜ 0086-574-88336262</p>
                        <div className='flex items-center gap-x-2 mt-2'>
                            <CiFacebook />
                            <BsTwitter />
                            <AiOutlineInstagram />
                            <AiOutlineYoutube />
                        </div>
                    </div>
                    <div>
                        <h2>Menu</h2>
                        <ul className="grid grid-cols-2 gap-x-4 md:gap-x-8">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'/products'}>Products</Link></li>
                            <li><Link to={'/modernization'}>Modernization</Link></li>
                            <li><Link to={'/projects'}>Projects</Link></li>
                            <li><Link to={"/download"}>Download</Link></li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                            <li><Link to={"/agent"}>Agent</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2>You can trust us</h2>
                        <p>As a Top 10 elevator manufacturer in China, We developed core technologies to supply passenger elevator, high-speed elevator,  observation elevator...</p>
                        <button className="primaryButton rounded-2xl mt-5">Contact Us</button>
                    </div>
                </div>
                {/* footer under section  */}
                {/* <div>
                    <ul>
                        <li>&copy; 2018 Ningbo Hosting Elevator Co., Ltd. </li>
                        <li>RELATED ARTICLES</li>
                        <li><Link>SiteMap.html</Link></li>
                    </ul>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;