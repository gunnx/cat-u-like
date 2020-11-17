import http from "./http";
import { SUB_ID } from "../config";

const vote = async (imageId, status, voteId) => {
  try {
    if (voteId) {
      await http.delete(`votes/${voteId}`);
    }

    const response = await http.post("votes", {
      image_id: imageId,
      value: status,
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

export default vote;
