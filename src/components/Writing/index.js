import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// component
import WritingCard from './writingCard';

// theme
import { colors } from '../../styles/theme';

const WritingsSection = ({ cards }) => (
  <Styles>
    <h2>Writings</h2>
    {cards.map((card) => {
      const { name, path, description, stackTags, thumbnail } = card;
      return (
        <WritingCard
          key={name}
          className="project-card"
          title={name}
          url={path}
          description={description}
          stackTags={stackTags}
          thumbnail={thumbnail}
        />
      );
    })}
  </Styles>
);

export default WritingsSection;

const Styles = styled.div`
  padding-bottom: 48px;
  margin-bottom: 48px;
  border-bottom: 1px solid ${colors.paleGrey};
`;
