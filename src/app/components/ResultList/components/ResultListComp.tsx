import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import { ResultListProps } from '../types/ResultListTypes';
import { ResultCard, ResultItem } from '../styles/ResultListStyles';
import { formatResult } from '../utils/ResultListUtils';

const ResultListComp: React.FC<ResultListProps> = ({ theme, tabuadaItems }) => {
  if (tabuadaItems.length === 0) {
    return null;
  }

  return (
    <ResultCard theme={theme}>
      <Card.Body>
        <h5 className="card-title text-center mb-3">Resultados</h5>
        <ListGroup variant="flush">
          {tabuadaItems.map((item, index) => (
            <ResultItem key={index}>
              <span className="fw-bold">{formatResult(item)}</span>
            </ResultItem>
          ))}
        </ListGroup>
      </Card.Body>
    </ResultCard>
  );
};

export default ResultListComp;
