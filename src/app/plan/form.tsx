"use client";

import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useAppStore } from "@/store";
import { getPrice } from "@/helpers/getPrice";
import { plans } from "@/assets/data";

import styles from "./form.module.scss";

const schema = z.object({
  id: z.string(),
  type: z.string(),
});

export type PlanValues = z.infer<typeof schema>;

export const PlanForm = () => {
  const router = useRouter();
  const { info, plan, updatePlan } = useAppStore((state) => ({
    info: state.info,
    plan: state.plan,
    updatePlan: state.updatePlan,
  }));

  useEffect(() => {
    if (!info) redirect("/");
  }, [info]);

  const defaultValues = {
    id: plan.id,
    type: plan.type,
  };

  const { handleSubmit, register, setValue, getValues, watch } =
    useForm<PlanValues>({
      resolver: zodResolver(schema),
      defaultValues,
    });

  const selectedType = watch("type");

  const onSubmit = (data: PlanValues) => {
    updatePlan(data);
    router.push("/addons");
  };

  return (
    <form id="form-1" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.plans}>
        {plans.map((plan, id) => (
          <label
            htmlFor={plan.name}
            className={styles.plan}
            data-select-box
            key={id}
          >
            {plan.icon}
            <div data-tblock>
              <h2>{plan.name}</h2>
              <span>{getPrice(selectedType, plan.price)}</span>
              <small aria-hidden={selectedType === "0" || undefined}>
                2 months free
              </small>
            </div>
            <input
              type="radio"
              defaultChecked={String(id) === defaultValues.id}
              id={plan.name}
              value={id}
              {...register("id", {
                onChange: (e) => {
                  updatePlan({ id: e.target.value });
                },
              })}
            />
          </label>
        ))}
      </fieldset>
      <div className={styles.typeContainer}>
        <fieldset className={styles.typeSelector}>
          <label htmlFor="monthly">
            Monthly
            <input
              type="radio"
              value="0"
              id="monthly"
              defaultChecked={defaultValues.type === "0"}
              {...register("type", {
                onChange: () => {
                  updatePlan({ type: getValues("type") });
                },
              })}
            />
          </label>
          <div
            className={styles.indicator}
            onClick={() => {
              const newType = selectedType === "0" ? "1" : "0";
              setValue("type", newType);
              updatePlan({ type: newType });
            }}
          />
          <label htmlFor="yearly">
            Yearly
            <input
              type="radio"
              value="1"
              id="yearly"
              defaultChecked={defaultValues.type === "1"}
              {...register("type", {
                onChange: () => {
                  updatePlan({ type: getValues("type") });
                },
              })}
            />
          </label>
        </fieldset>
      </div>
    </form>
  );
};
