import { css } from 'styled-components';

// theme
import { colors, breakpoints } from './theme';

export default css`
  h1 {
    font-size: 2rem;
    margin-bottom: 16px;

    @media (max-width: 800px) {
      font-size: 1.8rem;
    }
  }

  h2 {
    font-size: 1.8rem;
    word-spacing: 3px;
    margin-bottom: 16px;

    @media (max-width: 800px) {
      font-size: 1.6rem;
    }
  }

  h3 {
    font-size: 1.6rem;
    padding-bottom: 8px;

    @media (max-width: 800px) {
      font-size: 1.4rem;
    }
  }

  /* h4 used for footer */
  h4 {
    font-size: 1.4rem;
    line-height: 32px;
    padding-bottom: 4px;
  }

  /* h5 user in nav bar */
  h5 {
    font-size: 1.1rem;
  }

  h6 {
    font-size: 1.1rem;
  }

  p {
    line-height: 29px;
  }

  ul {
    margin: 0;
  }

  .no-underline {
    background-image: none;
  }

  .container {
    display: flex;
    padding: 0px;
    margin: 0px;
  }


  .icon-span {
    margin-left: 10px
  }

  /* main contents' styling */
  /* projects */
  .main-container {
    width: calc(100vw - 25%);
    padding: 48px;
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

  .date {
    font-size: 22px;
    margin-left: 1rem;
  }

  .to-home {
    margin: 1rem 0;
  }

  .responsive-container {
    overflow: hidden;

    border:1px solid ${colors.paleGrey};
    border-radius: 4px;
    box-shadow: 3px 4px 4px 0 rgba(216, 216, 216, 0.5);

    width: 850px;
    height: 550px;

    margin: 40px auto 40px auto;
  }

  .responsive-iframe {
    width: 100%;
    height: 100%;
  }

  .tagged-list {
    list-style: none;
  }

  pre, code {
    background-color: ${colors.backgroundGreen};
  }

  pre {
    padding: 24px;
    border-radius: 4px;
  }

  /* 

  Media Queries comes here

  */
  @media screen and (max-width: 480px) {
    .title {
      font-size: 30px;
    }

    .date {
      font-size: 20px;
    }

    .stack-tag {
      display: flex;
    }
  }

  /* 
      Media Queries
      Default is more than 1024
      800-1024    - tablet landscape
      800-640     - tablet (Sidebar becomes header)
      640-less    - phone landscape & smaller - one column
  */
  @media screen and (max-width: 1024px) {
    .project-card {
      margin: 0 8px 10px 8px;
    }
  }

  @media screen and (max-width: 800px) {
    .container {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 640px) {
    .container {
      flex-direction: column;
      height: 100%;
    }

    .main-container {
      padding: 40px;
    }
  }
`;