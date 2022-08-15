import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoCard from "../videocard";
import { RecommendWrapper } from "./recommendStyle";

function Recommend({ videoData }) {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`/video/tags?tags=${videoData.tags}`)
        .then((res) => {
          setTags(res.data);
        })
        .catch((e) => console.log(e, "error feching recommended videos"));
    };
    fetch();
  }, [videoData]);

  return (
    <RecommendWrapper>
      {tags &&
        tags.map((data) => (
          <VideoCard view="right" key={data._id} videoData={data} />
        ))}
    </RecommendWrapper>
  );
}

export default Recommend;
