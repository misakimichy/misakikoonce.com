import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

// component
import WritingCard from './WritingCard';

// theme
import { colors } from '../../styles/theme';

const WritingsSection = ({ cards }) => (
  <Styles>
    <h2 className="section-title">Writings</h2>
      {cards.map(card => {
        const { name, path, description, tags, thumbnail } = card;
        return <WritingCard
          key={name}
          className="project-card"
          title={name}
          url={path}
          description={description}
          tags={tags}
          thumbnail={thumbnail}
        />
      })}
</Styles>
);

export default WritingsSection;

const Styles = styled.div`
  padding-bottom: 48px;
  margin-bottom: 48px;
  border-bottom: 1px solid ${colors.paleGrey};
`;