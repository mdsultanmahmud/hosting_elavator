import './Contact.css'
import { AiFillPhone, AiFillHome, AiOutlineGlobal } from 'react-icons/ai'
import { CgMail, } from 'react-icons/cg'
import ContactForm from '../../components/ContactForm/ContactForm';
import BannerBG from '../../components/BannerBG/BannerBG';
const Contact = () => {
    return (
        <div className='marginTop'>
            <BannerBG title={"Contact Us"}/>
            <div className="container ">
                <div className="contact-container mt-5">
                    <h2>We would love to work with you.</h2>
                    <div className='flex flex-col-reverse md:flex-row gap-x-[3%]'>
                        <div className='border-r-2 w-full md:w-[30%]'>
                            <h4>Elevator Engineers Ltd.</h4>
                            <p><AiFillPhone size={22} className='text-red-500' /> <span>88-02-44806324</span></p>
                            <p><CgMail size={22} className='text-red-500' /> <span>elevatorengineersltd@gmail.com</span></p>
                            <p><AiOutlineGlobal size={22} className='text-red-500' /> <span>www.elevatorbd.net</span></p>
                            <p><AiFillHome size={22} className='text-red-500' /> <span> House 664/A, Road # 09 (Main Road), DOHS Mirpur, Dhaka – 1216.</span></p>
                        </div>
                        <div className='w-full md:w-[67%]'>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;