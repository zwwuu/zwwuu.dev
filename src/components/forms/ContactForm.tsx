"use client";

import { useForm, ValidationError } from "@formspree/react";
import { IconCheck, IconCircleDotted } from "@tabler/icons-react";
import { motion, type Transition } from "motion/react";

import { Button, FormField, Overlay } from "@/components";

const CONTACT_SPINNER_TRANSITION: Transition = {
  duration: 1,
  repeat: Infinity,
  ease: "linear",
};

export default function ContactForm() {
  const [state, handleSubmit, reset] = useForm(`${process.env.NEXT_PUBLIC_FORM}`);

  return (
    <div className={"relative"}>
      {(state.submitting || state.succeeded) && (
        <Overlay>
          {state.submitting && (
            <>
              <motion.div animate={{ rotate: 360 }} transition={CONTACT_SPINNER_TRANSITION}>
                <IconCircleDotted size={"32px"} stroke={4} />
              </motion.div>
              <p role={"alert"}>Sending...</p>
            </>
          )}
          {state.succeeded && (
            <>
              <IconCheck className={"text-green-500"} size={"32px"} stroke={4} />
              <p role={"alert"}>Message received!</p>
              <Button type={"button"} onClick={reset}>
                Okay
              </Button>
            </>
          )}
        </Overlay>
      )}
      <form onSubmit={handleSubmit}>
        <div className={"space-y-4"}>
          <FormField
            errors={state.errors}
            id={"name"}
            label={"Name"}
            name={"name"}
            placeholder={"Your name"}
            type={"text"}
          />
          <FormField
            errors={state.errors}
            id={"email"}
            label={"Email"}
            name={"email"}
            placeholder={"your.email@example.com"}
            type={"email"}
          />
          <FormField
            errors={state.errors}
            id={"message"}
            label={"Message"}
            name={"message"}
            placeholder={"Tell me about your project or just say hello..."}
            type={"textarea"}
          />
          <ValidationError className={"fl-text-sm/base text-red-500"} errors={state.errors} />
          <Button disabled={state.submitting} type={"submit"}>
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}
