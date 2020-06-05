import React, { useState, useEffect } from 'react';
import { RecipeButtonGroup, Tags } from './';
import { Card, Row, Col } from 'react-bootstrap';

interface RecipeHeaderProps {
  recipe?: Recipe;
}

const RecipeHeader: React.FC<RecipeHeaderProps> = ({ recipe }) => {
  console.log('recipe', recipe);

  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const arr: string[] = [];

    if (recipe?.cheap) arr.push('cheap');
    if (recipe?.dairyFree) arr.push('dairy free');
    if (recipe?.glutenFree) arr.push('gluten free');
    if (recipe?.lowFodmap) arr.push('load food map');
    if (recipe?.sustainable) arr.push('sustainable');
    if (recipe?.vegan) arr.push('vegan');
    if (recipe?.vegetarian) arr.push('vegetarian');
    if (recipe?.veryHealthy) arr.push('healthy');
    if (recipe?.veryPopular) arr.push('popular');

    setTags(arr);
  }, [recipe]);

  return (
    <Card className='mt-3 recipe-detailed' bg='dark' text='light'>
      <Card.Header>{recipe?.title}</Card.Header>
      <Row noGutters={true}>
        <Col md={4} className='recipe-image card-bg'>
          <img src={recipe?.image} alt={recipe?.title} />
        </Col>
        <Col md={8} className='card-bg'>
          <Card.Body className='text-dark'>
            <Card.Title>
              {`Ready in ${recipe?.readyInMinutes} minutes and serves ${recipe?.servings}`}
            </Card.Title>

            <RecipeButtonGroup recipe={recipe} />
            <Tags tags={tags} />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default RecipeHeader;
