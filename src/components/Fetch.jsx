import { Component, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux/es/exports";

const Home = () => {
  const homeContent = useSelector((state) => state.weather.content);
  const dispatch = useDispatch();

  return (
    <Row>
      <Col></Col>
    </Row>
  );
};
