import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const contact = () => {
  const [senderName, setSenderName] = useState(null);
  const [senderPhone, setSenderPhone] = useState(null);
  const [senderEmail, setSenderEmail] = useState(null);
  const [senderSubject, setSenderSubject] = useState(null);
  const [senderMessage, setSenderMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      sender_name: senderName,
      sender_phone: senderPhone,
      sender_email: senderEmail,
      subject: senderSubject,
      message: senderMessage,
    };

    const url = "http://127.0.0.1:8000/api/send/";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": "{{csrf_token}}",
      },
      body: JSON.stringify(data),
    };

    await fetch(url, options);
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto ox-2 oy-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Turan Can Pamuk</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for full-time positions. Contact me and let's
                  talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center py-4">
                  <Link
                    href="https://instagram.com/turancan.pamuk/"
                    target="_blank"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 mr-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaInstagram />
                    </div>
                  </Link>
                  <Link href="/#contact">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <AiOutlineMail href="/" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      maxLength={50}
                      onChange={(e) => {
                        setSenderName(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      maxLength={30}
                      onChange={(e) => {
                        setSenderPhone(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    onChange={(e) => {
                      setSenderEmail(e.target.value);
                    }}
                    required
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    maxLength={100}
                    onChange={(e) => {
                      setSenderSubject(e.target.value);
                    }}
                    required
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    maxLength={1000}
                    onChange={(e) => {
                      setSenderMessage(e.target.value);
                    }}
                    required
                  ></textarea>
                </div>

                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
