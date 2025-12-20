"use client";

import type { ComponentProps } from "react";
import { ValidationError } from "@formspree/react";

type FormFieldProps = {
  label: string;
  name: string;
  id: string;
  type?: "text" | "email" | "textarea";
  placeholder: string;
  errors: ComponentProps<typeof ValidationError>["errors"];
  required?: boolean;
};

export default function FormField({
  label,
  name,
  id,
  type = "text",
  placeholder,
  errors,
  required = true,
}: FormFieldProps) {
  const baseClass =
    "block w-full rounded-lg border border-white/20 bg-white/5 p-3 backdrop-blur-sm transition-all placeholder:text-white/40 focus:border-white focus:ring-white/30 focus:outline-none";

  return (
    <div>
      <label className={"mb-2 block font-medium"} htmlFor={id}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className={`${baseClass} min-h-30 resize-y`}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          autoComplete={name}
          className={baseClass}
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
          required={required}
        />
      )}
      <ValidationError className={"fl-text-sm/base text-red-500"} errors={errors} field={name} prefix={label} />
    </div>
  );
}
