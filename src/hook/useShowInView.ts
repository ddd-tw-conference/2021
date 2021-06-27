import merge from "lodash/merge";
import { useMemo } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";
import { config, useSpring, UseSpringProps } from "react-spring";

const defaultUseInViewOptions: IntersectionOptions = {};

const useShowInView = <UseSpringPropsProps extends object = any>(
  useInViewOptions?: IntersectionOptions,
  useSpringOptions?: UseSpringProps<UseSpringPropsProps>
) => {
  const useInViewOptionsMerged: IntersectionOptions = useMemo(
    () => merge({}, defaultUseInViewOptions, useInViewOptions),
    [useInViewOptions]
  );
  const { ref, inView } = useInView(useInViewOptionsMerged);
  const useSpringOptionsMerged: UseSpringProps<UseSpringPropsProps> = useMemo(
    () =>
      merge(
        {},
        {
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 16,
          scale: inView ? 1 : 0.8,
          config: config.gentle,
        },
        useSpringOptions
      ),
    [inView, useSpringOptions]
  );
  const style = useSpring(useSpringOptionsMerged);
  const ret = useMemo(
    () => ({
      ref,
      inView,
      style,
    }),
    [inView, ref, style]
  );
  return ret;
};

export default useShowInView;
