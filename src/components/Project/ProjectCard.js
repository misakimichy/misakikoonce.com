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
  stackTags = [],
  thumbnail
}) => (
    <Styles tabIndex='0'>
      <img src={thumbnail} alt="project thumbnail" />
      <div className="card-content" style={{height: '100%'}}>
        {typeof window !== 'undefined' && 
          <Link to={url}>
            <h4>{title}</h4>
            <p>{description}
              <span className="read-more" tabIndex='0'>...read more</span>
            </p>
          </Link>
        }
        <div className="tag-wrapper">
          {stackTags.map(tag =>
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
  stackTags: PropTypes.arrayOf(PropTypes.string)
};

ProjectCard.defaultProps = {
  stackTags: []
};

const Styles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  border: 1px solid ${colors.paleGrey};
  border-radius: 4px;

  padding: 24px;
  margin-bottom: 16px;
  
  :hover,
  :focus {
    box-shadow: ${colors.boxShadow};
  }

  img {
    width: 50%;
    margin-right: 24px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;

    img {
      margin-right: 0;
      margin-bottom: 24px;
    }
  }
`;