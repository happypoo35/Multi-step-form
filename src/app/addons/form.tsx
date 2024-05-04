"use client";

import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { IconCheckmark } from "@/assets/icon-checkmark";
import { useAppStore } from "@/store";
import { getPrice } from "@/helpers/getPrice";
import { addons as addonsData } from "@/assets/data";

import styles from "./form.module.scss";

const schema = z.object({
  addons: z.array(z.string()),
});

type AddonsValues = z.infer<typeof schema>;

export const AddonsForm = () => {
  const router = useRouter();
  const { info, plan, addons, updateAddons } = useAppStore((state) => ({
    info: state.info,
    plan: state.plan,
    addons: state.addons,
    updateAddons: state.updateAddons,
  }));

  useEffect(() => {
    if (!info) redirect("/");
  }, [info]);

  const { handleSubmit, register, getValues } = useForm<AddonsValues>({
    resolver: zodResolver(schema),
    defaultValues: { addons },
  });

  const onSubmit = (data: AddonsValues) => {
    updateAddons(data.addons);
    router.replace("/summary");
  };

  return (
    <form id="form-2" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {addonsData.map((addon, id) => (
        <label
          className={styles.addon}
          data-select-box
          htmlFor={addon.name}
          key={id}
        >
          <div className={styles.checkbox}>
            <IconCheckmark />
          </div>
          <div data-tblock style={{ flex: "1" }}>
            <h2>{addon.name}</h2>
            <span>{addon.desc}</span>
          </div>
          <span className={styles.price}>
            +{getPrice(plan.type, addon.price)}
          </span>
          <input
            type="checkbox"
            value={id}
            id={addon.name}
            defaultChecked={addons.includes(String(id))}
            {...register("addons", {
              onChange: () => {
                updateAddons(getValues("addons"));
              },
            })}
          />
        </label>
      ))}
    </form>
  );
};
