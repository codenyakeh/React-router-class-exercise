import React from "react";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <div style={{ marginLeft: "20px", alignContent: "center"}}>
      <div>
        <h1>This is my Home page</h1>
        
        <Card style={{ width: "20%", height: "50vh" }}>
          <Card.Img
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
          />
          <Card.Body>
            <Card.Title>FC Barcelona</Card.Title>
            <Card.Text>Best Team In The World</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;
