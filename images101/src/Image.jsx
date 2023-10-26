import React from 'react'

const Image = ({src, caption}) => {
  return (
    <div className="imageContainer">
      <img src={src} />
      <figcaption>{caption}</figcaption>
    </div>
  );
}

export default Image