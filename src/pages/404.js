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
          <Link to='/'>Back Home</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/writings'>Writings</Link>
        </li>
        {/* <li>
          <Link to='/tags'>Check tags</Link>
        </li> */}
      </ul>
    }
  </Layout>
);

export default NotFound;
