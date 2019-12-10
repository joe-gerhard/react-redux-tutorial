import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';

export const Post = ({ getData, articles }) => {
  useEffect(() => {
    getData()
  }, [getData])

  return (
    <ul>
      {articles.map(el => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  }
}

export default connect(
  mapStateToProps,
  { getData }
) (Post);
