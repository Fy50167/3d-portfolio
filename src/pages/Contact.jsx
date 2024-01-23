import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function Contact() {
    document.title = 'Francis Yang - Contact';

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Message received!',
            text: "I'll get back to you shortly.",
            icon: 'success',
            confirmButtonText: 'Confirm',
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
                <div className='fade-down delay-1 animated w-full h-full flex flex-col justify-center items-center'>
                    <h1 className='stylized gold text-xl mb-4'>CONTACT ME</h1>
                    <form
                        className='h-auto p-4 w-5/6 md:w-1/2 flex flex-col items-center'
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <div className='form-group w-full flex flex-col justify-evenly-items-center mb-3'>
                            <label className='mb-3'>Name</label>
                            <input
                                className='form-control'
                                type='text'
                                name='user_name'
                            />
                        </div>
                        <div className='form-group w-full flex flex-col justify-evenly-items-center mb-3'>
                            <label className='mb-3'>Email Address</label>
                            <input
                                className='form-control'
                                type='email'
                                name='user_email'
                            />
                        </div>
                        <div className='form-group w-full flex flex-col justify-evenly-items-center mb-3'>
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
