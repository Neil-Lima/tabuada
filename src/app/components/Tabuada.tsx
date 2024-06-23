'use client'
import React, { useState, ChangeEvent } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, FormControl, ListGroup } from 'react-bootstrap';

type TabuadaOperation = '12' | '13' | '14' | '15';

export default function Tabuada() {
  const [selectedOperation, setSelectedOperation] = useState<TabuadaOperation>('12');
  const [numero, setNumero] = useState<string>('');
  const [inicio, setInicio] = useState<string>('');
  const [fim, setFim] = useState<string>('');
  const [tabuadaItems, setTabuadaItems] = useState<string[]>([]);

  const handleOperationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOperation(event.target.value as TabuadaOperation);
  };

  const handleCalcular = () => {
    const numeroInt = parseInt(numero);
    const inicioInt = parseInt(inicio);
    const fimInt = parseInt(fim);

    if (isNaN(numeroInt) || isNaN(inicioInt) || isNaN(fimInt)) {
      alert('Por favor, preencha os campos corretamente.');
      return;
    }

    const items: string[] = [];

    for (let i = inicioInt; i <= fimInt; i++) {
      let resultado;
      switch (selectedOperation) {
        case '12': // Multiplicação
          resultado = numeroInt * i;
          items.push(`${numeroInt} x ${i} = ${resultado}`);
          break;
        case '13': // Divisão
          resultado = numeroInt / i;
          items.push(`${numeroInt} / ${i} = ${resultado}`);
          break;
        case '14': // Adição
          resultado = numeroInt + i;
          items.push(`${numeroInt} + ${i} = ${resultado}`);
          break;
        case '15': // Subtração
          resultado = numeroInt - i;
          items.push(`${numeroInt} - ${i} = ${resultado}`);
          break;
        default:
          break;
      }
    }

    setTabuadaItems(items);
  };

  const handleLimpar = () => {
    setNumero('');
    setInicio('');
    setFim('');
    setTabuadaItems([]);
  };

  return (
    <Container>
      <h1 className="text-center">Tabuada</h1>
      <h4 className="text-center">Selecione uma operação</h4>
      <Form style={{ width: '276px' }}>
        <Form.Select value={selectedOperation} onChange={handleOperationChange}>
          <optgroup label="Operações">
            <option value="12">Multiplicação</option>
            <option value="13">Divisão</option>
            <option value="14">Adição</option>
            <option value="15">Subtração</option>
          </optgroup>
        </Form.Select>
      </Form>

      <Container style={{ marginTop: '24px' }}>
        <Row style={{ marginTop: '30px' }}>
          <Col>
            <h5>Tabuada</h5>
            <InputGroup className="mb-3">
              <FormControl
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Digite um Número"
              />
            </InputGroup>
          </Col>
          <Col>
            <h5>Começa em:</h5>
            <InputGroup className="mb-3">
              <FormControl
                value={inicio}
                onChange={(e) => setInicio(e.target.value)}
                placeholder="Digite onde começar"
              />
            </InputGroup>
          </Col>
          <Col>
            <h5>Termina em:</h5>
            <InputGroup className="mb-3">
              <FormControl
                value={fim}
                onChange={(e) => setFim(e.target.value)}
                placeholder="Digite onde terminar"
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: '48px', textAlign: 'center' }}>
        <Button className="btn-primary" style={{ marginRight: '10px' }} onClick={handleCalcular}>
          Calcular
        </Button>
        <Button className="btn-primary" style={{ background: 'var(--bs-red)' }} onClick={handleLimpar}>
          Limpar
        </Button>
      </Container>

      <Container style={{ marginTop: '48px', textAlign: 'center' }}>
        <ListGroup>
          {tabuadaItems.map((item, index) => (
            <ListGroup.Item key={index} style={{ fontWeight: 'bold', borderStyle: 'none' }}>
              <span>{item}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </Container>
  );
}
