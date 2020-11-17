import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";
import Favourite from "./Favourite";
import Vote from "./Vote";
import styled from "styled-components";
import Score from "./Score";

const InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
`;

function Cat(props) {
  const { cat, scores } = props;
  const [catScore, setCatScore] = useState(0);

  useEffect(() => {
    const value = scores.reduce((prev, cur) => {
      const currentVal = cur.value ? 1 : -1;

      return prev + currentVal;
    }, 0);
    setCatScore(value);
  }, [scores]);

  return (
    <Card raised>
      <Card.Content style={{ backgroundColor: "rgb(255,223,176)" }}>
        <Image src={cat.url} alt="" width="100%" />
      </Card.Content>
      <Card.Content extra style={{ backgroundColor: "rgb(253,187,98)" }}>
        <InfoBar>
          <Score value={catScore} />
          <Vote
            id={cat.id}
            vote={cat?.vote}
            onVote={(val) => setCatScore(catScore + val)}
          />
          <Favourite id={cat.id} favouriteId={cat?.favourite?.id} />
        </InfoBar>
      </Card.Content>
    </Card>
  );
}

export default Cat;
