import {useEffect, useRef} from "react";

export function useUpdateEffect (effect, deps) {
    const firstRender = useRef(true);
    useEffect(() => {
        if (firstRender.current) {
           firstRender.current = false;
        } else {
            effect()
        }
    }, deps)
}
