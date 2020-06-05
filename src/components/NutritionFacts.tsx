import React from 'react';
import { Table } from 'react-bootstrap';

interface NutritionFactsProps {
  nutrients: Nutrients[];
}

const NutritionFacts: React.FC<NutritionFactsProps> = ({ nutrients }) => {
  return (
    <Table striped bordered hover size='sm' variant='dark'>
      <thead>
        <tr>
          <th>Amount</th>
          <th>% Daily Value</th>
        </tr>
      </thead>
      <tbody>
        {nutrients.map((nutrient, index) => (
          <tr key={index}>
            <td>{`${nutrient.title} ${nutrient.amount}`}</td>
            <td>{`${nutrient.percentOfDailyNeeds}%`}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default NutritionFacts;
