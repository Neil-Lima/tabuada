import React from 'react';
import { Card, Form, Row, Col, InputGroup, FormControl, ListGroup } from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';
import { FaSun, FaMoon, FaCalculator, FaEraser } from 'react-icons/fa';

import { useTabuadaState } from '../utils/TabuadaUtils';
import { TabuadaContainer, TabuadaCard, TabuadaTitle, TabuadaSubtitle } from '../styles/TabuadaStyles';
import { lightTheme, darkTheme } from '../../../theme/utils/ThemeUtils';
import { GlobalStyles } from '../../../theme/styles/ThemeStyles';
import { ThemeToggleButton } from '../../../theme/styles/ThemeStyles';
import { StyledButton } from '../../ActionButtons/styles/ActionButtonsStyles';

const TabuadaComp: React.FC = () => {
  const [
    { selectedOperation, numero, inicio, fim, tabuadaItems, theme },
    { handleOperationChange, handleNumeroChange, handleInicioChange, handleFimChange, handleCalcular, handleLimpar, toggleTheme }
  ] = useTabuadaState();

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles theme={currentTheme} />
      <TabuadaContainer className="py-5">
        <TabuadaCard className="shadow-lg" theme={currentTheme}>
          <Card.Body>
            <div className="position-relative">
              <ThemeToggleButton onClick={toggleTheme} theme={currentTheme}>
                {theme === 'light' ? <FaMoon /> : <FaSun />}
              </ThemeToggleButton>
              <TabuadaTitle themeType={theme}>Tabuada Interativa</TabuadaTitle>
            </div>
            <TabuadaSubtitle themeType={theme}>Selecione uma operação</TabuadaSubtitle>
            
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
                <Card className="h-100" style={{ backgroundColor: currentTheme.cardBackground, color: currentTheme.text }}>
                  <Card.Body>
                    <h5 className="card-title text-center mb-3">Tabuada</h5>
                    <InputGroup>
                      <FormControl
                        value={numero}
                        onChange={(e) => handleNumeroChange(e.target.value)}
                        placeholder="Digite um Número"
                        className="form-control-lg"
                      />
                    </InputGroup>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="h-100" style={{ backgroundColor: currentTheme.cardBackground, color: currentTheme.text }}>
                  <Card.Body>
                    <h5 className="card-title text-center mb-3">Começa em:</h5>
                    <InputGroup>
                      <FormControl
                        value={inicio}
                        onChange={(e) => handleInicioChange(e.target.value)}
                        placeholder="Digite onde começar"
                        className="form-control-lg"
                      />
                    </InputGroup>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="h-100" style={{ backgroundColor: currentTheme.cardBackground, color: currentTheme.text }}>
                  <Card.Body>
                    <h5 className="card-title text-center mb-3">Termina em:</h5>
                    <InputGroup>
                      <FormControl
                        value={fim}
                        onChange={(e) => handleFimChange(e.target.value)}
                        placeholder="Digite onde terminar"
                        className="form-control-lg"
                      />
                    </InputGroup>
                  </Card.Body>
                </Card>
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
              <Card className="mt-4" style={{ backgroundColor: currentTheme.cardBackground, color: currentTheme.text }}>
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
              </Card>
            )}
          </Card.Body>
        </TabuadaCard>
      </TabuadaContainer>
    </ThemeProvider>
  );
};

export default TabuadaComp;
