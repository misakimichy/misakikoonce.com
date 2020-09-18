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
      <img className="card-thumbnail" src={thumbnail} alt="project thumbnail" />
      <div className="card-content-wrapper">
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border: 1px solid ${colors.paleGrey};
  border-radius: 4px;
  padding: 16px;
  
  :hover {
    box-shadow: ${colors.boxShadow};
  }
`;