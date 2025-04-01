import React from 'react';
import { Row, Col, Card, InputGroup, FormControl } from 'react-bootstrap';
import { InputFieldsProps } from '../types/InputFieldsTypes';
import { InputCard } from '../styles/InputFieldsStyles';

const InputFieldsComp: React.FC<InputFieldsProps> = ({
  theme,
  numero,
  inicio,
  fim,
  onNumeroChange,
  onInicioChange,
  onFimChange
}) => {
  return (
    <Row className="g-4 mb-4">
      <Col md={4}>
        <InputCard className="h-100" theme={theme}>
          <Card.Body>
            <h5 className="card-title text-center mb-3">Tabuada</h5>
            <InputGroup>
              <FormControl
                value={numero}
                onChange={(e) => onNumeroChange(e.target.value)}
                placeholder="Digite um Número"
                className="form-control-lg"
              />
            </InputGroup>
          </Card.Body>
        </InputCard>
      </Col>
      <Col md={4}>
        <InputCard className="h-100" theme={theme}>
          <Card.Body>
            <h5 className="card-title text-center mb-3">Começa em:</h5>
            <InputGroup>
              <FormControl
                value={inicio}
                onChange={(e) => onInicioChange(e.target.value)}
                placeholder="Digite onde começar"
                className="form-control-lg"
              />
            </InputGroup>
          </Card.Body>
        </InputCard>
      </Col>
      <Col md={4}>
        <InputCard className="h-100" theme={theme}>
          <Card.Body>
            <h5 className="card-title text-center mb-3">Termina em:</h5>
            <InputGroup>
              <FormControl
                value={fim}
                onChange={(e) => onFimChange(e.target.value)}
                placeholder="Digite onde terminar"
                className="form-control-lg"
              />
            </InputGroup>
          </Card.Body>
        </InputCard>
      </Col>
    </Row>
  );
};

export default InputFieldsComp;
