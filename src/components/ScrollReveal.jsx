import { motion } from "motion/react";

const ScrollReveal = () => {
    const greetings = ["hello", "holla", "salam"];
    return (
        <>
            <div>
                <p>Scroll Reveal animation box</p>
                <br />
                <br />
                {greetings.map((greet) => (
                    <Box key={greet} text={greet} />
                ))}
            </div>
        </>
    );
};
export default ScrollReveal;

const Box = ({ text }) => {
    return (
        <motion.div
            className="w-32 h-32 rounded-sm bg-pink-400 text-black text-center m-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            // viewport={{ once: true }} for onetime animation
        >
            {text}
        </motion.div>
    );
};
