import "./App.css";
import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentsDataService from "./services/comments.service";
function App() {
  const [values, setValues] = React.useState([]);
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues([...values, e.target[0].value]);
    //console.log(values);
    console.log(value); // the comment that guy submitted

    CommentsDataService.create({ text: value })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <h1>Please add your comments below</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>
            <b>Add Comment</b>
          </Form.Label>
          <Form.Control
            type="text"
            className="input"
            value={value}
            onChange={(e) => setValue(e.target.value)} //values[] = "aa" , value = "aa" arr values=["aa","jj"]
            placeholder="Add new comment"
          />
        </Form.Group>
        <Button variant="primary mb-3" type="submit">
          Submit
        </Button>
      </Form>
      <h1>The comments</h1>
      <ul>
        {values.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
