"use client";

import { FormspreeProvider } from "@formspree/react";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import { motion, type Transition } from "motion/react";

import { ContactForm, SocialButton } from "@/components";

const CONTACT_SECTION_TRANSITION: Transition = {
  duration: 0.6,
  ease: "easeOut",
};

export default function ContactSection() {
  return (
    <section className={"scroll-mt-16 py-16"} id={"contact"}>
      <motion.div
        className={"container mx-auto px-4"}
        initial={{ opacity: 0, y: 50 }}
        transition={CONTACT_SECTION_TRANSITION}
        viewport={{ once: true, margin: "-100px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className={"mb-12 fl-text-4xl/6xl font-bold uppercase"}>Get in touch</h2>
        <div className={"flex flex-col gap-x-12 gap-y-12 md:flex-row"}>
          <div className={"basis-1/2"}>
            <FormspreeProvider project={process.env.NEXT_PUBLIC_FORMSPREE_PROJECT}>
              <ContactForm />
            </FormspreeProvider>
          </div>
          <div className={"basis-1/2"}>
            <div className={"space-y-8"}>
              <p>
                {
                  "I'm always open to discussing new projects, creative ideas, or opportunities to collaborate. Feel free to reach out—I'd love to hear from you!"
                }
              </p>
              <div className={"flex flex-wrap gap-4"}>
                <SocialButton
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                  icon={<IconMail size={42} />}
                  title={"Email"}
                />
                <SocialButton
                  href={process.env.NEXT_PUBLIC_GITHUB_URL || ""}
                  icon={<IconBrandGithub size={42} />}
                  title={"GitHub"}
                />
                <SocialButton
                  href={process.env.NEXT_PUBLIC_LINKEDIN_URL || ""}
                  icon={<IconBrandLinkedin size={42} />}
                  title={"LinkedIn"}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
