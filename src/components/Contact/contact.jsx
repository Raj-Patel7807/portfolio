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
                    <div
                        className="title"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                    >
                        <h1>
                            <u>Contact</u> 💬
                        </h1>
                    </div>
                    <form
                        ref={formRef}
                        className="contact-form"
                        onSubmit={sendEmail}
                    >
                        <div
                            className="form-row"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Your Name"
                                required
                            />
                            <input
                                type="email"
                                name="from_email"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="5"
                            required
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        ></textarea>
                        <button
                            type="submit"
                            onClick={sendEmail}
                            disabled={loading}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            {loading ? "Sending..." : "Send Message"}
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
        </>
    );
};
