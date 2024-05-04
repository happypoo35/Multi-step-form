import { IconAdvanced } from "./icon-advanced";
import { IconArcade } from "./icon-arcade";
import { IconPro } from "./icon-pro";

export const steps = [
  {
    slug: "/",
    title: "Personal info",
    menuTitle: "your info",
    desc: "Please provide your name, email address, and phone number.",
  },
  {
    slug: "/plan",
    title: "Select your plan",
    menuTitle: "select plan",
    desc: "You have the option of monthly or yearly billing.",
  },
  {
    slug: "/addons",
    title: "Pick add-ons",
    menuTitle: "add-ons",
    desc: "Add-ons help enhance your gaming experience.",
  },
  {
    slug: "/summary",
    title: "Finishing up",
    menuTitle: "summary",
    desc: "Double-check everything looks OK before confirming.",
  },
];

export const plans = [
  {
    name: "Arcade",
    icon: <IconArcade />,
    price: 9,
  },
  {
    name: "Advanced",
    icon: <IconAdvanced />,
    price: 12,
  },
  {
    name: "Pro",
    icon: <IconPro />,
    price: 15,
  },
];

export const addons = [
  {
    name: "Online service",
    desc: "Access to multiplayer games",
    price: 1,
  },
  {
    name: "Large storage",
    desc: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    name: "Customizable profile",
    desc: "Custom theme on your profile",
    price: 2,
  },
];
