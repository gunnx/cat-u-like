import http from "./http";

const unfavourite = async (favouriteId) => {
  try {
    const response = await http.delete(`favourites/${favouriteId}`);

    if (response.status === 200) {
      if (response.data.message === "SUCCESS") {
        return true;
      }
    }

    return false;
  } catch (e) {
    return false;
  }
};

export default unfavourite;
