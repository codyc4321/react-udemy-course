import React from 'react';


const ImageList = props => {

  const images = props.images.map((url) => {
    return <img src={url} />
  })

  return <div>{images}</div>;
};

// const ImageList = props => {
//
//   const images = props.images.map((image) => {
//     return <img src={image.urls.regular} />
//   })
// 
//   return <div>{images}</div>;
// };


export default ImageList;
