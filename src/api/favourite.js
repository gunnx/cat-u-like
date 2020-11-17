import http from "./http";
import { SUB_ID } from "../config";

const favourite = async (imageId) => {
  try {
    const response = await http.post("favourites", {
      image_id: imageId,
      sub_id: SUB_ID,
    });

    if (response.status === 200) {
      if (response.data.message === "SUCCESS") {
        return response.data.id;
      }
    }

    return null;
  } catch (e) {
    return null;
  }
};

export default favourite;
