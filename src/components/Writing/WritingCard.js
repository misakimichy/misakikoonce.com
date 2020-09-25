import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// component
import Tag from '../Tag/tag';

// style
import { colors } from '../../styles/theme';

const WritingCard = ({
  title,
  url,
  description,
  tags = [],
  thumbnail
}) => (
    <Styles>
      <Link to={url} className="card-content">
        <h4>{title}</h4>
        <p>{description}
          <span className="read-more">...read more</span>
        </p>
      </Link>
      <div className="tag-wrapper">
        {tags.map(tag =>
          <Tag key={tag} name={tag} />
        )}
      </div>
    </Styles>
  );

export default WritingCard;

WritingCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};

WritingCard.defaultProps = {
  tags: []
};

const Styles = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid ${colors.paleGrey};
  border-radius: 4px;

  padding: 24px;
  margin-bottom: 16px;
  
  :hover {
    box-shadow: ${colors.boxShadow};
  }
`;