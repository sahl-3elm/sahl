import { useEffect } from "react";

function Title({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return children;
}

export default Title;
