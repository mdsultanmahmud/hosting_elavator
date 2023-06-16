
// eslint-disable-next-line react/prop-types
const FactoryView = ({tab}) => {
    return (
        <div className={`${tab == "factoryView" ? "block" : "hidden"}`}>
            <h1>this is our factoryView</h1>
        </div>
    );
};

export default FactoryView;