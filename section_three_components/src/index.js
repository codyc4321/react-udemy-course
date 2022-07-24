import React from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker';

import CommentDetail from './CommentDetail'


const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="today at 4:45pm"
        text="Nice blog post!"
        image={faker.image.image()} 
      />
      <CommentDetail
        author="Alex"
        timeAgo="today at 2:00am"
        text="nice blog"
        image={faker.image.image()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="yesterday at 5:00pm"
        text="whats up"
        image={faker.image.image()}
      />
    </div>
  )
};

ReactDOM.render(<App/>, document.querySelector('#root'));
