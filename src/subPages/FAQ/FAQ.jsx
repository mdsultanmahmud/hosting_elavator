
// eslint-disable-next-line react/prop-types
const FAQ = ({tab}) => {
    return (
        <div className={`${tab == "faq" ? "block" : "hidden"}`}>
            <h1>Faq is here</h1>
        </div>
    );
};

export default FAQ;