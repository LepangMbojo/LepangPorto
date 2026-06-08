import { useState, useEffect } from "react";

export function useTyping(texts, speed = 90, pause = 2400) {
  const [txt, setTxt] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = texts[idx];
    let t;

    if (!del && txt === cur) {
      t = setTimeout(() => setDel(true), pause);
    } else if (del && txt === "") {
      t = setTimeout(() => {
        setDel(false);
        setIdx((i) => (i + 1) % texts.length);
      }, 0);
    } else {
      t = setTimeout(
        () =>
          setTxt((p) =>
            del ? p.slice(0, -1) : cur.slice(0, p.length + 1)
          ),
        del ? speed / 2 : speed
      );
    }
    return () => clearTimeout(t);
  }, [txt, idx, del, texts, speed, pause]);

  return txt;
}
