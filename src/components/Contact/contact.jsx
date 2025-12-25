import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";
import { Images } from "../constants";

export const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formRef.current.checkValidity()) {
            formRef.current.reportValidity();
            return;
        }

        setLoading(true);

        emailjs
            .sendForm(
                "rajpatel7807",
                "template_q2dcbqy",
                formRef.current,
                "01p8t7vXJsDbRBx2l"
            )
            .then(() => {
                setStatus("success");
                setLoading(false);
                formRef.current.reset();
            })
            .catch(() => {
                setStatus("error");
                setLoading(false);
            });
    };

    return (
        <>
            <div className="contact">
                <div className="contact-root">
                    <div className="contact-header">
                        <h1>Get In Touch</h1>
                        <div className="underline"></div>
                    </div>

                    <div className="contact-container">
                        <div className="contact-info">
                            <h3>Let's Talk</h3>
                            <p>
                                I'm open to new opportunities and
                                collaborations. Whether you have a question or
                                just want to say hi, feel free to drop a
                                message!
                            </p>
                            <div className="info-item">
                                <span className="icon">📧</span>
                                <span>rajpatel7807@gmail.com</span>
                            </div>
                            <div className="info-item">
                                <span className="icon">📍</span>
                                <span>Patan, Gujarat, India, 384220</span>
                            </div>
                        </div>

                        <form
                            ref={formRef}
                            className="contact-form"
                            onSubmit={sendEmail}
                        >
                            <div className="form-group">
                                <label>Your Name</label>
                                <input
                                    type="text"
                                    name="from_name"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Your Email</label>
                                <input
                                    type="email"
                                    name="from_email"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Project Collaboration"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Type your message here..."
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="send-btn"
                            >
                                {loading ? "Sending..." : "Send Message 🚀"}
                            </button>

                            {status === "success" && (
                                <p className="success-msg">
                                    ✅ Message sent successfully!
                                </p>
                            )}
                            {status === "error" && (
                                <p className="error-msg">
                                    ❌ Something went wrong. Try again.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
