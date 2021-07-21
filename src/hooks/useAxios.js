import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (pageNo) => {
  const [isLoading, setIsLoading] = useState(true);
  const [img, setImg] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getImg = async () => {
      await axios
        .get(
          `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH}&page=${pageNo}&per_page=30`
        )
        .then((res) => {
          setImg((x) => [
            ...x,
            ...res.data.map((x) => {
              return {
                id: x.id,
                isTall: x.width > x.height ? false : true,
                src: x.urls.raw,
                thumbnail: x.urls.small,
                caption: x.user.username,
              };
            }),
          ]);
        })
        .catch(() => setIsError(true))
        .finally(setIsLoading(false));
    };
    getImg();
  }, [pageNo]);

  return { isLoading, isError, img };
};

export { useAxios };
