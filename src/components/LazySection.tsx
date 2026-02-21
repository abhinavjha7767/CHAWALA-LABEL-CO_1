import { Suspense, useState, useEffect, useRef, ReactNode } from "react";
import { useInView } from "framer-motion";

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  offset?: string;
  minHeight?: string;
}

export const LazySection = ({
  children,
  fallback = null,
  offset = "200px",
  minHeight = "400px",
}: LazySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // amount: 0 means as soon as 1 pixel is in view (plus margin)
  const isInView = useInView(ref, {
    once: true,
    margin: `0px 0px ${offset} 0px` as any,
  });
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (isInView && !shouldLoad) {
      setShouldLoad(true);
    }
  }, [isInView, shouldLoad]);

  return (
    <div ref={ref} style={{ minHeight: shouldLoad ? "auto" : minHeight }}>
      {shouldLoad ? (
        <Suspense fallback={fallback}>{children}</Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};
