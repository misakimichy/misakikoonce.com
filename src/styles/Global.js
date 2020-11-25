import { css } from 'styled-components';

// theme
import { colors, breakpoints } from './theme';

export default css`
  @import url('https://fonts.googleapis.com/css2?family=Quattrocento+Sans&display=swap');

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Benne Regular', serif;
    line-height: 1.15;
    margin-bottom: 1rem;
    margin: 2.75rem 0 1.05rem;
  }

  h1 {
    font-size: 4.009em;

    @media screen and (max-width: 800px) {
      font-size: 3.052em;
    }
  }

  h2 {
    font-size: 2.957em;

    @media screen and (max-width: 800px) {
      font-size: 2.441em;
    }
  }

  h3 {
    font-size: 2.369em;

    @media screen and (max-width: 800px) {
      font-size: 1.953rem;
    }
  }

  h4 {
    font-size: 1.777em;

    @media screen and (max-width: 800px) {
      font-size: 1.563rem;
    }
  }

  h5 {
    font-size: 1.333em;
  }

  div,
  p,
  a,
  li,
  button {
    font-family: 'Quattrocento Sans', Helvetica, sans-serif;
  }

  a,
  span {
    color: ${colors.fontGreen};
  }

  span:focus {
    outline: none;
  }

  p {
    line-height: 25px;
    word-spacing: 0.5px;
  }

  ul {
    margin: 0;
  }

  li {
    margin-bottom: 8px;
    list-style: circle;
  }

  div,
  a,
  button {
    :focus {
      outline: none;
    }
  }

  a {
    text-decoration: none;
  }

  .container {
    display: flex;
    height: 96vh;
  }

  /* main contents' styling */
  /* projects */
  .main-container {
    width: calc(100vw - 25%);
    padding: 0 48px 8px 48px;

    overflow-x: auto;
  }

  .project-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(336px, 336px));
    gap: 32px;
    -webkit-box-pack: center;
    justify-content: center;

    width: 100%;
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

  .date {
    font-size: 18px;
    margin-bottom: 16px;
  }

  .title {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .stack-tag {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 24px;
    a {
      :first-child {
        margin-left: 8px;
      }
    }
  }

  .to-home {
    margin-bottom: 40px;
  }

  .tagged-list {
    list-style: none;
  }

  .list-names {
    display: block;
    margin-bottom: 8px;

    :hover {
      text-decoration: underline;
    }

    :focus {
      color: ${colors.neonGreen};
    }
  }

  code {
    background-color: ${colors.codeBackground};
    color: ${colors.white};
    font-weight: bold;
    border-radius: 3px;

    padding: 2px 5px;
  }

  .link {
    color: ${colors.black};
    border-bottom: 1px solid ${colors.fontGreen};

    :hover {
      border-bottom: 1px solid ${colors.fontGreen};
    }
    :focus {
      color: ${colors.neonGreen};
      border-bottom: 1px solid transparent;
    }
  }

  /* Card styling */
  .tag-wrapper {
    display: flex;
    div {
      margin-right: 8px;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h4 {
      color: ${colors.darkGrey};
      margin-top: 8px;
      margin-bottom: 8px;
    }

    p {
      color: ${colors.darkGrey};
      margin-bottom: 16px;
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
    .main-container {
      width: 90%;
    }
    .project-card {
      margin: 0 8px 10px 8px;
    }
  }

  @media screen and (max-width: 800px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    .main-container {
      position: sticky;
      top: 0;

      width: 80%;
      height: 92vh;
      overflow: unset;
    }

    .project-container {
      width: unset;
    }
  }

  @media screen and (max-width: 640px) {
    .main-container {
      height: calc(93vh - 333px);
      padding: 0 32px;
    }

    .project-container {
      display: flex;
      flex-direction: column;
      padding: 0;
    }
  }

  @media screen and (max-width: 480px) {
    .title {
      font-size: 30px;
    }
`;
