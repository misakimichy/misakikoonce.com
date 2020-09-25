import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { kebabCase } from "lodash";

// component
import ProjectCard from './projectCard';

const ProjectSection = ({ cards }) => (
  <Styles>
    <h2>Projects</h2>
    {cards.map(card => {
      const { name, path, description, tags, thumbnail } = card;
      return <ProjectCard
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
)

export default ProjectSection;

const Styles = styled.div``;