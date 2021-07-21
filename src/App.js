import React, { useState } from "react";

import { Header } from "./components/Header";
import RenderImage from "./components/RenderImage";

import { useAxios } from "./hooks/useAxios";

const App = () => {
  const [pageNo, setPageNo] = useState(1);
  const { img, isLoading } = useAxios(pageNo);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPageNo((x) => x + 1);
    }
  };

  if (isLoading === true) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="grid">
        {img.map((image, i) => (
          <RenderImage
            key={`${image.id}-${i}`}
            image={image}
            isLast={img.length === i + 1}
          />
        ))}
      </div>
    </>
  );
};

export default App;
