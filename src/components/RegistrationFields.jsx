import React, {useState} from 'react';
import "./ RegistrationFields.css"
import '../App.css';

function RegistrationFields(props) {
    const [inputData, setInputData] = useState({
        fullName: '',
        phone: '',
        mail: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value

        setInputData({
            ...inputData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
    }

    return (
        <div className="register-block">
            <form onSubmit={handleSubmit}>
                <div className="block-input">
                    <div className="block-input-items">
                        <span>&#128101;</span>
                        <input
                            type="text"
                            name="fullName"
                            className="input"
                            placeholder="ФИО"
                            id="name"
                            value={inputData.fullName}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="block-input-items">
                        <span>&#9742;</span>
                        <input
                            type="text"
                            name='phone'
                            className="input"
                            placeholder="НОМЕР"
                            id="number"
                            value={inputData.phone}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="block-input-items">
                        <span>&#128386;</span>
                        <input
                            type="text"
                            name='mail'
                            className="input"
                            placeholder="ПОЧТА"
                            id='mail'
                            value={inputData.mail}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="block-input-items">
                        <button type="submit">Отправить</button>
                    </div>
                </div>
            </form>
            {isSubmitted && (
                <div className="block-result">
                    <p>ФИО:{inputData.fullName}</p>
                    <p>НОМЕР ТЕЛЕФОНА:{inputData.phone}</p>
                    <p>ПОЧТА:{inputData.mail}</p>
                </div>
            )}
        </div>
    )
}

export default RegistrationFields;
