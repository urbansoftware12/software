import { useState } from 'react'


function Accordianux() {
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
        question: 'Why UX Services Are Important?',
        answer: 'User experience design services that we provide can turn all your ideas into reality by using the latest tools and technologies within stated deadlines. UX design is vital as it makes your product appealing for the users and tries to fulfil the user’s needs and provide a positive experience. It helps you keep the users loyal to your brand and services/products you offer. UX design is about the understanding of your user’s needs and making them your priority as today, companies that come from different industries are trying to create personalized approaches and offers to satisfy their customers. UrbanSoft’s team uses the latest tools and tech solutions to make it possible. We create clear, easy to use software that helps to define user journey on your website or app. Our team of experienced designers develops meaningful UX design that is most conducive to business success and brings advantages both for your company and your users.',
    },
    {
        question: 'How UI Services Can Help Your Product?',
        answer: 'We provides UI service for the companies that wish to turn visitors of their websites and apps into potential buyers. UI facilitates interactions between users and websites or apps, and it maximizes responsiveness, efficiency, and accessibility of your software. Our team of designers has a decade-long experience in this field and can help companies make their products stylish and good-looking, create unique and recognizable visual features, include high-quality graphic elements, exciting animation, and transitions. We prefer UI elements that are simple and clear, but original that will attract users.',
    },
    {
        question: 'Why should I choose Urban Software for my website?',
        answer: 'We provide you with a website of your choice in a short span of time, we develop websites that are responsive, modular and SEO friendly at a very competitive price.',
    },
]


export default Accordianux;