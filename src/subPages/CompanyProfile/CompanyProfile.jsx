import './CompanyProfile.css'
// eslint-disable-next-line react/prop-types
const CompanyProfile = ({tab}) => {

    return (
        <div className={`${tab == "companyProfile" ? "block" : "hidden"}`}>
            <h1>this is our company profile</h1>
        </div>
    );
};

export default CompanyProfile;