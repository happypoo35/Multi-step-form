"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

import { plans, addons as addonsData } from "@/assets/data";
import { useAppStore } from "@/store";
import { getPrice } from "@/helpers/getPrice";

import styles from "./summary.module.scss";

export const Summary = () => {
  const { info, plan, addons } = useAppStore((state) => ({
    info: state.info,
    plan: state.plan,
    addons: state.addons,
    isConfirmed: state.isConfirmed,
  }));

  useEffect(() => {
    if (!info) redirect("/");
  }, [info]);

  const selectedPlan = plans[Number(plan.id)];
  const totalPrice =
    selectedPlan.price +
    addons.reduce((a, v) => (a += addonsData[Number(v)].price), 0);

  return (
    <section className={styles.section}>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div data-tblock>
            <h2>
              {selectedPlan.name} ({plan.type === "0" ? "Monthly" : "Yearly"})
            </h2>
            <Link href="/plan">Change</Link>
          </div>
          <b>{getPrice(plan.type, selectedPlan.price)}</b>
        </div>
        {addons.length > 0 && (
          <div className={styles.tableBody}>
            {addons.map((addon) => (
              <div key={addon} className={styles.tableItem}>
                {addonsData[Number(addon)].name}
                <span>
                  +{getPrice(plan.type, addonsData[Number(addon)].price)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.total}>
        Total (per {plan.type === "0" ? "month" : "year"})
        <b>{getPrice(plan.type, totalPrice)}</b>
      </div>
    </section>
  );
};
