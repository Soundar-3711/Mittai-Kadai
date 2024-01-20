import React from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const Orders = () => {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Cadbury Chocolates</div>
          The whole process of manufacturing these chocolates is done from their
          factory in India using locally harvested cocoa.
        </div>
        <Badge bg="primary" pill>
          3
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Nestle Chocolates</div>
          The famous Kit Kat bars are crisp wafer fingers encrusted in
          chocolate.
        </div>
        <Badge bg="primary" pill>
          1
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Amul Chocolates</div>
          The company produces bundled milk and dairy items. They produce dark
          chocolate, and green tea Extricate chocolate.
        </div>
        <Badge bg="primary" pill>
          2
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Orders;
