import React from 'react';
import styled from 'styled-components';

// component
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <Styles>
      <h2>About Me</h2>
      <div className="skill-table">{/* skills come here */}</div>
      <p>I'm currently taking a sabbatical!</p>

      <h3>What am I currently focusing?</h3>
      <p>Climbing 🧗🏻‍♀️</p>

      <h3>This is me! - Besides tech</h3>
      <p>
        😽 I love spending time with our sweet cats, Bubbies,{' '}
        <a href="https://www.instagram.com/pnwbubbies/" target="_blank">
          Coop and Tot
        </a>
        .
      </p>
      <p>👩🏻‍🍳 I'm a foodie and love cooking.</p>
      <p>🧗🏻‍♀️ I enjoy climbing.</p>
    </Styles>
  </Layout>
);

const Styles = styled.div``;
