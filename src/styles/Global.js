import { css } from 'styled-components';

// theme
import { colors, breakpoints } from './theme';

export default css`
  h1 {
    font-size: 2rem;
    margin-bottom: 40px;

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

  .to-home {
    margin-bottom: 40px;
  }

  .tagged-list {
    list-style: none;
  }

  pre, code {
    background-color: ${colors.darkGrey};
    color: ${colors.neonGreen};
  }

  code {
    padding: 3px 5px;
  }

  pre {
    padding: 16px;
    border-radius: 4px;
    overflow: auto;
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
      width: calc(100vw - 28%);
      padding: 40px;
    }
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