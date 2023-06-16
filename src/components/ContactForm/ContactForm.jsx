
const ContactForm = () => {
    return (
        <>
            <h2 className="text-start">Contact Us Now</h2>
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
                    <div className='flex gap-x-5 justify-center items-center'>
                        <button className='bg-red-600'>Submit</button>
                        <button className='bg-gray-600'>Refill</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactForm;