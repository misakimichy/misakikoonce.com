import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const NotFound = () => (
  <Layout>
    <h1>404 Page Not Found</h1>
    <p>Sorry, I couldn't find the page.</p>
    <ul style={{listStyle: 'none'}}>
      <li>
        <Link to='/'>Back Home</Link>
      </li>
      <li>
        <Link to='/projects'>Check projects</Link>
      </li>
      <li>
        <Link to='/writing'>Check writings</Link>
      </li>
      <li>
        <Link to='/tags'>Check tags</Link>
      </li>
    </ul>
  </Layout>
);

export default NotFound;