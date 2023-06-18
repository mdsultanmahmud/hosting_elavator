import './AboutProduct.css'
const AboutProduct = ({title}) => {
    return (
        <div className='aboutProductCon grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
                <h1>{title}</h1>
                <p>As a leading manufacturer of home/residential elevators, we provide high-quality and cost-effective products to real estate developers and dealers around the world plan.The one-stop service from installation to maintenance can meet the mobility needs of various applications from residential to commercial and shopping malls to airports. Our solutions for your building range from highly standardized functions to fully customized elevators.</p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default AboutProduct;