"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import { z } from "zod";

import { useAppStore } from "@/store";
import { InputPhone } from "@/app/input-phone";
import { Input } from "@/app/input";

import styles from "./page.module.scss";

const schema = z.object({
  name: z.string().min(1, "This field is required"),
  email: z
    .string()
    .min(1, "This field is required")
    .email("Invalid email address"),
  phone: z
    .string({ invalid_type_error: "This field is required" })
    .min(1, "This field is required")
    .refine(isPossiblePhoneNumber, "Invalid phone number"),
});

export type InfoValues = z.infer<typeof schema>;

export default function InfoPage() {
  const router = useRouter();
  const { info, updateInfo } = useAppStore((state) => ({
    info: state.info,
    updateInfo: state.updateInfo,
  }));

  const defaultValues = {
    name: info?.name,
    email: info?.email,
    phone: info?.phone,
  };

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<InfoValues>({ resolver: zodResolver(schema), defaultValues });

  const onSubmit = (data: InfoValues) => {
    updateInfo(data);
    router.push("/plan");
  };

  return (
    <form
      id="form-0"
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Input
        name="name"
        label="Name"
        autoComplete="name"
        placeholder="e.g. Stephen King"
        register={register}
        error={errors.name?.message}
      />
      <Input
        name="email"
        type="email"
        autoComplete="email"
        label="Email address"
        placeholder="e.g. stephenking@lorem.com"
        register={register}
        error={errors.email?.message}
      />
      <InputPhone
        name="phone"
        label="Phone number"
        placeholder="e.g. +1 234 567890"
        error={errors.phone?.message}
        control={control}
      />
    </form>
  );
}
