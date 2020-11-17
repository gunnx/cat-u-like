import http from "./http";
import { SUB_ID } from "../config";

const list = async () => {
  try {
    const response = await http.get("images/", {
      params: {
        limit: 10,
        sub_id: SUB_ID,
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};

export default list;
