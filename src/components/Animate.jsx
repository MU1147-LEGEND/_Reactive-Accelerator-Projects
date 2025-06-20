import * as motion from "motion/react-client";
const Animate = () => {
    return (
        <motion.div
            className="bg-red-500 border w-32 h-32 rounded-4xl "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
        />
    );
};
export default Animate;
