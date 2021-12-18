import "./contacts.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";
import { useContext } from "react";


const Contacts = () => {
    const formref = useRef();
    const [done, setDone] = useState(false);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_yg2uu9h', 'template_bdc6p6o', formref.current, 'user_nkyzXo3VCxVeHgX5Z1z7e')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Get in Touch...</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />+91 8417 9418 66
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" /> Tusharydv@hotmail.com
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Feel free to write a message.. </b> 
                    </p>
                    <form ref={formref} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows="3" type="text" placeholder="Message" name="message" />
                        <button>Submit</button>
                        <div className="done">
                            {done && "Thank you..."}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};


export default Contacts
