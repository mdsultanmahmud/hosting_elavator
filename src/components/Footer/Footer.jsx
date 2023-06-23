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
                <div className="grid grid-cols-1  md:grid-cols-3 py-12 gap-8">
                    <div>
                        <img src={logo} alt="logo of the company" width={156} height={56} />
                        <p className="mb-2"><span> House 664/A, Road # 09 (Main Road), DOHS Mirpur, Dhaka – 1216.</span></p>
                        <p className="mb-2"> elevatorengineersltd@gmail.com | 88-02-44806324</p>
                        <div className='flex items-center gap-x-2 mt-2'>
                            <CiFacebook />
                            <BsTwitter />
                            <AiOutlineInstagram />
                            <AiOutlineYoutube />
                        </div>
                    </div>
                    <div>
                        <h2>Menu</h2>
                        <ul className="grid grid-cols-2">
                            <li className="mb-1"><Link to={'/'}>Home</Link></li>
                            <li className="mb-1"><Link to={'/about'}>About</Link></li>
                            <li className="mb-1"><Link to={'/products'}>Products</Link></li>
                            <li className="mb-1"><Link to={'/modernization'}>Modernization</Link></li>
                            <li className="mb-1"><Link to={'/projects'}>Projects</Link></li>
                            <li className="mb-1"><Link to={"/download"}>Download</Link></li>
                            <li className="mb-1"><Link to={'/blog'}>Blog</Link></li>
                            <li className="mb-1"><Link to={"/agent"}>Agent</Link></li>
                            <li className="mb-1"><Link to={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2>You can trust us</h2>
                        <p className="my-6">As a Top 10 elevator manufacturer in China, We developed core technologies to supply passenger elevator, high-speed elevator,  observation elevator...</p>
                        <button className="primaryButton rounded-2xl mt-5">Contact Us</button>
                    </div>
                </div>
                {/* footer under section  */}
                <div className="flex flex-col lg:flex-row gap-y-4 items-center justify-between py-8 lowerFooter">
                    <ul className="flex flex-wrap gap-x-4 items-center">
                        <li>&copy; 2018 Ningbo Hosting Elevator Co., Ltd. </li>
                        <li>RELATED ARTICLES</li>
                        <li><Link>SiteMap.html</Link></li>
                        <li><Link>Terms of Service</Link></li>
                        <li>|</li>
                        <li><Link>Privacy Policy</Link></li>
                    </ul>
                    <div>
                        <p>Marketing Support by Globalsir</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;