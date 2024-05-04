import { Metadata } from "next";
import { Summary } from "./summary";

export const metadata: Metadata = {
  title: "Finishing up",
};

export default function SummaryPage() {
  return <Summary />;
}
