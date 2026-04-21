import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";

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

        await new Promise((r) => setTimeout(r, 1000));

        emailjs
            .sendForm(
                "rajpatel7807",
                "template_q2dcbqy",
                formRef.current,
                "01p8t7vXJsDbRBx2l",
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
        <div className="contact-container" id="contact">
            <div
                className="section-title"
                data-aos="fade-down"
                data-aos-duration="1000"
            >
                <h1>
                    <span className="sec-num">08.</span> Get In Touch
                </h1>
                <div className="line"></div>
            </div>

            <div className="contact-wrapper">
                <div
                    className="contact-info"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <h2>Let's connect</h2>
                    <p>
                        I'm always open to discussing new projects, creative
                        ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="info-item">
                        <span className="icon">✉️</span>
                        <span>rajpatel7807@gmail.com</span>
                    </div>
                    <div className="info-item">
                        <span className="icon">📍</span>
                        <span>Patan, Gujarat, India</span>
                    </div>

                    <div className="contact-quick-actions">
                        <a href="mailto:rajpatel7807@gmail.com">Email Me</a>
                        <a
                            href="https://www.linkedin.com/in/raj-patel7807/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div
                    className="contact-form"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <form ref={formRef} onSubmit={sendEmail}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="from_name"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
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
                                rows="3"
                                placeholder="Your message here..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="send-btn"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                        {status === "success" && (
                            <p className="success">Message sent!!</p>
                        )}

                        {status === "error" && (
                            <p className="error">Something went wrong!!</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};
