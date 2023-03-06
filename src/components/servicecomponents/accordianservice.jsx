import { useState } from 'react'

function Accordianservice() {
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
                        <div className='title' style={{display: 'flex',justifyContent:'space-between',borderTop: '1px solid rgba(255,255,255,.12)', paddingTop: '25px', paddingBottom: '25px', alignItems: 'baseline'}} onClick={() => toggle(i)}>
                            <h2 style={{fontFamily: 'Urbanist-regular', fontSize: '18px'}}>{item.question}</h2>
                            <span className={selected === i ? 'svg transform' : 'svg'}>
                                <svg className='svgg' width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                </svg>
                            </span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>
                            <p style={{fontFamily: 'Urbanist-regular', fontSize: '14px'}}>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const data = [
    {
        question: 'How long will it take for my website to be designed?',
        answer: 'The time it takes to build a site depends on the complexity of the site. If you have a deadline, we will work hard to meet it. The most common cause of delay is the content (text/images) from the client.',
    },
    {
        question: 'Once my website design is completed, what after-sales service do you offer?',
        answer: 'We fully support any website we design and are always available should you encounter any problems or require new enhancements. UrbanSoft also offers website hosting and maintenance.',
    },
    {
        question: 'Do I have to keep my website with you forever? Can I move it to another provider?',
        answer: 'You may move your site to another Web hosting service at any time.',
    },
    {
        question: 'Why should I choose Urban Software for my website?',
        answer: 'We provide you with a website of your choice in a short span of time, we develop websites that are responsive, modular and SEO friendly at a very competitive price.',
    }
]


export default Accordianservice;