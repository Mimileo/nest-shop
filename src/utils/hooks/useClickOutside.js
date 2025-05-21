import { useEffect } from "react";


function useClickOutside(ref, handler, when = true, exceptionRefs = []) {
  useEffect(() => {
    if (!when) {
      return;
    }

    const listener = (event) => {
      
      if (!ref.current || ref.current.contains(event.target) || exceptionRefs.some((ref) => ref.current?.contains(event.target))) {
        return;
      }
     
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener); 

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, when, exceptionRefs]);
}

export default useClickOutside;
