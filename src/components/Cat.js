import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import Favourite from "./Favourite";
import Vote from "./Vote";
import styled from "styled-components";
import Score from "./Score";
import CatImage from "./CatImage";

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
      <Card.Content>
        <CatImage url={cat.url} />
      </Card.Content>
      <Card.Content extra style={{ backgroundColor: "rgb(220,220,220)" }}>
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
