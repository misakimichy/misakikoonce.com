import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

// component
import Writings from '../../pages/writings';
import WritingCard from './WritingCard';

// theme
import { colors } from '../../styles/theme';

const WritingsSection = ({ cards }) => (
  <Styles>
    <h1 className="section-title">Writings</h1>
      {cards.map((card, index) =>
        <WritingCard
          key={index}
          className="project-card"
          title={card.name}
          url={card.path}
          description={card.description}
          tags={card.tags}
          thumbnail={card.thumbnail}
        />
      )}
</Styles>
);

export default WritingsSection;

const Styles = styled.div`
  padding-bottom: 48px;
  margin-bottom: 48px;
  border-bottom: 1px solid ${colors.paleGrey};
`;