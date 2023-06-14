import { CgMail } from 'react-icons/cg'
import { IoMdCall } from 'react-icons/io'
import { CiFacebook } from 'react-icons/ci'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import ukFlag from '../../assets/navbar/uk_flag.png'
import esFlag from '../../assets/navbar/es_flag.png'
// eslint-disable-next-line react/prop-types
const UpperNav = ({prop}) => {
    // eslint-disable-next-line react/prop-types
    const {shownav} = prop
    console.log(shownav)
    return (
        <div className={`hidden md:block`}>
            <div className={`container flex justify-between items-center ${shownav ? "hidden" : ""}`}>
                <div className='flex items-center gap-x-3 text-black text-[12px]'>
                    <p>Welcome to </p>
                    <span>|</span>
                    <p className='flex items-center gap-x-1'><CgMail /> <span>usoverseas@nbxd.com</span></p>
                    <span>|</span>
                    <p className='flex items-center gap-x-1'><IoMdCall /> <span>0086-574-88336262</span></p>
                </div>
                <div className='flex gap-x-12 items-center text-black'>
                    <div className='flex items-center gap-x-2'>
                        <CiFacebook size={22}  className='hover:text-red-500 cursor-pointer' />
                        <BsTwitter size={22}   className='hover:text-red-500 cursor-pointer' />
                        <AiOutlineInstagram size={22}  className='hover:text-red-500 cursor-pointer' />
                        <AiOutlineYoutube size={22}    className='hover:text-red-500 cursor-pointer' />
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