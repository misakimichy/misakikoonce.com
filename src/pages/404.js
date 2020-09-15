import React from 'react';
import { Link } from 'gatsby';

// component
import Layout from '../components/Layout';

const NotFound = () => (
  <Layout>
    <h2>404 Page Not Found</h2>
    <h5>Sorry, I couldn't find the page.</h5>
    {typeof window !== 'undefined' &&
      <ul style={{listStyle: 'none'}}>
        <li style={{marginBottom: '16px'}}>
          <Link to='/'>← Go Home</Link>
        </li>
        <li>
          <Link to='/projects'>👉 Check project list</Link>
        </li>
        <li>
          <Link to='/writings'>👉 Check writing list</Link>
        </li>
        <li>
          <Link to='/tags'>👉 Check tag list</Link>
        </li>
      </ul>
    }
  </Layout>
);

export default NotFound;
