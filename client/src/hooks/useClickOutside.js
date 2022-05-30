import { useRef, useEffect, useCallback } from "react";

const useClickOutside = (clickOutsideHandler) => {
    const navRef = useRef(null);
   
    const handler = useCallback( event => {
        if (!navRef.current?.contains(event.target)) {
            clickOutsideHandler();
        }
    },[navRef, clickOutsideHandler])

    useEffect(() => {

        window.addEventListener('click', handler, true);
        window.addEventListener('focusin', handler, true);
        
        return () => {
            window.removeEventListener('click', handler, true);
            window.removeEventListener('focusin', handler, true);
        }
    },[handler])

    return navRef
}

export default useClickOutside;