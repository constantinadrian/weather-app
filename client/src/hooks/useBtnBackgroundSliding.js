import { useState, useRef, useCallback } from "react";

const useBtnBackgroundSliding = () => {
    const [backgroundWidth, setBackgroundWidth] = useState();
    const [leftSide, setLeftSide] = useState();

    const btnRef_1 = useRef(null);
    const btnRef_2 = useRef(null);

    const toggleWidth = useCallback((btnStateValue) => {
        if (btnStateValue === btnRef_1.current.control.defaultValue) {
            setBackgroundWidth(btnRef_1.current.scrollWidth);
            setLeftSide(btnRef_1.current.offsetLeft + 1);
        } else {
            setBackgroundWidth(btnRef_2.current.scrollWidth);
            setLeftSide(btnRef_2.current.offsetLeft);
        }
    }, []);

    return { leftSide, backgroundWidth, btnRef_1, btnRef_2, toggleWidth };
}

export default useBtnBackgroundSliding;
