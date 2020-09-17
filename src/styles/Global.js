import { css } from 'styled-components';

// theme
import { colors, breakpoints } from './theme';

export default css`
  @import url('https://fonts.googleapis.com/css2?family=Quattrocento+Sans&display=swap');

  h1, h2, h3, h4, h5 {
    font-family: 'Benne Regular', serif;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 67.34px;

    @media (max-width: 800px) {
      font-size: 1.8rem;
    }
  }

  h2 {
    font-size: 50.52px;
    word-spacing: 3px;

    @media (max-width: 800px) {
      font-size: 1.6rem;
    }
  }

  h3 {
    font-size: 37.90px;

    @media (max-width: 800px) {
      font-size: 1.4rem;
    }
  }

  /* h4 used for footer */
  h4 {
    font-size: 28.43px;
    line-height: 32px;
  }

  /* h5 user in nav bar */
  h5 {
    font-size: 21.33px;
  }

  div, p, a, li {
    font-family: 'Quattrocento Sans', Helvetica, sans-serif;
  }

  a, span {
    color: ${colors.fontGreen};
  }

  p {
    line-height: 29px;
    word-spacing: 0.5px;
  }

  ul {
    margin: 0;
  }

  li {
    margin-bottom: 8px;
  }
  

  .no-underline {
    text-decoration: none;
  }

  .container {
    display: flex;
    height: 100vh;
  }


  .icon-span {
    margin-left: 10px
  }

  /* main contents' styling */
  /* projects */
  .main-container {
    width: calc(100vw - 25%);
    padding: 8px 48px;

    overflow: auto;
  }

  .project-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(336px, 336px));
    gap: 32px;
    -webkit-box-pack: center;
    justify-content: center;
  
    width: 100%;
  }

  .section-title {
    margin-bottom: 40px;
  }

  .tag-item {
    list-style: none;
    min-width: 50px;
    max-width: 100px;
    height: 30px;
    padding: 8px;
    border: 1px solid ${colors.lightGrey};
    border-radius: 4px;
    margin-right: calc(1.45rem / 2);
  }

  .title {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .to-home {
    margin-bottom: 40px;
  }

  .tagged-list {
    list-style: none;
  }

  code {
    background-color: ${colors.codeBackground};
    color: ${colors.codePink};
    font-weight: bold;
    border-radius: 3px;

    padding: 2px 5px;
  }

  .read-more {
    margin-left: 8px;
  }

  /* Card styling */
  .card-thumbnail {
    width: 290px;
    height: 180px;
    border: 1px solid ${colors.paleGrey};
    border-radius: 4px;
    margin-bottom: 16px;
  }

  .card-content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;

    a {
      h4 {
        color: ${colors.darkGrey};
        margin-top: 8px;
        margin-bottom: 8px;
      }

      p {
        color: ${colors.darkGrey};
        margin-bottom: 32px;
      }
    }
  }

  .tag-wrapper {
    display: flex;
  }

  /* 
      Media Queries
      Default is more than 1024
      800-1024    - tablet landscape
      800-640     - tablet (Sidebar becomes header)
      640-less    - phone landscape & smaller - one column
  */
  @media screen and (max-width: 1024px) {
    .main-container {
      width: 90%;
    }
    .project-card {
      margin: 0 8px 10px 8px;
    }
  }

  @media screen and (max-width: 800px) {
    .main-container {
      width: unset;
    }
    .container {
      flex-direction: column;
      align-items: center;
    }
    .project-container {
      width: unset;
    }
  }

  @media screen and (max-width: 640px) {
    .main-container {
      width: 100%;
    }
  }

  @media screen and (max-width: 480px) {
    .title {
      font-size: 30px;
    }
  
    .stack-tag {
      display: flex;
    }
  }
`;