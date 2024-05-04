"use client";

import { useId } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

import styles from "./input.module.scss";

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  error?: string;
  register: UseFormRegister<T>;
};

export const Input = <T extends FieldValues>({
  name,
  label,
  error,
  register,
  ...props
}: InputProps<T> & JSX.IntrinsicElements["input"]) => {
  const inputId = useId();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <label htmlFor={inputId}>{label}</label>
        {!!error && <span className={styles.error}>{error}</span>}
      </header>
      <input
        id={inputId}
        aria-invalid={!!error || undefined}
        {...register(name)}
        {...props}
      />
    </div>
  );
};
