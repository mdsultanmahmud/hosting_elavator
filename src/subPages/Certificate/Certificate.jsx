
// eslint-disable-next-line react/prop-types
const Certificate = ({tab}) => {
    return (
        <div className={`${tab == "certificate" ? "block" : "hidden"}`}>
            <h1>here our all certificate</h1>
        </div>
    );
};

export default Certificate;