import { motion, useScroll } from "motion/react";
import Button from "./components/Button";
import Keyframe from "./components/Keyframe";
import ScrollLinked from "./components/ScrollTrigger";
import TextAnimate from "./components/TextAnimate";
import Counter from "./components/Counter";
import ScrollReveal from "./components/ScrollReveal";

const App = () => {
    const { scrollYProgress } = useScroll();
    return (
        <div className="w-4/5 m-auto mt-10">
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    originX: 0,
                    backgroundColor: "#ff0088",
                }}
            />
            {/* <Animate /> */}
            <Keyframe />
            <Button />
            <TextAnimate />
            <Counter />
            <ScrollReveal />
            <ScrollLinked />
        </div>
    );
};
export default App;
