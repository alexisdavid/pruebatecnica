// **production
// **development
// **testing
// **productionapi
// "homepage": "URL DE LA PAGINA", //poner un package.json
export const productionMode = 'development';

let pathApiBase
let pathImages
let pathBase
let pathLogOutBase

switch (productionMode) {
    case 'development':
        pathApiBase ="http://127.0.0.1:8080/api/";
        pathImages ="http://127.0.0.1:8080/";
        // pathImages = 'https://URL_DEL_BACK/';
        pathBase = ''
        pathLogOutBase = '/'
        break;
    case 'production':
        pathApiBase = 'https://URL_DEL_API/';
        pathImages =  'https://URL_DEL_API/';
        pathBase = '/'
        pathLogOutBase = '/'
        break;
    case 'productionapi':
  

        
    default:
        pathApiBase = 'https://URL_DEL_API/';
        pathImages = 'https://URL_DEL_API/';
        pathBase = ''
        pathLogOutBase = '/'
      
        break;
        
}
export const pathApi=pathApiBase;
export const path=pathBase;
export const pathLogOut=pathLogOutBase;
export const pathImagesb=pathImages;
