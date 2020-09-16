---
path: "/writings/how-to-query-multiple-markdown-files-in-the-same-component-in-gatsby"
date: "2020-09-16"
title: "How to query multiple markdown files in the same component in Gatsby"
tags: ["Gatsby", "React"]
description: "I explain how to query multiple markdown files in the same component in Gatsby."

---

### Intro
When I was making my portfolio, it took a while to figure out how to query two markdown files in the same component. What I wanted to do was passing queried data of writings and projects down to the WritingsSection and ProjectSection component instead of using staticQuery in each of the components. 

### Why was it hard?
I thought I could get an object with two allMarkdownRemark data objects to add filter of fileAbsolutePath like this:

```
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex: "/(markdown-projects)/.*\\.md$/"} },
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            date
            description
          }
        }
      }
    }
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(markdown-writings)/.*\\.md$/"}},
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            date
            description
          }
        }
      }
    }
  }
`;

```

Expected data object was:
```
  { allMarkdownRemark: {...}, allMarkdownRemark: {...} }
```

But, of course, the data object became `undefined` because the same key name cannot exist in an object.


### How to solve this
To solve this problem, you can name the allMarkdownRemark object inside the pageQuery.

You can just add a key name with a colon before allMarkdownRemark:
```
  query {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex: "/(markdown-projects)/.*\\.md$/"} },
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            date
            description
          }
        }
      }
    }
    writings: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(markdown-writings)/.*\\.md$/"}},
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            date
            description
          }
        }
      }
    }
  }

```

The data object becomes:
```
 { projects: {...}, writings: {...} };
```


### Conclusion
Add a key name for each allMarkdownRemark object when you query multiple markdown files in the same component.