import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

interface TagsProps {
  tags: Array<string>;
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return tags ? (
    <div className='mt-2 text-center'>
      {tags.map((tag, index) => (
        <div key={index} className='mr-2 d-inline'>
          <FontAwesomeIcon icon={faTag} />
          <p className='d-inline'>{tag}</p>
        </div>
      ))}
    </div>
  ) : null;
};

export default Tags;
