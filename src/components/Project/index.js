import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// component
import Tag from '../Tag';

// style
import { colors } from '../../styles/theme';

const ProjectSection = ({
  title,
  url,
  description,
  tags = [],
  thumbnail
}) => (
    <Styles className="project-card">
      <img className="card-thumbnail" src={thumbnail} alt="project thumbnail" />
      <div style={{width: '98%'}}>
        <Link to={url} className="no-underline">
          <h2>{title}</h2>
          <p style={{color: 'hsla(0,0%,0%,0.8)'}}>{description}
            <span style={{color: `${colors.fontGreen}`, marginLeft: '5px'}}>...read more</span>
          </p>
				</Link>

        {tags.map((tag, index) =>
          <Tag key={index} name={tag} />
        )}
      </div>
    </Styles>
  );

export default ProjectSection;

ProjectSection.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};

ProjectSection.defaultProps = {
  tags: []
};

const Styles = styled.div``;