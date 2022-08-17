import { add_img } from "../reducer"

export const fetchImages = () =>{
    return function(dispatch){
        let data_gallery = fetch('https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9')
            .then(response => response.json());

        for (let i = 0; i < data_gallery.length; i++) {
            gallery_mas.push(data_gallery[i].urls.regular + '*' + data_gallery[i].user.name);
        }

        dispatch(add_img(gallery_mas));
    }
}