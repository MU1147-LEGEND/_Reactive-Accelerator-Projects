import { motion } from "motion/react";

const TextAnimate = () => {
    const message = "Hello, I'm a passionate Frontend Developer.";
    const wordArray = message.split("");

    return (
        <div className="text-2xl mt-5 bg-indigo-500">
            {wordArray.map((char, i) => (
                <motion.span
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: i*0.05 }}
                    className="inline-block mr-1"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </div>
    );
};
export default TextAnimate;
