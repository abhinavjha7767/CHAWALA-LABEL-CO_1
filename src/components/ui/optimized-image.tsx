import React, { useEffect, useRef, useState, memo } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  priority?: boolean;
  srcSet?: string;
  sizes?: string;
};

const OptimizedImage: React.FC<Props> = ({
  src,
  alt,
  className,
  priority = false,
  srcSet,
  sizes,
  width,
  height,
  style,
  onClick,
  ...rest
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [visible, setVisible] = useState<boolean>(!!priority);

  useEffect(() => {
    if (visible) return;
    if (!imgRef.current) return;
    if (typeof window === "undefined") return;

    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              obs.disconnect();
            }
          });
        },
        { rootMargin: "200px" },
      );

      obs.observe(imgRef.current);
      return () => obs.disconnect();
    }

    // Fallback: mark visible immediately
    setVisible(true);
  }, [visible]);

  const loading = priority ? "eager" : "lazy";
  // Some React versions warn about unknown DOM props like `fetchPriority`.
  // Set the attribute directly on the DOM node when priority is needed
  // to avoid React warnings while still hinting the browser.
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (priority) {
      try {
        img.setAttribute("fetchpriority", "high");
      } catch (e) {
        // ignore if attribute isn't supported
      }
    }
  }, [priority, visible]);

  return (
    <img
      ref={imgRef}
      src={visible ? src : undefined}
      srcSet={visible && srcSet ? srcSet : undefined}
      sizes={visible && sizes ? sizes : undefined}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      width={width}
      height={height}
      style={style}
      onClick={onClick}
      {...rest}
    />
  );
};

export default memo(OptimizedImage);
