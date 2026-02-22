// Type declarations for image imports including vite-imagetools query variants
declare module '*.avif' {
  const src: string;
  export default src;
}
declare module '*.webp' {
  const src: string;
  export default src;
}
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}

// vite-imagetools query imports
// Match imports that include multiple query params (e.g. ?w=400&as=src)
declare module '*?*as=src*' {
  const src: string;
  export default src;
}
declare module '*?*as=srcset*' {
  const srcset: string;
  export default srcset;
}

// Fallback for any import with query params
declare module '*?*' {
  const value: string;
  export default value;
}

// Additional broad patterns to help TypeScript servers that treat query strings differently
declare module '*png*' {
  const src: string;
  export default src;
}
declare module '*jpg*' {
  const src: string;
  export default src;
}
declare module '*jpeg*' {
  const src: string;
  export default src;
}
declare module '*webp*' {
  const src: string;
  export default src;
}
declare module '*svg*' {
  const src: string;
  export default src;
}
