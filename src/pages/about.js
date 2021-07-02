import React from 'react';
import styled from 'styled-components';

// component
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <Styles>
      <h2>About Me</h2>
      <div className="skill-table">{/* skills come here */}</div>
      <p>
        I decided to change my career about three years ago to find a career that I can feel
        fulfilled. I self-taught HTML, CSS, vanilla JavaScript and React. After I spent a year
        self-teaching programming, I joined a full-time coding bootcamp to gain experience working
        with a team. I pair-programmed a few applications a day, worked on a solo project every
        Friday, and created two applications with 4 peers with vanilla JavaScript, React, and C#.
        While I was on the bootcamp, I found a cool tech startup called At BrainSquall, I learned a
        lot there and fell in love with the vibe of startup. I've been enjoying the startup life
        since then!
        <a href="https://www.brainsquall.co/" target="_blank">
          BrainSquall
        </a>
        , and I joined their engineering team as a Software Engineer intern.
      </p>

      <h3>What am I currently learning?</h3>
      <p>More about backend + server</p>

      <h3>This is me! - Besides tech</h3>
      <p>
        😽 I love spending time with my twin kittens,{' '}
        <a href="https://www.instagram.com/pnwbubbies/" target="_blank">
          Coop and Tot
        </a>
        .
      </p>
      <p>👩🏻‍🍳 I'm a foodie. I'm into Korean food lately and I enjoy making kimchi at home.</p>
      <p>🧗🏻‍♀️ I enjoy climbing even though I'm afraid of height.</p>
      <p>🎸 I enjoy playing a guitar. I started learning from 2021.</p>
    </Styles>
  </Layout>
);

const Styles = styled.div``;
