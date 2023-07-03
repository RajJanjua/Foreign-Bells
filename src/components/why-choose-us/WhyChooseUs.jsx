import './why-choose-us.scss';
import bg from '../../assets/why-choose-us_img.jpeg';


const WhyChooseUs = () => {
    return (
        <div className="why-choose-us">
            <div className="why-choose-us__left">
                <div className="why-choose-us__card bg"></div>
                <div className="why-choose-us__card">
                    <img src={bg} alt="" className="why-choose-us__img" />
                </div>
            </div>
            <div className="why-choose-us__right">
                <h1 className='why-choose-us__title'>Why Choose Us</h1>
                <p className='why-choose-us__sub'>“No borders, no boundaries – our team makes global travel a reality.”</p>
                <p className='why-choose-us__desc'>
                    We are a professionally managed and qualified specialist Canadian educational counseling service which gives you the correct advice for you future planning. <br/><br/>
    
                    Our staff understands the potential, reviews the profile, financial capabilities, future aspirations and interest of the student to suggest appropriate courses, universities and countries to ensure that ambitions, goals and aspirations of the candidate are appropriately realized.<br/><br/>
    
                    Our well educated and experienced English Language staffs help the students achieve good scores in the English Language tests.<br/>
                </p>
                <div className="why-choose-us__flag">
                    <img className='why-choose-us__flag-img' src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-canada-countrys-flags-justicon-flat-justicon.png" alt="external-canada-countrys-flags-justicon-flat-justicon"/>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;