import './Banner.css'
import bannerOne from '../../assets/banner/bannerbg.jpg'
import bannerTwo from '../../assets/banner/bannertwo.webp'
import bannerThree from '../../assets/banner/bannerthree.webp'
const Banner = () => {
    return (
        <div className="carousel w-full z-0 h-[90vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={bannerOne} className="w-full" />
                <div className='bg-color'></div>
                <div className='banner-content'>
                    <h2>The Leading Elevator Manufacturer in China</h2>
                    <h3>Since 1993</h3>
                    <p><span>1,000,000+</span> elevators & escalators Serving in the world today</p>
                    <p><span>Independent </span> research and development and manufacturing of core components</p>
                    <p><span>One-stop service,</span> from raw materials to production to packaging to transportation to Ningbo Port</p>
                    <button className='bannerButton'>Request A Quote</button>
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
                    <h2>The Leading Elevator Manufacturer in China</h2>
                    <h3>Since 1993</h3>
                    <p><span>1,000,000+</span> elevators & escalators Serving in the world today</p>
                    <p><span>Independent </span> research and development and manufacturing of core components</p>
                    <p><span>One-stop service,</span> from raw materials to production to packaging to transportation to Ningbo Port</p>
                    <button className='bannerButton'>Request A Quote</button>
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
                    <h2>The Leading Elevator Manufacturer in China</h2>
                    <h3>Since 1993</h3>
                    <p><span>1,000,000+</span> elevators & escalators Serving in the world today</p>
                    <p><span>Independent </span> research and development and manufacturing of core components</p>
                    <p><span>One-stop service,</span> from raw materials to production to packaging to transportation to Ningbo Port</p>
                    <button className='bannerButton'>Request A Quote</button>
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