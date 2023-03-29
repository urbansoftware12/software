import { useState } from 'react'

function Accordianhoome() {
    const [selected, setselected] = useState(null);
    const toggle = (i) => {
        if(selected === i){
            return setselected(null)
        }

        setselected(i)
    }

    return(
        <div className="accordian_wrapper">
            <div className="accordian accer">
                {data.map((item, i) => (
                    <div className="item">
                        <div className='title acodttl1' onClick={() => toggle(i)}>
                            <h2 className='quest1'>{item.question}</h2>
                            <span className={selected === i ? 'svg transform' : 'svg'} style={{background:'#34A9FF'}}>
                                <svg className='svgg' width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                </svg>
                            </span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>
                            <p className='ans1'>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const data = [
    {
        question: 'A digital agency is a business',
        answer: 'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.',
    },
    {
        question: 'Hire to outsource your digital',
        answer: 'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.',
    },
    {
        question: 'Marketing efforts',
        answer: 'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.',
    },
    {
        question: 'Can provide your business',
        answer: 'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.',
    },
]


export default Accordianhoome;