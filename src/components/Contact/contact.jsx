import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";
import { Images } from "../constants";

export const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "rajpatel7807",
                "template_q2dcbqy",
                formRef.current,
                "01p8t7vXJsDbRBx2l"
            )
            .then(
                () => {
                    setStatus("success");
                    formRef.current.reset();
                },
                () => {
                    setStatus("error");
                }
            );
    };

    return (
        <>
            <div className="contact">
                <div className="title">
                    <h1>
                        <u>Contact</u> 💬
                    </h1>
                </div>
                <form
                    ref={formRef}
                    className="contact-form"
                    onSubmit={sendEmail}
                >
                    <div className="form-row">
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
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="5"
                        required
                    ></textarea>
                    <button type="button" onClick={sendEmail}>
                        Send Message
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
        </>
    );
};
