import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// component
import Tag from '../Tag/tag';

// style
import { colors } from '../../styles/theme';

const ProjectCard = ({
  title,
  url,
  description,
  tags = [],
  thumbnail
}) => (
    <Styles>
      <img src={thumbnail} alt="project thumbnail" />
      <div className="card-content" style={{height: '250px'}}>
        {typeof window !== 'undefined' && 
          <Link to={url}>
            <h4>{title}</h4>
            <p>{description}
              <span className="read-more">...read more</span>
            </p>
          </Link>
        }
        <div className="tag-wrapper">
          {tags.map(tag =>
            <Tag key={tag} name={tag} />
          )}
        </div>
      </div>
    </Styles>
  );

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};

ProjectCard.defaultProps = {
  tags: []
};

const Styles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 16px;
  margin-bottom: 16px;
  
  :hover {
    box-shadow: 1px 1px 10px 8px rgba(216,216,216,0.5);
  }

  img {
    width: 50%;
    margin-right: 24px;
  }
`;