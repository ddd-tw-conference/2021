import { useCallback, useMemo, useState } from "react";

const useToggle = () => {
  const [active, setActive] = useState(false);
  const on = useCallback(() => {
    setActive(true);
  }, []);
  const off = useCallback(() => {
    setActive(false);
  }, []);
  const toggle = useMemo(
    () => ({
      active,
      on,
      off,
    }),
    [active, off, on]
  );
  return toggle;
};

export default useToggle;
