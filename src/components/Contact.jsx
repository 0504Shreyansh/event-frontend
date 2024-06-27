import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");

    const handleSendMessage = async (e) => {
        e.preventDefault();
        await axios
            .post(
                "https://event-backend-6wuo.onrender.com/api/v1/message/send",
                { name, email, subject, message },
                {
                    withCredentials: true,
                    header: { "Content-Type": "application/json" },
                }
            )
            .then((res) => {
                console.log("Subscribed successfully!");
                toast.success(res.data.message);
                setName("");
                setEmail("");
                setMessage("");
                setSubject("");
            })
            .catch((error) => {
                console.log("THis is an error -> " + error);
                toast.error(
                    error.response?.data?.message || "An error occurred"
                );
            });
    };

    return (
        <>
            <div className="contact container">
                <div className="banner">
                    <div className="item">
                        <h4>Address</h4>
                        <p>Anywhere, any city</p>
                    </div>
                    <div className="item">
                        <h4>Call Us</h4>
                        <p>Call Us: +918839030131</p>
                    </div>
                    <div className="item">
                        <h4>Mail Us</h4>
                        <p>jainshreyansh163@gmail.com</p>
                    </div>
                </div>
                <div className="banner">
                    <div className="item">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.808983023014!2d-1.2543668000000188!3d51.75481639999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2sin!4v1685102107982!5m2!1sen!2sin"
                            style={{
                                border: 0,
                                width: "100%",
                                height: "450px",
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="item">
                        <form onSubmit={handleSendMessage}>
                            <h2>CONTACT</h2>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <textarea
                                rows={10}
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
