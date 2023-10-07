import React, { Component } from "react";

import Article from "../components/article";

async function hashnode_gql(query, variables={}) {
    const data = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables
        })
    });
  
    return data.json();
}

const GET_USER_ARTICLES = `
  query GetUserArticles($page: Int!, $username: String!) {
      user(username: $username) {
          publication {
              posts(page: $page) {
                  title
                  brief
                  slug
              }
          }
      }
  }
`;

export default class Articles extends Component {
    constructor(props) {
      super(props);
      this.state = {
        articles: [],
      };
    }
  
    componentDidMount() {
      // Make the GraphQL request here
      hashnode_gql(GET_USER_ARTICLES, { username: 'pugsedo', page: 0 })
        .then(result => {
          const articles = result.data.user.publication.posts;
          this.setState({ articles });
        })
        .catch(error => {
          console.error('Error fetching articles:', error);
        });
    }
  
    render() {
      return (
        <div className="blog">
          {this.state.articles.map((article) => (
            <Article key={article.slug} articleData={article} />
          ))}
        </div>
      );
    }
  }