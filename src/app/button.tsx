import styles from "./button.module.scss";

type Props = {
  variant?: "default" | "cta";
} & JSX.IntrinsicElements["button"];

export const Button = ({ children, variant = "default", ...props }: Props) => {
  return (
    <button className={styles.button} data-variant={variant} {...props}>
      {children}
    </button>
  );
};
