import React, { useState } from 'react'

import bgDesktop from './images/bg-main-desktop.png'
import bgMobile from './images/bg-main-mobile.png'
import bgCardFront from './images/bg-card-front.png'
import bgCardBack from './images/bg-card-back.png'
import cardLogo from './images/card-logo.svg'

import './App.css'
import FormInput from './components/FormInput'


const App = () => {
    const [isToggled, setIsToggled] = useState(true);

    const [values, setValues] = useState({
        CardholderName: "",
        CardNumber: "",
        ExpDateMM: "",
        ExpDateYY: "",
        cvc: "",
    });

    const inputs = [
        {
            id: 1,
            name: 'CardholderName',
            type: 'text',
            placeholder: 'e.g. Jane Appleseed',
            errorMessage: "Can't be blank",
            label: 'CARDHOLDER NAME',
            pattern: "^[0-9]+[ ][a-zA-Z0-9]{3,16}+",
            required: true,
        },
        {
            id: 2,
            name: 'CardNumber',
            type: 'text',
            placeholder: 'e.g. 1234 5678 9123 0000',
            errorMessage: "Wrong format, numbers only",
            label: 'CARD NUMBER',
            pattern: "[0-9]*[ ]*[0-9]*[ ]*[0-9]*[ ]*[0-9]*[ ]*",
            required: true,
        },
        {
            id: 3,
            name: 'ExpDateMM',
            type: 'text',
            placeholder: 'MM',
            errorMessage: "Can't be blank and insert only 2 digits",
            label: 'EXP. DATE (MM)',
            pattern: "^[0-9]{2}$",
            required: true,
        },
        {
            id: 4,
            name: 'ExpDateYY',
            type: 'text',
            placeholder: 'YY',
            errorMessage: "Can't be blank and insert only 2 digits",
            label: 'EXP. DATE (YY)',
            pattern: "^[0-9]{2}$",
            required: true,
        },
        {
            id: 5,
            name: 'cvc',
            type: 'text',
            placeholder: 'e.g. 123',
            errorMessage: "Can't be blank and insert only 3 digits",
            label: 'CVC',
            pattern: "^[0-9]{3}$",
            required: true,
        }
    ]


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    console.log(values)

    return (
        <div>


            <div className="container">
                <img src={bgDesktop} alt="" className="bg-img" />
                <img src={bgMobile} alt="" className="bg-img-xs" />
                <section className="card-display">
                    <div className="card-front">
                        <img src={bgCardFront} alt="" className="card-front-img" />
                        <img src={cardLogo} alt="" className="card-logo" />

                        <p className="card-number-display">{values.CardNumber}</p>
                        <p className="cardholder-display">{values.CardholderName}</p>
                        <p className="expiry-month-display">{values.ExpDateMM}</p>
                        <p className="expiry-year-display">/{values.ExpDateYY}</p>
                        <p className="cvc-display">{values.cvc}</p>

                        <form onSubmit={handleSubmit}>
                            {inputs.map((input) => (
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    value={values[input.name]}
                                    onChange={onChange} />
                            ))}

                            <button>Confirm</button>

                        </form>

                    </div>

                    <div className="card-back">
                        <img src={bgCardBack} alt="" className="card-back-img" />
                    </div>
                </section>
            </div>
            {/* - Mobile: 375px
            - Desktop: 1440px
            
            - Linear gradient (active input border): hsl(249, 99%, 64%) to hsl(278, 94%, 30%)
            - Red (input errors): hsl(0, 100%, 66%)
        
            - White: hsl(0, 0%, 100%)
            - Light grayish violet: hsl(270, 3%, 87%)
            - Dark grayish violet: hsl(279, 6%, 55%)
            - Very dark violet: hsl(278, 68%, 11%)

            - Font size: 18px

            - Family: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
            - Weights: 500 */}


            {/* Cardholder Name
            e.g. Jane Appleseed

            Card Number
            e.g. 1234 5678 9123 0000

            Exp. Date (MM/YY)
            MM
            YY

            CVC
            e.g. 123

            Confirm */}

            {/* <!-- Completed state start --> */}

            {/* Thank you!
            We've added your card details
            Continue */}

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://github.com/Sandrex233">Sandrex233</a>.
            </div>
        </div>
    )
}

export default App