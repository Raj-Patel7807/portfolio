import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";
import { Images } from "../constants";

export const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        if (!formRef.current.checkValidity()) {
            formRef.current.reportValidity();
            return;
        }

        setLoading(true);
        setStatus("");

        await new Promise(r => setTimeout(r, 1000));

        emailjs
            .sendForm(
                "rajpatel7807",
                "template_q2dcbqy",
                formRef.current,
                "01p8t7vXJsDbRBx2l"
            )
            .then(() => {
                setStatus("success");
                formRef.current.reset();
            })
            .catch(() => {
                setStatus("error");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <div className="contact">
                <div className="contact-root">
                    <div className="contact-header">
                        <h1 data-aos="fade-down" data-aos-duration="1000">
                            Get In Touch
                        </h1>
                        <div className="underline"></div>
                    </div>

                    <div className="contact-container">
                        <div
                            className="contact-info"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
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
                                <span>Patan, Gujarat, India</span>
                            </div>
                        </div>

                        <form
                            ref={formRef}
                            className="contact-form"
                            onSubmit={sendEmail}
                            data-aos="fade-left"
                            data-aos-duration="1000"
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
