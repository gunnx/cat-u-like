import React, { useState } from "react";
import HeartPaw from "./HeartPaw";
import * as APIService from "../api";
import SimpleButton from "./SimpleButton";

async function handleFavourite(imageId, favId) {
  try {
    if (favId) {
      await APIService.unfavourite(favId);
      return undefined;
    } else {
      return await APIService.favourite(imageId);
    }
  } catch {
    alert("Unable to update your favourite preference");
  }
}

function Favourite(props) {
  const { id, favouriteId } = props;
  const [isFav, setIsFav] = useState(favouriteId !== undefined);
  const [favId, setFavId] = useState(favouriteId);

  return (
    <SimpleButton
      onClick={() => {
        handleFavourite(id, favId).then((newFavId) => {
          if (newFavId) {
            setFavId(newFavId);
          }
          setIsFav(!isFav);
        });
      }}
    >
      <HeartPaw width={40} height={40} filled={isFav} />
    </SimpleButton>
  );
}

export default Favourite;
