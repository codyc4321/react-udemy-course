import React from 'react';
import {BrowserRouter, HashRouter, Route, Link} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';


const PageOne = () => {
  return (
    <div>
      Page 1
      <Link to="/pagetwo">Page 2</Link>
    </div>
  )
}

const PageTwo = () => {
  return (
    <div>
      Page 2
      <button>Click me</button>
      <Link to="/">Page 1</Link>
    </div>
  )
}

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
