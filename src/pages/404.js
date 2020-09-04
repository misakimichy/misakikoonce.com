import React from 'react';
import { Link } from 'gatsby';

// component
import Layout from '../components/Layout';

const NotFound = () => (
  <Layout>
    <h2>404 Page Not Found</h2>
    <p>Sorry, I couldn't find the page.</p>
    {typeof window !== 'undefined' &&
      <ul style={{listStyle: 'none'}}>
        <li>
          <Link to='/'>Back Home</Link>
        </li>
        <li>
          <Link to='/projects'>Check projects</Link>
        </li>
        <li>
          <Link to='/writings'>Check writings</Link>
        </li>
        <li>
          <Link to='/tags'>Check tags</Link>
        </li>
      </ul>
    }
  </Layout>
);

export default NotFound;
