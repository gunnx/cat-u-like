import React from "react";
import useWindowSize from "../useWindowSize";
import styled from "styled-components";
import { Image } from "semantic-ui-react";

const BackgroundCat = styled.div`
  background-image: url(${(props) => props.url});
  height: 200px;
  max-width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 5px;
`;

function CatImage(props) {
  const { url } = props;
  const size = useWindowSize();

  if (size.width > 767) {
    return <BackgroundCat url={url} />;
  } else {
    return <Image src={url} alt="" width="100%" rounded />;
  }
}

export default CatImage;
