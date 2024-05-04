"use client";

import { forwardRef, useId } from "react";
import { Control, FieldValues } from "react-hook-form";
import PhoneInput from "react-phone-number-input/react-hook-form-input";

interface PhoneInputProps extends FieldValues {
  name: string;
  label: string;
  error?: string;
  control: Control;
}

import styles from "./input.module.scss";

export const InputPhone = forwardRef(
  ({ error, label, name, control, placeholder }: PhoneInputProps, ref) => {
    const inputId = useId();

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <label htmlFor={inputId}>{label}</label>
          {!!error && <span className={styles.error}>{error}</span>}
        </header>
        <PhoneInput
          id={inputId}
          name={name}
          ref={ref}
          placeholder={placeholder}
          aria-invalid={!!error || undefined}
          control={control}
        />
      </div>
    );
  }
);

InputPhone.displayName = "InputPhone";
