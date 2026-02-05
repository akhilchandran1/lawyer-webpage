import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "outline";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: "a";
  href: string;
  variant?: Variant;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  as: "button";
  variant?: Variant;
};

type Props = AnchorProps | ButtonProps;

const styles: Record<Variant, string> = {
  primary:
    "bg-amber-500 text-slate-900 hover:bg-amber-400 focus-visible:ring-amber-500",
  secondary:
    "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900",
  outline:
    "border border-slate-300 text-slate-900 hover:border-slate-500 focus-visible:ring-slate-400",
};

export default function Button(props: Props) {
  const { variant = "primary" } = props;
  const className = clsx(
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2",
    styles[variant],
    props.className
  );

  if (props.as === "a") {
    const { as, variant, className: _className, ...rest } = props;
    return (
      <a {...rest} className={className}>
        {props.children}
      </a>
    );
  }

  const { as, variant: _variant, className: _className, ...rest } = props;
  return (
    <button {...rest} className={className}>
      {props.children}
    </button>
  );
}
