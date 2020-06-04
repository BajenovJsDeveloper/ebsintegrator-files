//---Api to get photos from URL
import * as axios from 'axios';

let Api = {
	getPhotos:(url) => {
		return axios.get(url).then(response => {
        	return response.data.map(i => ([i.urls.small, 
                                     		i.urls.regular, 
                                    		i.user.username,
                                     		i.created_at.slice(0,10),
                                     		i.likes]));
      });


	}
}

export default Api