import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useState, useRef } from "react";
import * as APIService from "../api";
import {
  Button,
  Container,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Progress,
} from "semantic-ui-react";

function Upload() {
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const fileRef = useRef(null);

  const uploadFile = () => {
    if (currentFile) {
      setProgress(0);
      APIService.upload(currentFile, (event) => {
        setProgress(Math.round((100 * event.loaded) / event.total));
      })
        .then((response) => {
          setMessage("Redirecting you to home page...");
          setProgress(0);

          setTimeout(() => {
            setFileUploaded(true);
          }, 2000);
        })
        .catch((error) => {
          let errorMessage = "Unable to upload file";
          if (error.response) {
            errorMessage = error.response.data.message;
          }
          setProgress(0);
          setMessage(errorMessage);
          setError(true);
          setCurrentFile(undefined);
        });
    }
  };

  const handleFileChange = (event) => {
    setCurrentFile(event.target.files[0]);
    setError(false);
    setMessage("");
  };

  return (
    <Container>
      {fileUploaded && <Redirect to="/" />}
      <Header as="h1">Upload</Header>
      <Divider />
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Form>
              <Button
                icon
                labelPosition="right"
                type="button"
                onClick={() => fileRef.current.click()}
              >
                {currentFile?.name || "Select file to upload"}
                <Icon name="upload" />
              </Button>
              <input
                type="file"
                hidden
                onChange={handleFileChange}
                ref={fileRef}
                style={{ display: "hidden" }}
              />
              <Button
                primary
                type="submit"
                onClick={uploadFile}
                disabled={currentFile === undefined}
                loading={progress > 0}
              >
                Submit
              </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {progress > 0 && <Progress percent={progress} indicating />}
            {message &&
              (error ? (
                <Message
                  error
                  icon="frown"
                  header="Upload failed"
                  content={message}
                />
              ) : (
                <Message
                  success
                  icon="smile"
                  header="Upload successful"
                  content={message}
                />
              ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
      <Link to="/">Return home</Link>
    </Container>
  );
}

export default Upload;
