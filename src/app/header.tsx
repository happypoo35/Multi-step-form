"use client";

import { usePathname, useRouter } from "next/navigation";

import { useAppStore } from "@/store";
import { steps } from "@/assets/data";

import styles from "./header.module.scss";

export const Header = () => {
  const router = useRouter();
  const path = usePathname();
  const info = useAppStore((state) => state.info);

  return (
    <header className={styles.header}>
      {steps.map((step, id) => (
        <div
          className={styles.item}
          key={id}
          data-active={
            path === step.slug || (path === "/success" && id === 3) || undefined
          }
          aria-disabled={(id !== 0 && !info) || undefined}
          title={id !== 0 && !info ? "Personal info required" : undefined}
          onClick={() => info && router.push(step.slug)}
        >
          <small>step </small>
          <span>{step.menuTitle}</span>
        </div>
      ))}
    </header>
  );
};
