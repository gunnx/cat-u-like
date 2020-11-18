import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import SimpleButton from "./SimpleButton";
import * as APIService from "../api";

async function handleVote(id, status, voteId) {
  try {
    if (status === 0) {
      await APIService.vote(id, status, voteId);
      return undefined;
    } else if (status === 1) {
      return await APIService.vote(id, status, voteId);
    }
  } catch {
    alert("Unable to update your voting preference");
  }
}

function Vote(props) {
  const { id, vote, onVote } = props;

  const [voteId, setVoteId] = useState(vote?.id);
  const [voteStatus, setVoteStatus] = useState(vote?.value);

  return (
    <div>
      <SimpleButton
        onClick={() => {
          if (voteStatus === 1) {
            alert("You have already voted up");
          } else {
            handleVote(id, 1, voteId).then((newVoteId) => {
              setVoteId(newVoteId);
              setVoteStatus(1);
              onVote(1);
            });
          }
        }}
      >
        <Icon
          color="green"
          name={voteStatus === 1 ? "thumbs up" : "thumbs up outline"}
          size="big"
        />
      </SimpleButton>
      <SimpleButton
        onClick={() => {
          if (voteStatus === 0) {
            alert("You have already voted down");
          } else {
            handleVote(id, 0, voteId).then((newVoteId) => {
              setVoteId(newVoteId);
              setVoteStatus(0);
              onVote(-1);
            });
          }
        }}
      >
        <Icon
          color="red"
          name={voteStatus === 0 ? "thumbs down" : "thumbs down outline"}
          size="big"
        />
      </SimpleButton>
    </div>
  );
}

export default Vote;
