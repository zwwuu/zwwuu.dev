import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ContactForm from "./contact-form";

const ContactPane = () => {
  return (
    <div
      id={"contact"}
      className="flex min-h-screen flex-col justify-around bg-tertiary bg-shiny bg-cover bg-fixed bg-center text-white"
    >
      <div className="mx-auto w-full max-w-screen-lg px-4 py-8">
        <h2 className="mb-6 text-3xl font-semibold">Get in touch</h2>
        <div className="align-center flex flex-col justify-between gap-16 md:flex-row">
          <div className={"flex-auto"}>
            <ContactForm />
          </div>
          <div className="flex-auto">
            <ul className="flex flex-wrap gap-8">
              <li>
                <a
                  className="transition-opacity hover:opacity-80 focus:opacity-80"
                  href="https://github.com/zwwuu"
                  title="GitHub"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon icon={faGithub} fixedWidth className="text-xl" /> GitHub
                </a>
              </li>
              <li>
                <a
                  className="transition-opacity hover:opacity-80 focus:opacity-80"
                  href="mailto:zwwuu@protonmail.com"
                  title="Email"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon icon={faEnvelope} fixedWidth className="text-xl" /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPane;
