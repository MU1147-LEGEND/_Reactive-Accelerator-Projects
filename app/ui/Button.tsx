"use client";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps {
    className: string;
    children?: ReactNode;
}

const Button = ({ className }: ButtonProps) => {
    const { pending } = useFormStatus();

    return (
        <button className={className} disabled={pending}>
            {pending ? "Loading..." : "Submit"}
        </button>
    );
};
export default Button;
