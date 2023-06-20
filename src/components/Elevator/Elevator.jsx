import './Elevator.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/swiper-bundle.css';
// import required modules
import { Navigation } from "swiper";
// import images 
import liftOne from '../../assets/banner/lift1.jpg'
import liftTwo from '../../assets/banner/lift2.jpg'
import liftThree from '../../assets/banner/lift3.jpg'
import liftFour from '../../assets/banner/lift4.jpg'

const Elevator = () => {
    return (
        <div>
            <div className='container'>
                <div>
                    <h1 className='title'>Promoting the world renowned global brand OTIS  in Bangladesh</h1>

                    <div className='mt-12 elevatorContent'>
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                // For small devices like mobile phones
                                480: {
                                  slidesPerView: 1,
                                },
                                // For tablets
                                768: {
                                  slidesPerView: 2,
                                },
                                // Default for larger screens
                                1200: {
                                  slidesPerView: 4,
                                },
                              }}
                        >
                            <SwiperSlide>
                                <img src={liftOne} alt="" />
                                <p className='mt-3 text-[16px] text-[#9b9b9b]'>Apartment Building Elevator</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={liftTwo} alt="" />
                                <p className='mt-3 text-[16px] text-[#9b9b9b]'>Commercial Elevator</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={liftThree} alt="" />
                                <p className='mt-3 text-[16px] text-[#9b9b9b]'>Hotel Elevator</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={liftFour} alt="" />
                                <p className='mt-3 text-[16px] text-[#9b9b9b]'>Commercial Escalator</p>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Elevator;