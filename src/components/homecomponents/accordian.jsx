import { useState } from 'react'


function Accordian() {
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
        question: 'Custom web development',
        answer: 'UrbanSoft’s creates custom web applications that have bespoke features and customer friendly navigation. Our web developers are trained to build impressive custom designs to make it stand out from the competition.',
    },
    {
        question: 'Unique open source platforms',
        answer: 'Build open-source web portals using the latest technologies and ensure the delivery of most suited customer requirements. Our web solutions are completely responsive and comply thoroughly with all security standards.',
    },
    {
        question: 'Transparent & flexible process',
        answer: 'We are open and honest with our clients and provide a flexible model to craft innovative solutions and bring unmatched profits to the organization. The flexible engagement model offered by UrbanSoft helps you achieve premium quality at pocket-friendly prices.',
    },
    {
        question: 'I own a small business. Do I need custom web application development services?',
        answer: 'That depends on the type and scale of the web solution you plan to build and how small your business really is. If you lead a small team that does not exceed 20 experts in total and you need a simple website, there are enough website builders that may cover your needs. If you need a web solution with sophisticated and stunning visuals, custom animations, and advanced functionality, custom web development services is your option. If you plan to grow your ecommerce business and add new functionality and new WordPress modules often, custom web application development services are the answer as well.',
    },
    {
        question: 'How Can You Make It Easier For Me To Manage My Website?',
        answer: 'This is an important question to ask, especially for business owners who don’t know much about WordPress.Although WordPress is one of the simplest content management systems, you’ll still need some basic knowledge of it in order to work properly.',
    },
    // {
    //     question: 'What is NCX Trade? How to start trading with up to 200x Leverage?',
    //     answer: 
    //     <div>
    //         <p>Derivatives Trading is available across 500 markets including Crypto Derivatives,  Equities (including US, EU and Asia Stock Markets), ETF’s, Forex, Indices, Metals, Oil and Gas with up to 200x Leverage.</p>
    //         <p>Simply Sign Up, complete KYC and start trading in minutes. You can top up your Spot wallet on NCX with crypto and covert to USD on the platform then use the available USD for trading by simply moving the necessary USD to and from your Trading Wallet. NCX Trade is a separate APP available on iOS and Android which is linked to your main NCX Account. For advanced security and in compliance with risk management the trading wallets are kept separate from spot wallets on the platform.</p>
    //     </div>,
    // },
    // {
    //     question: 'How can I earn NCX Tokens?',
    //     answer: 
    //     <div>
    //         <p>NCX is on target to reach 1,000,000 users by the end of 2023, to achieve our goal we’ve introduced a number of initiatives to grow a strong community and ecosystem through NCX Rewards Program:</p>
    //         <ul className='faq_li'>
    //             <li>Newly registered users will receive 10,000 NCX Tokens airdrop as a sign-up bonus</li>
    //             <li>Earn 2,500 NCXT with each new referral with NCX Referral Program, the referred user will receive the 10,000 NCXT SignUp Bonus Airdrop</li>
    //             <li>Earn rewards in NCX Tokens by completing tasks and reaching trading volumes, receive cash back on trading fees through NCX Rewards Programme</li>
    //             <li>Stake NCXT on NCX DEX and early daily interest</li>
    //             <li>Farm Yield and earn NCXT on NCX DEX Yield Farms and Liquidity Pools</li>
    //         </ul>
    //     </div>,
    // },
]


export default Accordian;