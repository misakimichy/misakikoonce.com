import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// component
import Tag from '../Tag';

// style
import '../../styles/styles.css';

const Card = ({
  title,
  url,
  description,
  tags = [],
  thumbnail
}) => (
    <div className="project-card">
      <img className="card-thumbnail" src={thumbnail} alt="project thumbnail" />
      <div style={{width: '98%'}}>
        <Link to={url} className="no-underline">
          <h2>{title}</h2>
          <p style={{color: 'hsla(0,0%,0%,0.8)'}}>{description}
            <span style={{color: '#1ca086', marginLeft: '5px'}}>...read more</span>
          </p>
				</Link>

        {tags.map((tag, index) =>
          <Tag key={index} name={tag} />
        )}
      </div>
    </div>
  );

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};

Card.defaultProps = {
  tags: []
};