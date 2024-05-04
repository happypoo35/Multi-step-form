import { Metadata } from "next";
import { Success } from "./success";

export const metadata: Metadata = {
  title: "Thank you!",
};

export default function SuccessPage() {
  return <Success />;
}
