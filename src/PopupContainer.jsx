import React from 'react';
import media from './media.js';



function PopupContainer({photo,closeClick,nextClick,prevClick,userName = '',createdDate = 'No data',likes = 0}){

  const handleCloseClick = () => {
    closeClick();
  }
  const handleNextClick = () => {
    nextClick();
  }
  const handlePrevClick = () => {
    prevClick();
  }

  return (
          <div className='popup-container'>
            <div className='close-button' onClick={handleCloseClick}>
              <span>&#10005;</span>
            </div>
            <div className='next-btn' onClick={handlePrevClick}>
              <div className='arrow-left'> </div>
            </div>
            <div className='prev-btn' onClick={handleNextClick}>
              <div className='arrow-right'> </div>
            </div>
            <div className='img-p-block'>
              <img src={photo} alt='photo_large'/>
            </div>
            <div className='img-discription-block'>
              <div className='img-d-header'>
                <img src={media.iconEBS} alt='iconEBS'/>
                <p>ebsintegrator <span>&#8226;</span> Following</p>
              </div>
              <p className='line'></p>
              <div>
                <p><b>User:</b><br/><i>{userName}</i></p>
                <p><b>Created date:</b><br/>{createdDate}</p>
                <p><b>Likes:</b><br/>{likes}</p>
              </div>
            </div>
          </div>
         )
}

export default PopupContainer