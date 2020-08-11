import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

const Projects = ({ name }) => (
  <Styles>
    {typeof window !== 'undefined' && <Link to={`/projects/${kebabCase(name)}`}>{name}</Link>}
  </Styles>
);

export default Projects;

const Styles = styled.li``;