import React, { useState, ChangeEvent } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, FormControl, ListGroup, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { FaSun, FaMoon, FaCalculator, FaEraser } from 'react-icons/fa';
import styled, { ThemeProvider, createGlobalStyle, DefaultTheme } from 'styled-components';
import {
  SET_SELECTED_OPERATION,
  SET_NUMERO,
  SET_INICIO,
  SET_FIM,
  SET_TABUADA_ITEMS,
  CLEAR_FORM,
} from '../redux/tabuadaActionTypes';

type TabuadaOperation = '12' | '13' | '14' | '15';

interface CustomTheme extends DefaultTheme {
  gradient: string;
  text: string;
  cardBackground: string;
  buttonBackground: string;
  buttonBorder: string;
  buttonText: string;
  buttonHoverBackground: string;
}

const lightTheme: CustomTheme = {
  gradient: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
  text: '#363537',
  cardBackground: 'rgba(255, 255, 255, 0.9)',
  buttonBackground: '#007BFF',
  buttonBorder: '#007BFF',
  buttonText: '#FFF',
  buttonHoverBackground: '#0056b3',
};

const darkTheme: CustomTheme = {
  gradient: 'linear-gradient(120deg, #20202c 0%, #515175 100%)',
  text: '#FAFAFA',
  cardBackground: 'rgba(42, 43, 45, 0.9)',
  buttonBackground: '#17A2B8',
  buttonBorder: '#17A2B8',
  buttonText: '#FFF',
  buttonHoverBackground: '#138496',
};

const GlobalStyles = createGlobalStyle<{ theme: CustomTheme }>`
  body {
    background: ${props => props.theme.gradient};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
    min-height: 100vh;
  }
`;

const StyledCard = styled(Card)<{ theme: CustomTheme }>`
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
`;

const StyledButton = styled(Button)<{ theme: CustomTheme }>`
  background-color: ${props => props.theme.buttonBackground};
  border-color: ${props => props.theme.buttonBorder};
  color: ${props => props.theme.buttonText};
  &:hover {
    background-color: ${props => props.theme.buttonHoverBackground};
  }
`;

const ThemeToggle = styled.button<{ theme: CustomTheme }>`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.text};
  z-index: 1000;
`;

const Tabuada: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedOperation, numero, inicio, fim, tabuadaItems } = useSelector((state: RootState) => ({
    selectedOperation: state.selectedOperation,
    numero: state.numero,
    inicio: state.inicio,
    fim: state.fim,
    tabuadaItems: state.tabuadaItems
  }));
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleOperationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: SET_SELECTED_OPERATION, payload: event.target.value as TabuadaOperation });
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
          items.push(`${numeroInt} / ${i} = ${resultado.toFixed(2)}`);
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

    dispatch({ type: SET_TABUADA_ITEMS, payload: items });
  };

  const handleLimpar = () => {
    dispatch({ type: CLEAR_FORM });
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles theme={currentTheme} />
      <Container className="py-5">
        <StyledCard className="shadow-lg" theme={currentTheme}>
          <Card.Body>
            <div className="position-relative">
              <ThemeToggle onClick={toggleTheme} theme={currentTheme}>
                {theme === 'light' ? <FaMoon /> : <FaSun />}
              </ThemeToggle>
              <h1 className="text-center mb-4" style={{ color: theme === 'light' ? '#007bff' : '#17a2b8' }}>Tabuada Interativa</h1>
            </div>
            <h4 className="text-center mb-4" style={{ color: theme === 'light' ? '#6c757d' : '#adb5bd' }}>Selecione uma operação</h4>
            <Form className="mb-4">
              <Form.Select 
                value={selectedOperation} 
                onChange={handleOperationChange}
                className="form-select-lg mb-3"
                style={{ maxWidth: '300px', margin: '0 auto' }}
              >
                <option value="12">Multiplicação</option>
                <option value="13">Divisão</option>
                <option value="14">Adição</option>
                <option value="15">Subtração</option>
              </Form.Select>
            </Form>

            <Row className="g-4 mb-4">
              <Col md={4}>
                <StyledCard className="h-100" theme={currentTheme}>
                  <Card.Body>
                    <h5 className="card-title text-center mb-3">Tabuada</h5>
                    <InputGroup>
                      <FormControl
                        value={numero}
                        onChange={(e) => dispatch({ type: SET_NUMERO, payload: e.target.value })}
                        placeholder="Digite um Número"
                        className="form-control-lg"
                      />
                    </InputGroup>
                  </Card.Body>
                </StyledCard>
              </Col>
              <Col md={4}>
                <StyledCard className="h-100" theme={currentTheme}>
                  <Card.Body>
                    <h5 className="card-title text-center mb-3">Começa em:</h5>
                    <InputGroup>
                      <FormControl
                        value={inicio}
                        onChange={(e) => dispatch({ type: SET_INICIO, payload: e.target.value })}
                        placeholder="Digite onde começar"
                        className="form-control-lg"
                      />
                    </InputGroup>
                  </Card.Body>
                </StyledCard>
              </Col>
              <Col md={4}>
                <StyledCard className="h-100" theme={currentTheme}>
                  <Card.Body>
                    <h5 className="card-title text-center mb-3">Termina em:</h5>
                    <InputGroup>
                      <FormControl
                        value={fim}
                        onChange={(e) => dispatch({ type: SET_FIM, payload: e.target.value })}
                        placeholder="Digite onde terminar"
                        className="form-control-lg"
                      />
                    </InputGroup>
                  </Card.Body>
                </StyledCard>
              </Col>
            </Row>

            <div className="d-flex justify-content-center mb-4">
              <StyledButton 
                className="btn-lg me-3" 
                onClick={handleCalcular}
                style={{ minWidth: '120px' }}
                theme={currentTheme}
              >
                <FaCalculator className="me-2" /> Calcular
              </StyledButton>
              <StyledButton 
                className="btn-lg" 
                onClick={handleLimpar}
                style={{ minWidth: '120px' }}
                theme={currentTheme}
              >
                <FaEraser className="me-2" /> Limpar
              </StyledButton>
            </div>

            {tabuadaItems.length > 0 && (
              <StyledCard className="mt-4" theme={currentTheme}>
                <Card.Body>
                  <h5 className="card-title text-center mb-3">Resultados</h5>
                  <ListGroup variant="flush">
                    {tabuadaItems.map((item, index) => (
                      <ListGroup.Item 
                        key={index} 
                        className="d-flex justify-content-between align-items-center"
                        style={{ backgroundColor: 'transparent', color: 'inherit' }}
                      >
                        <span className="fw-bold">{item}</span>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </StyledCard>
            )}
          </Card.Body>
        </StyledCard>
      </Container>
    </ThemeProvider>
  );
};

export default Tabuada;
