import React, { useState } from "react";
import './Contact.css'

export default function Contact() {
    const [contact, setContact] = useState([
        { id: 1, Name: "Location", para: "5/12 North Street Chennai", img: "https://img.freepik.com/premium-vector/location-label-line-icon-black-map-label-locator-icon-vector_399089-7017.jpg" },
        { id: 2, Name: "Phone No", para: "+91 9876543210", img: "https://t4.ftcdn.net/jpg/05/53/74/71/360_F_553747198_0G1isRPpD5ukMwKongDwUVj7icLsqje4.jpg" },
        { id: 3, Name: "Email Id", para: "delecious@gmail.com", img: "https://static.vecteezy.com/system/resources/thumbnails/022/647/958/small/email-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg" },
    ]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Thank you for your response - ${name}`);
    }

    return (
        <>
            <div className="contact-form">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <h1 className="contact-heading">CONTACT US</h1>
                        <p><input type="text" placeholder="Enter Your Name" className="text-box" value={name} onChange={(e) => setName(e.target.value)} required /></p>
                        <p><input type="email" placeholder="Enter Your Email" className="text-box" value={email} onChange={(e) => setEmail(e.target.value)} required /></p>
                        <p><textarea placeholder="Your Feedback" className="text-feed" value={feedback} onChange={(e) => setFeedback(e.target.value)} required /></p>
                        <button className="form-btn">Submit</button>
                    </form>
                </div>
                <div className="contact">
                    {
                        contact.map((Contact) => (
                            <div key={Contact.id}>
                                <img src={Contact.img} alt={Contact.Name} />
                                <h3 className="contact-para">{Contact.Name}</h3>
                                <p className="contact-para">{Contact.para}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
