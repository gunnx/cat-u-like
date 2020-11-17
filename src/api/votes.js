import http from "./http";
import { SUB_ID } from "../config";

const votes = async () => {
  try {
    const response = await http.get("votes", {
      params: {
        order: "DESC",
        limit: 50,
      },
    });

    if (response.status === 200) {
      return response.data;
    }

    return [];
  } catch (e) {
    return [];
  }
};

export default votes;
