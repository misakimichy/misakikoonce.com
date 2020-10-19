import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

// component
import ProjectCard from './projectCard';

const ProjectSection = ({ cards }) => (
  <Styles>
    <h2>Projects</h2>
    {cards.map(card => {
      const { name, path, description, stackTags, thumbnail } = card;

      return <ProjectCard
        key={name}
        className="project-card"
        title={name}
        url={path}
        description={description}
        stackTags={stackTags}
        thumbnail={thumbnail}
      />
    })}
  </Styles>
)

export default ProjectSection;

const Styles = styled.div`
  @media screen and (max-width: 800px) {
    margin-bottom: 88px;
  }
`;