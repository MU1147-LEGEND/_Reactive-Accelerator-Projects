import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

const Counter = () => {
    const count = useMotionValue(0);
    const roundedValue = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 100, { duration: 5 });

        return animation.stop;
    }, [count, roundedValue]);

    return (
        <div>
            <motion.div>{roundedValue}</motion.div>
        </div>
    );
};
export default Counter;
