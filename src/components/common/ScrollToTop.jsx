import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Setiap pindah halaman, scroll balik ke atas. */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
