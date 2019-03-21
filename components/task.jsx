import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ title, completed }) => (
  <li>
    <label>
      <input type="checkbox" checked={completed}/>
      {title}
    </label>
  </li>
);

Task.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool
};

Task.defaultProps = {
  completed: false
};

export default Task;