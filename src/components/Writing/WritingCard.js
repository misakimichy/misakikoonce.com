import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// component
import Tag from '../Tag';

// style
import { colors } from '../../styles/theme';

const WritingCard = ({
  title,
  url,
  description,
  tags = [],
  thumbnail
}) => (
    <Styles className="card-content-wrapper">
      <Link to={url} className="no-underline">
        <h4 style={{marginBottom: '16px'}}>{title}</h4>
        <p style={{color: `${colors.darkGrey}`, marginBottom: '32px'}}>{description}
          <span style={{color: `${colors.fontGreen}`, marginLeft: '5px'}}>...read more</span>
        </p>
      </Link>
      <div className="tag-wrapper">
        {tags.map((tag, index) =>
          <Tag key={index} name={tag} />
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
  width: 98%;

  padding: 24px;
  margin-bottom: 16px;
  
  :hover {
    box-shadow: ${colors.boxShadow};
  }
`;