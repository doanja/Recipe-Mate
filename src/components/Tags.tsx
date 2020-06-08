import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return tags ? (
    <div className='text-center'>
      {tags.map((tag, index) => (
        <div key={index} className='mr-2 d-inline'>
          <FontAwesomeIcon icon={faTag} />
          <small className='d-inline'>{tag}</small>
        </div>
      ))}
    </div>
  ) : null;
};

export default Tags;
