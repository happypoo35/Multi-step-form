import { Metadata } from "next";
import { AddonsForm } from "./form";

export const metadata: Metadata = {
  title: "Pick add-ons",
};

export default function AddonsPage() {
  return <AddonsForm />;
}
