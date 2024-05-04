"use client";

import { usePathname } from "next/navigation";
import { steps } from "@/assets/data";

import styles from "./title.module.scss";

export const Title = () => {
  const path = usePathname();
  const stepId = steps.findIndex((step) => step.slug === path);

  if (stepId === -1) return null;

  return (
    <header className={styles.header}>
      <h1>{steps[stepId].title}</h1>
      <p>{steps[stepId].desc}</p>
    </header>
  );
};
