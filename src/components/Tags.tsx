import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

interface TagsProps {
  warnings: Array<string>;
}

const Tags: React.FC<TagsProps> = ({ warnings }) => {
  return (
    <div className='d-inline'>
      {warnings.map((warning, index) => (
        <div key={index} className='mr-2 d-inline'>
          <FontAwesomeIcon icon={faTag} />
          <p>{warning}</p>
        </div>
      ))}
    </div>
  );
};

export default Tags;
