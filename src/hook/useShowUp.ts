import { useEffect, useState } from "react";

const useShowUp = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(true);
  }, []);
  return active;
};

export default useShowUp;
