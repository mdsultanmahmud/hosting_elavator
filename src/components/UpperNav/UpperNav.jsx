import { CgMail } from 'react-icons/cg'
import { IoMdCall } from 'react-icons/io'
import { CiFacebook } from 'react-icons/ci'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import ukFlag from '../../assets/navbar/uk_flag.png'
import esFlag from '../../assets/navbar/es_flag.png'
import '../Navbar/Navbar.css'
// eslint-disable-next-line react/prop-types
const UpperNav = ({prop}) => {
    // eslint-disable-next-line react/prop-types
    const {shownav, isBanner} = prop
    return (
        <div className={`hidden md:block`}>
            <div className={`container flex justify-between items-center ${shownav ? "hidden" : ""} uppContent`}>
                <div className={`flex items-center gap-x-3 text-[12px] ${isBanner && !shownav  ? "text-white" : "text-black"} `}>
                    <p>Welcome to </p>
                    <span>|</span>
                    <p className='flex items-center gap-x-1'><CgMail /> <span>elevatorengineersltd@gmail.com</span></p>
                    <span>|</span>
                    <p className='flex items-center gap-x-1'><IoMdCall /> <span>88-02-44806324</span></p>
                </div>
                <div className={`flex gap-x-12 items-center ${isBanner && !shownav  ? "text-white" : "text-black"}`}>
                    <div className='flex items-center gap-x-2'>
                        <CiFacebook size={22}  className='hover:text-red-500 cursor-pointer icon' />
                        <BsTwitter size={22}   className='hover:text-red-500 cursor-pointer icon' />
                        <AiOutlineInstagram size={22}  className='hover:text-red-500 cursor-pointer icon' />
                        <AiOutlineYoutube size={22}    className='hover:text-red-500 cursor-pointer icon' />
                    </div>
                    <div>
                        <div className="dropdown">
                            <label tabIndex={0} className="m-1">Select</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li ><button className='flex items-center gap-x-2'><img src={ukFlag} className='w-[26px] h-[17px]'/><span>English</span></button></li>
                                <li ><button className='flex items-center gap-x-2'><img src={esFlag} className='w-[26px] h-[17px]'/><span>Espanol</span></button></li>
                                <li><button className='flex items-center gap-x-2'><img src={ukFlag} className='w-[26px] h-[17px]'/><span>لعربية</span></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpperNav;