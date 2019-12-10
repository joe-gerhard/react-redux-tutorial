import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
}

const ConnectedForm = ({ addArticle }) => {
  const [ state, setState ] = useState({
    title: ""
  });

  const handleChange = event => {
    setState({ [event.target.id]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    const { title } = state;
    addArticle({ title });
    setState({ title: "" })
  }

  const { title } = state
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <button type="submit">SAVE</button>
    </form>
  )
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm)

export default Form;
