import './Contact.css'
import contact from '../../assets/others/contact.webp'
import { AiFillPhone, AiFillHome, AiOutlineGlobal } from 'react-icons/ai'
import { CgMail, } from 'react-icons/cg'
const Contact = () => {
    return (
        <div className='marginTop'>
            <div className='img-section'>
                <img src={contact} alt="" />
                <h3>Contact Us</h3>
            </div>
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
                            <h2>Contact Us Now</h2>
                            <div className='rounded drop-shadow-lg border p-0 m-0'>
                                <p className='p-2 mt-0 bg-gray-300 rounded-t-lg'>Enter your inquiry details, We will reply you in 24 hours.</p>
                                <form className='p-6'>
                                    <div className='grid grid-cols-2 gap-x-4'>
                                        <input type="text" placeholder='Name:*' required />
                                        <input type="text" placeholder='Email:*' required />
                                        <input type="text" placeholder='Comapny:' />
                                        <input type="text" placeholder='Phone:' />
                                    </div>
                                    <input type="text" placeholder='Products you want:' />
                                    <textarea name="" id="" placeholder='Message:'></textarea>
                                    {/* <input type="text" placeholder='Code' className='code'/> */}
                                    <div  className='flex gap-x-5 justify-center items-center'>
                                        <button className='bg-red-600'>Submit</button>
                                        <button className='bg-gray-600'>Refill</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;