import React from 'react';

import ImageList from './ImageList';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import axios from 'axios';


const PHOTOS_URLS = [
  'https://www.pexels.com/photo/photo-of-tiger-and-cub-lying-down-on-grass-2541239/',
  'https://www.pexels.com/photo/close-up-photography-of-tiger-792381/',
  'https://www.pexels.com/photo/brown-and-black-tiger-lying-on-ground-3777200/',
]

class App extends React.Component {

  state = {images: PHOTOS_URLS};

  // onSearchSubmit = async (term) => {
  //   const response = await unsplash.get('/search/photos', {
  //     params: {query: term},
  //   });
  //
  //   console.log(response.data.results);
  //   this.setState({images: response.data.results});
  // }

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.pexels.com/v1/search', {
      params: {query: 'Tigers'},
      headers: {
        Authorization: '563492ad6f91700001000001e2666acce9964b20979109a9599e0867',
      }
    });

    console.log(response.data);
    console.log(response.data.results);
    this.setState({images: response.data.results});
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={PHOTOS_URLS} />
      </div>
    )
  }
}


export default App;
