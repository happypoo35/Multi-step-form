"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/app/button";
import { useAppStore } from "@/store";
import { steps } from "@/assets/data";

import styles from "./footer.module.scss";

export const Footer = () => {
  const path = usePathname();
  const router = useRouter();
  const stepId = steps.findIndex((step) => step.slug === path);
  const confirm = useAppStore((state) => state.confirm);

  if (stepId === -1) return null;

  const handleConfirm = () => {
    router.push("/success");
    confirm();
  };

  return (
    <footer className={styles.footer}>
      {stepId > 0 && (
        <Link className={styles.backBtn} href={steps[stepId - 1].slug}>
          Go Back
        </Link>
      )}
      {stepId < 3 ? (
        <Button type="submit" form={`form-${stepId}`}>
          Next Step
        </Button>
      ) : (
        <Button type="button" variant="cta" onClick={handleConfirm}>
          Confirm
        </Button>
      )}
    </footer>
  );
};
