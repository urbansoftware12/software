import { useState } from 'react'

function Accordianbranding() {
    const [selected, setselected] = useState(null);
    const toggle = (i) => {
        if(selected === i){
            return setselected(null)
        }

        setselected(i)
    }

    return(
        <div className="accordian_wrapper">
            <div className="accordian">
                {data.map((item, i) => (
                    <div className="item">
                        <div className='title acodttl' onClick={() => toggle(i)}>
                            <h2 className='quest'>{item.question}</h2>
                            <span className={selected === i ? 'svg transform' : 'svg'}>
                                <svg className='svgg' width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                </svg>
                            </span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>
                            <p className='ans'>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const data = [
    {
        question: 'What is a mobile app?',
        answer: 'A mobile app is a software application specifically developed for small, wireless handheld devices like tablets and smartphones. App makers will design mobile apps in a way that meet the demands and constraints of said devices, taking advantage of the special capabilities they have.',
    },
    {
        question: 'What is the process of developing an app?',
        answer: <div>
              <p>App development follows a set of strict guidelines that require time, effort and great attention to detail. We’ve highlighted the following key components in order:</p>
               <ul className='faq_li' style={{paddingLeft: '17px'}}>
               <li className='mt-4'><b>Research</b>&nbsp;– This is the stage where you learn everything you need to know about your developing app idea, from your customer demographics, your motivations, buyer personas etc. This first step is essential as it lays down the necesary research and brainstorming groundwork for the stages that follow.</li>
               <li className='mt-4'><b>Wireframing</b>&nbsp;– Wireframing and drawing detailed sketches of your envisioned product allows you to understand the future of your app functionalities.</li>
               <li className='mt-4'><b>Technical feasibility assessment&nbsp;</b>– Getting a clearer understanding of your product visuals and which backend systems will be able to support your app’s functionality. An app depending on its formation (iOS, Android) will have different requirements.</li>
               <li className='mt-4'><b>Prototype</b>&nbsp;– By building a rapid prototype, you will be able to comprehend your app’s touch/user experience yourself and assess whether you’re going in the right direction. Include stakeholders in this process as their feedback is crucial to productivity development.</li>
               <li className='mt-4'><b>Design</b>&nbsp;– Time to deep-dive into coding. Your UI/UX whizzes will build the look and feel of your app, providing you multiple blueprints and visual direction for you to review. Depending on your budget and scope, the design phase can take a number of hours and elements.</li>
               <li className='mt-4'><b>Development</b>&nbsp;– This stage will occur early on and will often feature a set amount of series to validate an app’s functionality and assumptions to give you a better understanding of the scope of your work. At this point, regular changes and improvements to agile methodologies will be used and reviewed to move productivity.</li>
               <li className='mt-4'><b>Testing</b>&nbsp;– In mobile app development, the earlier and more often you test the better as this will keep final costs low. Application testing is vast so ensure your team covers the necessary facets from compatibility testing, usability, interface checks, stress, security, performance and so on.</li>
               <li className='mt-4'><b>Deployment&nbsp;</b>– Once your app is ready to submit, choose a day and key up for a formal launch. Different app stores will feature different launching policies so this is not the end. App development doesn’t end at a launch. Once your app gets in the hands of users, you will need to incorporate their invaluable feedback to future versions and regular updates.</li>
                </ul>
             </div>,
    },
    {
        question: 'Why do I need an app?',
        answer: <div>
                    <p>The importance of mobile app development for all businesses is evident today, as more users are more interested in getting things done virtually. Considering today’s digital age, businesses need mobile applications to grow the brand awareness and unlock market reach. Some benefits of a having a mobile app for your business include:</p>
                    <ul className='faq_li' style={{paddingLeft: '17px'}}>
                        <li className='mt-4'>Aid promotion and offer customer support</li>
                        <li className='mt-4'>Value addition through loyalty programs</li>
                        <li className='mt-4'>Provides better connection with customers</li>
                        <li className='mt-4'>Makes businesses more accessible for today’s digital users</li>
                        <li className='mt-4'>Drives high engagement levels</li>
                        <li className='mt-4'>Provide a better interface to your customers via a channel you own</li>
                        <li className='mt-4'>Pair with hardware services to enhance your service to a customer</li>
                    </ul>
                </div>,
    },
    {
        question: 'How much does it cost to develop an app?',
        answer: 'Today, the average mobile app development will cost about $170,000. More complex projects reach up to $500,000 to develop. Your overall costs will depend on the scope of your project, the platforms you choose and if you’re keen on hiring an external development team. A Simple app can be built within a $25,000 to $100,000 budget by taking advantage of reusable components and off the shelf 3rd party solutions. During our discovery phase or Kick off phase we can advise you on the pro’s and con’s of certain decisions which might reduce the short term cost but decrease the longevity of an implementation.',
    },
]


export default Accordianbranding;