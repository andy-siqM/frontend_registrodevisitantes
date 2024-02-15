import Button from 'react-bootstrap/Button';
import { IMaskInput } from 'react-imask';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./index.css";

function FormVisitante() {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formBasicName" required>
        <Form.Label column sm="2">
            Nome do visitante
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext 
          placeholder="Maria José" />
        </Col>
      </Form.Group>

      <Form.Group className="mb-3" controlId="CPF" required>
        <Form.Label>CPF</Form.Label>
        <Form.Control as={IMaskInput}
        mask="000.000.000-00"
        placeholder="Digite seu CPF" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName" required>
        <Form.Label>Profissão</Form.Label>
        <Form.Control type="name" placeholder="Digite sua profissão" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName" required>
        <Form.Label>Gênero</Form.Label>
        <Form.Control type="name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName" required>
        <Form.Label>Cidade</Form.Label>
        <Form.Control type="name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName" required>
        <Form.Label>Bairro</Form.Label>
        <Form.Control type="name" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
    </Form>
  );
}

export default FormVisitante;