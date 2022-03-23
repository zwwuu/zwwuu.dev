import { faArrowRight, faEnvelope, faSpinner, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const [isSending, setIsSending] = useState(false);
  const [submitState, setSubmitState] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  return (
    <form
      name="contact"
      method="POST"
      className="space-y-4"
      data-netlify={"true"}
      netlify-honeypot="honeypot"
      data-netlify-recaptcha="true"
      onSubmit={handleSubmit((data) => {
        setIsSending(true);
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "contact",
            ...data,
          }),
        })
          .then((response) => {
            setIsSending(false);
            if (!response.ok) {
              setSubmitState({ success: false, message: `Error ${response.status}` });
            } else {
              setSubmitState({ success: true, message: "" });
            }
          })
          .catch((error) => {
            setIsSending(false);
            setSubmitState({ success: false, message: error });
          });
      })}
    >
      <label className="block">
        Name
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon icon={faUser} fixedWidth className={"absolute h-5 w-5 text-silver-800"} />
          </div>
          <input
            type="text"
            id="name"
            autoComplete="name"
            placeholder="Your name..."
            disabled={isSending}
            aria-required="true"
            aria-errormessage={errors.name ? "name-error" : undefined}
            {...register("name", { required: true })}
            className={`mt-2 block w-full rounded-sm border border-black bg-white pl-10 text-black
                  placeholder-silver transition-colors focus:outline-none 
                                  ${
                                    errors.name
                                      ? "border-red text-red focus:border-red focus:ring-red"
                                      : "focus:border-secondary focus:ring-secondary"
                                  }
                  disabled:cursor-not-allowed disabled:bg-silver-200 disabled:text-silver-600`}
          />
        </div>
        {errors.name && (
          <p role="alert" id="name-error" className="mt-1 text-red-200">
            Please enter your name
          </p>
        )}
      </label>
      <label className="block">
        Email
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon icon={faEnvelope} fixedWidth className={"absolute h-5 w-5 text-silver-800"} />
          </div>
          <input
            type="email"
            id="email"
            autoComplete="email"
            placeholder="Your email..."
            aria-required="true"
            disabled={isSending}
            aria-errormessage={errors.email ? "email-error" : undefined}
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            className={`mt-2 block w-full rounded-sm border border-black bg-white pl-10 text-black
                  placeholder-silver transition-colors focus:outline-none 
                                  ${
                                    errors.email
                                      ? "border-red text-red focus:border-red focus:ring-red"
                                      : "focus:border-secondary focus:ring-secondary"
                                  }
                  disabled:cursor-not-allowed disabled:bg-silver-200 disabled:text-silver-600`}
          />
        </div>
        {errors.email && (
          <p role="alert" id="email-error" className="mt-1 text-red-200">
            Please enter a valid email
          </p>
        )}
      </label>
      <label className="block">
        Message
        <textarea
          id="message"
          placeholder="Your message..."
          disabled={isSending}
          aria-required="true"
          aria-errormessage={errors.message ? "message-error" : undefined}
          {...register("message", { required: true })}
          className={`mt-2 block w-full rounded-sm border border-black bg-white text-black placeholder-silver transition-colors focus:outline-none 
                                  ${
                                    errors.message
                                      ? "border-red text-red focus:border-red focus:ring-red"
                                      : "focus:border-secondary focus:ring-secondary"
                                  }
                  disabled:cursor-not-allowed disabled:bg-silver-200 disabled:text-silver-600`}
        />
        {errors.message && (
          <p role="alert" id="message-error" className="mt-1 text-red-200">
            Please enter a message
          </p>
        )}
      </label>
      <label className={"hidden"}>
        Don’t fill this out if you’re human: <input {...register("honeypot")} hidden name="honeypot" />
      </label>
      <div data-netlify-recaptcha="true" />
      {submitState?.success ? (
        <p role="alert" className="text-green">
          Form submitted 👍
        </p>
      ) : (
        <p role="alert" className="text-red-200">
          {submitState?.message}
        </p>
      )}
      <button
        disabled={isSending}
        type="submit"
        className="group relative block w-full bg-transparent py-4 px-6 uppercase text-white outline-none
  before:absolute before:top-1 before:left-1 before:block before:h-1/3 before:w-1/3 before:border-2 before:border-b-0 before:border-r-0 before:transition-all before:duration-500
  after:absolute after:bottom-1 after:right-1 after:block after:h-1/3 after:w-1/3 after:border-2 after:border-t-0 after:border-l-0 after:transition-all after:duration-500
  hover:before:h-full hover:before:w-full hover:after:h-full hover:after:w-full
  focus:before:h-full focus:before:w-full focus:after:h-full focus:after:w-full
  disabled:cursor-not-allowed disabled:before:h-full disabled:before:w-full disabled:after:h-full disabled:after:w-full"
      >
        {isSending ? (
          <FontAwesomeIcon icon={faSpinner} fixedWidth className={"animate-spin"} />
        ) : (
          <>
            Send
            <FontAwesomeIcon
              icon={faArrowRight}
              fixedWidth
              className={"ml-2 transition-transform duration-500 group-hover:translate-x-4 group-focus:translate-x-4"}
            />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
