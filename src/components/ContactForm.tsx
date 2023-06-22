import { useForm, ValidationError } from "@formspree/react";
import { IconArrowNarrowLeft, IconCheck, IconCircleDotted } from "@tabler/icons-react";

import Button from "./Button";
import Overlay from "./Overlay";

export default function ContactForm() {
  const [state, handleSubmit, reset] = useForm(`${process.env.NEXT_PUBLIC_FORM}`);

  return (
    <>
      <div className={"relative"}>
        {(state.submitting || state.succeeded) && (
          <Overlay>
            {state.submitting && (
              <>
                <IconCircleDotted className={"animate-spin"} size={"32px"} stroke={4} />
                <p role={"alert"}>Sending...</p>
              </>
            )}
            {state.succeeded && (
              <>
                <IconCheck className={"text-green-500"} size={"32px"} stroke={4} />
                <p role={"alert"}>Message received</p>
                <Button type={"button"} onClick={reset}>
                  <IconArrowNarrowLeft className={"mr-2"} />
                  Back
                </Button>
              </>
            )}
          </Overlay>
        )}
        <form onSubmit={handleSubmit}>
          <div className={"space-y-4"}>
            <div>
              <label className={"block font-medium text-sm"} htmlFor={"name"}>
                Name
              </label>
              <input
                autoComplete={"name"}
                className={
                  "block w-full rounded border bg-white p-3 text-black focus:border-blue-500 focus:ring-blue-500"
                }
                id={"name"}
                name={"name"}
                type={"text"}
                required
              />
              <ValidationError
                className={"text-red-500 text-sm"}
                errors={state.errors}
                field={"name"}
                prefix={"Name"}
              />
            </div>
            <div>
              <label className={"block font-medium text-sm"} htmlFor={"email"}>
                Email
              </label>
              <input
                autoComplete={"email"}
                className={
                  "block w-full rounded border bg-white p-3 text-black focus:border-blue-500 focus:ring-blue-500"
                }
                id={"email"}
                name={"email"}
                type={"email"}
                required
              />
              <ValidationError
                className={"text-red-500 text-sm"}
                errors={state.errors}
                field={"email"}
                prefix={"Email"}
              />
            </div>
            <div>
              <label className={"block font-medium text-sm"} htmlFor={"message"}>
                Message
              </label>
              <textarea
                className={
                  "block w-full rounded border bg-white p-3 text-black focus:border-blue-500 focus:ring-blue-500"
                }
                id={"message"}
                name={"message"}
                required
              />
              <ValidationError
                className={"text-red-500 text-sm"}
                errors={state.errors}
                field={"message"}
                prefix={"Message"}
              />
            </div>
            <ValidationError className={"text-red-500 text-sm"} errors={state.errors} />
            <Button disabled={state.submitting} type={"submit"}>
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
