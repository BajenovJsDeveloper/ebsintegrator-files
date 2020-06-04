import React from 'react';
import './main.scss';
import {useState,useEffect} from 'react';

import Api from './Api.js';
import media from './media.js';
import PopupContainer from './PopupContainer.jsx';
import PhotosContainer from './PhotosContainer.jsx';




const LARGE = 1;
const USER_NAME = 2;
const CR_DATE = 3;
const LIKES = 4;

const Per_page=12;
const Page=1;




function Main() {

  const [photos,setPhotos] = useState([]);
  const [popup,setPopup] = useState(false);
  const [curPhotoId,setCurPhotoId] = useState(null);

  useEffect(()=>{
    
    const Access_key='VUpdi2Xa2qT3WMtB_TvX0LpAVUSBzWPXG12cGyBH4MM';
    const url='https://api.unsplash.com/photos?page='+Page+'&per_page='+Per_page+'&client_id='+Access_key;
      Api.getPhotos(url).then(resp =>{
        setPhotos(resp);
      })
  },[])

  const imageClick = (e) => {
    let imageId = e.target.dataset.id;
    setPopup(true);
    setCurPhotoId(imageId);
  }

  const closePopupClick = () => {
    setPopup(false);
  }
  const nextClick = () => {
    if(curPhotoId < Per_page-1) setCurPhotoId(Number(curPhotoId)+1);
  }
  const prevClick = () =>{
    if(curPhotoId > 0) setCurPhotoId(Number(curPhotoId)-1);
  }

  return (
    <div className='main'>
      { popup && <div className='popup-background'></div> }
      { popup && <PopupContainer photo={photos[curPhotoId][LARGE]} 
                                 closeClick={closePopupClick}
                                 nextClick={nextClick}
                                 prevClick={prevClick}
                                 createdDate={photos[curPhotoId][CR_DATE]}
                                 likes={photos[curPhotoId][LIKES]}
                                 userName={photos[curPhotoId][USER_NAME]}/>
      }
      <header>
        <div className='header-block'>
          <div className='image-block'>
              <div className='inst-icon'>
                <img src={media.iconInstagram} alt='iconInstagram'/>
              </div>
              <div className='inst-logo'>
                <img src={media.instagramImg} alt='instagramImg'/>
              </div>  
          </div>
          <div className='search-block'>
            <input type='text' placeholder='search' className='form-control'/>
          </div>
          <div className='icons-block 1'>
            <img src={media.iconCompas} alt='iconCompas'/>
            <img src={media.iconHeart} id='heart' alt='iconHeart'/>
            <img src={media.iconUser} alt='iconUser'/>
          </div>
        </div> 
      </header>
      <section className='main-section'>
        <div className='container content-header'>
          <div className='info-header'>
            <div className='info-logo-ebs'>
              <img src={media.iconEBS} alt='iconEBS'/>
            </div>
            <section className='description'>
              <h3>ebsintegrator</h3>
              <div className='first-line'>
                  <div className='item'>
                    <p><span><b> 48 </b></span>posts</p>
                  </div>
                  <div className='item'>
                    <p><span><b> 113 </b></span>followers</p>
                  </div>
                  <div className='item'>
                    <p><span><b> 130 </b></span>following</p>
                  </div>
              </div>
              <div className='second-line'>
                <p>Followed by <b>neluarseni, kiselev_grigor, vasile.diaconuu</b> +16 more</p>
              </div>
            </section>
          </div>
          <div className='bookmarks-block'>
            <div className='posts active'>
              <p><img src={media.postSVG} alt='postSVG'/> posts </p>
            </div>
            <div className='tagged'>
              <p><img src={media.tagedSVG} alt='tagedSVG'/> tagged </p>
            </div>
          </div>
          <PhotosContainer photos={photos} photoClick={imageClick}/> 
        </div>  
      </section>
      <footer className='footer'></footer>
    </div>
  );
}

export default Main;
