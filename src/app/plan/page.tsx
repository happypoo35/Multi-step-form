import { Metadata } from "next";
import { PlanForm } from "./form";

export const metadata: Metadata = {
  title: "Select your plan",
};

export default function PlanPage() {
  return <PlanForm />;
}
