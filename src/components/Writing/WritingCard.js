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
    <Styles>
      <div className="card-content-wrapper" style={{width: '98%'}}>
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
  justify-content: flex-start;
  align-items: center;

  border: 1px solid ${colors.paleGrey};
  border-radius: 4px;
  padding: 16px;
  
  :hover {
    box-shadow: 2px 2px 4px 0 rgba(216, 216, 216, 0.5);
  }

  .card-thumbnail {
    width: 290px;
    height: 180px;
    border: 1px solid ${colors.paleGrey};
    border-radius: 4px;
    margin-bottom: 16px;
  }

  .card-content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
  
    .tag-wrapper {
      display: flex;
    }
  }
`;