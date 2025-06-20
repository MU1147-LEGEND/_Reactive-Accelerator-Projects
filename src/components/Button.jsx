import { motion } from "motion/react";

const Button = () => {
    return (
        <div>
            <motion.button
                className="bg-black text-xl p-1 border text-white rounded-sm"
                transition={{ type: "spring", bounce: 0.7, duration: 0.4 }}
            >
                Registration
            </motion.button>
        </div>
    );
};
export default Button;
