"use client";

import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { firestore } from "firebaseConfig";
import { useEffect, useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState(null);

  const handleDataChange = (prop: string) => (event: any) => {
    setContactData({ ...contactData, [prop]: event.target.value });
  };

  const resetData = () => {
    setContactData({
      name: "",
      email: "",
      message: "",
    });
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    const data = {
      ...contactData,
      createdAt: serverTimestamp(),
    };

    try {
      const ref = collection(firestore, "contact");
      await addDoc(ref, data);
      setMessage({
        type: "success",
        text: "We have received your message and would like to thank you for writing to us. We will reply by email as soon as possible.",
      });
      resetData();
    } catch (err) {
      setMessage({
        type: "error",
        text: "Something went wrong! Please try again",
      });
      console.log(err);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
    }
  }, []);

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-6 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Send Us A Message
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our Experts are Ready for you
              </p>
              <form onSubmit={submitForm}>
                <div className="-mx-4 flex flex-wrap">
                  {message && (
                    <div
                      className={
                        message.type === "success"
                          ? `mx-4 mb-8 w-full border border-green-600 px-6 py-2 text-green-600`
                          : `mx-4 mb-8 w-full border border-red-600 px-6 py-2 text-red-600`
                      }
                    >
                      {message.text}
                    </div>
                  )}

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name <span className="ml-2 text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        value={contactData.name}
                        onChange={handleDataChange("name")}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email <span className="ml-2 text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        value={contactData.email}
                        onChange={handleDataChange("email")}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                        <span className="ml-2 text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        value={contactData.message}
                        onChange={handleDataChange("message")}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
        <div className="w-full lg:h-[250px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.9376662984904!2d90.44080476962093!3d23.756265326136372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b805e488d077%3A0x4c17fbe9ab475fcf!2s321%20Dakhin%20Banasree%20Project%20Road%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1703441487075!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            className="rounded-xl"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
