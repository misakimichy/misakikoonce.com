import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { kebabCase } from "lodash";

// component
import ProjectCard from './ProjectCard';

const ProjectSection = ({ cards }) => {
  return (
    <Styles>
      <h2 className="section-title">Projects</h2>
      <ul className="project-container">
        {cards.map((card, index) =>
          <ProjectCard
            key={index}
            className="project-card"
            title={card.name}
            url={card.path}
            description={card.description}
            tags={card.tags}
            thumbnail={card.thumbnail}
          />
        )}
      </ul>
    </Styles>
  )
}

export default ProjectSection;

const Styles = styled.div``;