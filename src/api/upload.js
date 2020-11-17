import http from "./http";
import { SUB_ID } from "../config";

const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);
  formData.append("sub_id", SUB_ID);

  return http.post("images/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

export default upload;
