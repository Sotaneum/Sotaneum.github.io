import { useEffect } from "react";

export default function useHash(onChange: (hash: string) => void) {
  useEffect(() => {
    const interval = setInterval(() => {
      const { hash } = window.location;
      if (!hash) {
        return;
      }

      onChange(decodeURI(hash));
      history.pushState("", document.title);
    });
    return () => clearInterval(interval);
  }, []);
}
