import http from "./http";

const votes = async () => {
  try {
    const response = await http.get("votes");

    if (response.status === 200) {
      return response.data;
    }

    return [];
  } catch (e) {
    return [];
  }
};

export default votes;
