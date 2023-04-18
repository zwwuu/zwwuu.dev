import { FormspreeProvider } from "@formspree/react";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import { motion } from "framer-motion";

import ContactForm from "./ContactForm";

export default function ContactSection() {
  const animation = {
    scale: 1.05,
    opacity: 0.8,
  };

  return (
    <section className={"scroll-mt-16 py-8"} id={"contact"}>
      <motion.div
        className={"container mx-auto px-4"}
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className={"mb-6 font-bold uppercase text-3xl"}>Get in touch</h2>
        <div className={"flex flex-col gap-x-8 gap-y-4 md:flex-row"}>
          <div className={"basis-1/2"}>
            <FormspreeProvider project={process.env.NEXT_PUBLIC_FORMSPREE_PROJECT}>
              <ContactForm />
            </FormspreeProvider>
          </div>
          <div className={"basis-1/2"}>
            <div className={"space-y-4"}>
              <p>
                {
                  "Whether you have a question or just want to say hi, I'll try my best to get back to you! My inbox is always open."
                }
              </p>
              <div className={"flex flex-wrap gap-4"}>
                <motion.a
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                  rel={"noopener noreferrer"}
                  target={"_blank"}
                  title={"Email"}
                  whileFocus={animation}
                  whileHover={animation}
                >
                  <IconMail size={42} />
                </motion.a>
                <motion.a
                  href={process.env.NEXT_PUBLIC_GITHUB_URL}
                  rel={"noopener noreferrer"}
                  target={"_blank"}
                  title={"GitHub"}
                  whileFocus={animation}
                  whileHover={animation}
                >
                  <IconBrandGithub size={42} />
                </motion.a>
                <motion.a
                  href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                  rel={"noopener noreferrer"}
                  target={"_blank"}
                  title={"LinkedIn"}
                  whileFocus={animation}
                  whileHover={animation}
                >
                  <IconBrandLinkedin size={42} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
