import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from '@sweetalert/with-react';

export default function Contact() {
    document.title = 'Francis Yang - Contact';

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        swal({
            title: 'Your message has been received!',
            text: "I'll get back to you as soon as possible.",
            buttons: {
                cancel: 'Close',
            },
        });

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                (result) => {
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            <div className='section-div'></div>
        </>
    );
}
