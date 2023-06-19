import './Banner.css'
import bannerOne from '../../assets/banner/bgOne.jpg'
import bannerTwo from '../../assets/banner/bannerTwo.jpg'
import bannerThree from '../../assets/banner/bannerThree.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className="carousel w-full z-0 h-[100vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={bannerOne} className="w-full" />
                <div className='bg-color'></div>
                <div className='banner-content'>
                    <h2>The Elevator Business Leader in Bangladesh</h2>
                    <h3>since 2005</h3>
                    <p><span>300+</span>  elevators and escalators serving the country</p>
                    <p><span>Independent </span> modernization and service team</p>
                    <p><span>One-stop service,</span> for repair and modernization</p>
                    <Link to={'/contact'} ><button className='bannerButton'>Contact Us</button></Link>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={bannerTwo} className="w-full" />
                <div className='bg-color'></div>
                <div className='banner-content'>
                    <h2>The Elevator Business Leader in Bangladesh</h2>
                    <h3>since 2005</h3>
                    <p><span>300+</span>  elevators and escalators serving the country</p>
                    <p><span>Independent </span> modernization and service team</p>
                    <p><span>One-stop service,</span> for repair and modernization</p>
                    <Link to={'/contact'} ><button className='bannerButton'>Contact Us</button></Link>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={bannerThree} className="w-full" />
                <div className='bg-color'></div>
                <div className='banner-content'>
                    <h2>The Elevator Business Leader in Bangladesh</h2>
                    <h3>since 2005</h3>
                    <p><span>300+</span>  elevators and escalators serving the country</p>
                    <p><span>Independent </span> modernization and service team</p>
                    <p><span>One-stop service,</span> for repair and modernization</p>
                    <Link to={'/contact'} ><button className='bannerButton'>Contact Us</button></Link>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;  