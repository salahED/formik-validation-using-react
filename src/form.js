import React from "react";
import { Form, Col, Button, Container } from "react-bootstrap";

export default function Formi() {
  return (
    <div className="harmo-role-layout">
      <p> helloooo</p>
      <Container fluid>
        <Form>
          <Form.Row>
            <Form.Group
              as={Col}
              className="d-flex"
              controlId="validationCustom01"
            >
              <Form.Label as={Col} md="2" className="d-flex align-items-center">
                Nom d'utilisateur
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="nom d'utilisateur"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group
              as={Col}
              className="d-flex"
              controlId="validationCustom01"
            >
              <Form.Label as={Col} md="2" className="d-flex align-items-center">
                Email
              </Form.Label>
              <Form.Control required type="email" placeholder="email" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group
              as={Col}
              className="d-flex"
              controlId="validationCustom01"
            >
              <Form.Label as={Col} md="2" className="d-flex align-items-center">
                Mot de passe
              </Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="mot de passe"
                minLength="8"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              className="d-flex"
              controlId="validationCustom01"
            >
              <Form.Label as={Col} md="2" className="d-flex align-items-center">
                Répeter mot de passe
              </Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Répeter mot de passe"
                minLength="8"
              />
            </Form.Group>
          </Form.Row>
          <Button type="submit" className=" btn btn-success d-flex justify-end">
            Sauvegarder
          </Button>
        </Form>
      </Container>
    </div>
  );
}
