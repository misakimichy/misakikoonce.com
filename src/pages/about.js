import React from 'react';
import styled from 'styled-components';

// component
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <Styles>
      <h2>About Me</h2>
      <div className="skill-table">
        {/* skills come here */}
      </div>
      <p>I decided to change my career about two years ago to find a career that I can enjoy. I self-taught HTML, CSS, vanilla JavaScript and React. After I spent a year self-teaching programming, I joined a full-time coding bootcamp to gain experience working with a team. I pair-programmed a few applications a day, worked on a solo project every Friday, and created two applications with 4 peers with vanilla JavaScript, React, and C#. While I was on the cootcamp, I found a cool tech startup called <a href="https://www.brainsquall.co/">BrainSquall</a>, and I joined their engineering team as a Software Engineer intern.</p>

      <h3>What am I currently learning?</h3>
      <p>UI design, GarphQL, sustainable and clean code!</p>

      <h3>This is me! - Besides tech</h3>
      <p>😽I like spending time with my kittens, twin boys names <a href="https://www.instagram.com/pnwbubbies/">Coop and Tot</a>.</p>
      <p>👩🏻‍🍳I'm a foodie. I'm into Korean food lately and learning baking.</p>
      <p>🧗🏻‍♀️I love bouldering! I'm afraid of height, so my legs get shaky every time I climb!</p>
    </Styles>
  </Layout>
);

const Styles = styled.div``;