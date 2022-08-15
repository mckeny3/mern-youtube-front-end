import React, { useState } from "react";
import { StyleButton } from "../globalComponents/styleButton";
import {
  UploadBox,
  UploadContainer,
  UploadTitle,
  Upload_Close,
  Upload_Content,
  Upload_desc,
  Upload_file,
  Upload_tag,
  Upload_thumnail,
  Upload_title_box,
  Upload_title_input,
} from "./uploadStyle";
import axios from "axios";
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
export default function Upload({ currentUser, setOpenUpload }) {
  const [VideoFile, setVideoFile] = useState(null);
  const [VideoImageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState([]);
  const [imgPerc, setImgPerc] = useState(0);
  const [vidPerc, setVidPerc] = useState(0);
  const [downloadLink, setDownloadLink] = useState("");
  const randomName = new Date().toISOString();

  const [videoData, setVideoData] = useState({
    desc: "",
    title: "",
  });
  //console.log(videoData);
  const navigate = useNavigate();

  ////////////UPLOAD FUNCTION
  const handleUpload = async (event) => {
    event.preventDefault();
    if (VideoFile === null) return console.log("Please select a file");

    ///////////error check
    if (!videoData.desc) {
      return console.log("Descripttiion is required");
    } else if (!videoData.title) {
      return console.log("Title is required");
    } else if (tags.length === 0) {
      return console.log("Tags are required");
    } else if (!VideoFile) {
      return console.log("please select a video");
    }
    const videoRef = ref(storage, `jametube/${randomName + VideoFile?.name}`);

    uploadBytesResumable(videoRef, VideoFile).on(
      "videoState",
      (res) => {
        const vidProgress = (res.bytesTransferred / res.totalBytes) * 100;
        setVidPerc(Math.round(vidProgress));
      },
      (e) => {
        console.log(e);
      },
      async (res) => {
        await getDownloadURL(videoRef).then(async (link) => {
          ////////now send details to mongo

          await axios
            .post("/video/addVideo", {
              ...videoData,
              userId: currentUser._id,
              tags: tags,
              videoUrl: link,
            })
            .then((res) => {
              console.log(res.data, "upload to db");
              navigate(`/video/${res.data._id}`);
              setOpenUpload(false);
            })
            .catch((e) => console.log(e.message));
        });

        console.log("success", res);
      }
    );
  };

  ///////hanle video data
  const handleVideoData = (event) => {
    event.preventDefault();
    setVideoData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <UploadContainer>
      <UploadBox>
        <Upload_title_box>
          <UploadTitle>Upload videos</UploadTitle>
          <Upload_Close onClick={() => setOpenUpload(false)}>X</Upload_Close>
        </Upload_title_box>

        <Upload_Content>
          <label className="Upload_label">Choose video</label>

          <Upload_file
            name="video"
            onChange={(e) => setVideoFile(e.target.files[0])}
            type="file"
            accept="video/*"
          />

          <Upload_title_input
            name="title"
            onChange={(event) => handleVideoData(event)}
            aria-label="Title"
            placeholder="Video title"
          />
          <label className="Upload_label">Description:</label>

          <Upload_desc
            name="desc"
            onChange={(e) => handleVideoData(e)}
            rows={6}
            placeholder="Tell your viewers about your video"
          />
          <label className="Upload_label">Thumnail:</label>
          <Upload_thumnail
            name="thumnail"
            onChange={(e) => setImageFile(e.target.files[0])}
            accept="image/*"
            type="file"
          />

          <label className="Upload_label">
            Tags:
            {tags &&
              tags.map((i, index) => (
                <span key={index} className="tags">
                  {i}
                </span>
              ))}
          </label>

          <Upload_tag
            name="tags"
            onChange={(e) => setTags(e.target.value.split(","))}
            placeholder="Seperate your tags with commas!"
          />

          <StyleButton
            disabled={vidPerc === 0 ? false : true}
            w="inherit"
            onClick={(e) => handleUpload(e)}
          >
            {vidPerc === 0 ? "Upload" : `${vidPerc}%`}
          </StyleButton>
        </Upload_Content>
      </UploadBox>
    </UploadContainer>
  );
}
