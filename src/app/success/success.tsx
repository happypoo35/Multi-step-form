"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

import { IconThankYou } from "@/assets/icon-thank-you";
import { useAppStore } from "@/store";

import styles from "./success.module.scss";

export const Success = () => {
  const isConfirmed = useAppStore((state) => state.isConfirmed);

  useEffect(() => {
    if (!isConfirmed) redirect("/");
  }, [isConfirmed]);

  return (
    <section className={styles.section}>
      <IconThankYou />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
};
