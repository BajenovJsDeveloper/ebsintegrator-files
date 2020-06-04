import React from 'react';

const SMALL = 0;

function PhotosContainer({photos,photoClick}){

  const handleImageClick = (e) => {
     photoClick(e);
  }
  return(
          <div className='container content-images'>
            {
              photos.map((photo,key) =>(
                <div className='photo-block' key={key}>
                   <img src={photo[SMALL]} onClick={(e) => handleImageClick(e)} data-id={key} alt='photo_small'/>
                </div>
                ))
            }          
          </div> 
        )
}

export default PhotosContainer