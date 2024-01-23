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
            <div className='section-div'>
                <div className='fade-down delay-1 animated w-100 h-auto'>
                    <h1 className='stylized gold large-text mb-4'>
                        CONTACT ME
                    </h1>
                    <form
                        className='h-auto m-auto p-4 contact-wrapper'
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <div className='form-group mb-3'>
                            <label className='mb-3'>Name</label>
                            <input
                                className='form-control'
                                type='text'
                                name='user_name'
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label className='mb-3'>Email Address</label>
                            <input
                                className='form-control'
                                type='email'
                                name='user_email'
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label className='mb-3'>Message</label>
                            <textarea
                                className='form-control'
                                rows='5'
                                name='message'
                            />
                        </div>
                        <button type='submit' className='btn gold stylized'>
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
