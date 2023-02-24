import { Card } from "react-bootstrap";

const WeatherDetails = ({ weather }) => (
  <Card>
    <Card.Body className="d-flex">
      <div>
        <Card.Text className="font-weight-bold">{weather.name}</Card.Text>
        <p>{weather.description}</p>
      </div>
    </Card.Body>
  </Card>
);

export default WeatherDetails;
