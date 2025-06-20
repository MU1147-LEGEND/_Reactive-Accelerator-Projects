import { motion } from "motion/react";
import { button } from "motion/react-client";

const Keyframe = () => {
    return (
        <motion.div
            className="bg-blue-500 border w-32 h-32 m-4"
            animate={{
                borderRadius: ["10%", "20%", "25%"],
            }}
            transition={{ duration: 0.5 }}
        />

        
    );
};
export default Keyframe;
