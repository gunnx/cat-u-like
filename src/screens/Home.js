import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Container,
  Divider,
  Header,
  Icon,
  Label,
} from "semantic-ui-react";
import Cat from "../components/Cat";
import styled from 'styled-components'
import * as APIService from "../api";

const H1 = styled(Header)`
  color: #fff;
`

function Home() {
  const [cats, setCats] = useState([]);
  const [scores, setScores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const fetchedCats = await APIService.list();
        if (fetchedCats) {
          setCats(fetchedCats);
        }

        const fetchedScores = await APIService.votes();
        if (fetchedScores) {
          setScores(fetchedScores);
        }
      } catch (e) {}
      setIsLoading(false);
    })();
  }, []);

  return (
    <Container>
      <H1 as="h1">
        Cat-U-Like
      </H1>
      <Link to="/upload">
        <Label content="Upload Cat" icon="upload" color="orange" />
      </Link>
      <Divider />
      {!isLoading && cats.length > 0 && (
        <Card.Group itemsPerRow={4} doubling stackable>
          {cats.map((cat) => {
            // get scores
            const catScores = scores.filter(
              (score) => score.image_id === cat.id
            );
            return <Cat cat={cat} scores={catScores} key={cat.id} />;
          })}
        </Card.Group>
      )}
      {!isLoading && cats.length === 0 && (
        <Container textAlign="center">
          <Header as="h2" icon>
            <Link to="/upload">
              <Icon name="upload" />
            </Link>
            No cats uploaded
            <Header.Subheader>
              Click the upload button to start adding cats!
            </Header.Subheader>
          </Header>
        </Container>
      )}
    </Container>
  );
}

export default Home;
