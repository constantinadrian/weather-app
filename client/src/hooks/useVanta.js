import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUD from "vanta/dist/vanta.clouds.min.js";

const useVanta = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                CLOUD({
                    el: myRef.current,
                    THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    skyColor: 0x2faacf,
                    cloudColor: 0x8eb3e0,
                    cloudShadowColor: 0x718295,
                    sunColor: 0xff6605
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return myRef;
};

export default useVanta;