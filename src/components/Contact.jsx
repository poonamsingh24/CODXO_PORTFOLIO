import React from "react";
import Container from "./Container";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/akkgvvla", userInfo);
      toast.success("Your message has been send");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Container>
      <div name="Contact">
        <h1 className="font-bold text-2xl py-2">Contact me</h1>
        <p>Please fill out the form below to contact me</p>
        <div className="flex justify-center items-center mx-auto">
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              // method="POST"
              className="w-[350px] bg-slate-200 my-5 py-5 px-8 rounded-lg"
            >
              <h2 className="font-bold text-xl py-2">Send Your message</h2>
              <div className="flex flex-col pb-2">
                <label> Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your fullname "
                  className="p-2 border outline-none mb-3 rounded-lg"
                  {...register("name", { required: true })}
                />
                {errors.name && <span>This field is required</span>}
                <label>Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your Email"
                  className="p-2 border outline-none  mb-3 rounded-lg"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
                <label>Message</label>
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  placeholder="message..."
                  className="rounded-lg  p-2 border outline-none  mb-3"
                  {...register("meassage", { required: true })}
                />
                {errors.meassage && <span>This field is required</span>}
              </div>
              <button
                type="submit"
                className="py-2 px-5 rounded-lg text-white bg-black hover:bg-gray-700 duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
