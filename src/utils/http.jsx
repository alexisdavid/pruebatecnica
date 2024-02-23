/**
 *  @version 1.0.0
 *  @author Alexis
 *  @description Cliente HTTP para todas las peticiones Web basada en superagent: GET, POST, DELETE, PUT, PATCH
 *  @param {String} url: "/EndPoint"
 *  @param {Object} data: Payload
*/

import request from "superagent";
import { decryptString } from "./encrypt";
import {pathApi} from "../configuracion"
// Web API URL
const baseUrl =pathApi;

function getToken() {

    let tkn = sessionStorage.getItem('token');
    if (tkn!= null) {
        tkn = decryptString(JSON.parse(tkn))
        tkn = JSON.parse(tkn)
      return tkn!= null ? tkn.token : '';
    }
    return ''
}

function makeRequest(method, url, data) {
    const token = getToken();
    return request(method, baseUrl + url)
        .send(data)
        .set({'Accept': 'application/json', 'Authorization': 'Bearer ' + token})
        .then(response => {
            return { result: response.body, statusCode: response.status };
        })
        .catch(error => {
            return { message: error.message, statusCode: 503 };
        });
}
class Request {
    get(url, data) {
        return makeRequest('get', url, data);
    }

    post(url, data) {
        return makeRequest('post', url, data);
    }

    delete(url, data) {
        return makeRequest('delete', url, data);
    }

    put(url, data) {
        return makeRequest('put', url, data);
    }

    patch(url, data) {
        return makeRequest('patch', url, data);
    }
}


// class Request {
    
//     get(url, data) {
//        let tkn=sessionStorage.getItem('authToken')
//         let  token=''
//         if (tkn) {
//              token = decryptString(tkn);
//         }
        
        
//         const result = request
//             .get(baseUrl + url)
//             .query(data)
//             .set({'Accept': 'application/json','Authorization': 'Bearer ' + token})
//             .then(response => {
//                 return { result: response.body, statusCode: response.status };
//             })
//             .catch(error => {
//                 const { status } = error;
//                 if (status >= 400) {
//                     return { message: error.message, statusCode: status };
//                 }
//                 return { message: error.message, statusCode: 503 };
//             });
//         return result;
//     }

//     post(url, data) {
//        let tkn=sessionStorage.getItem('authToken')
//         let  token=''
//         if (tkn) {
//             token = decryptString(tkn);
//        }
//         const result = request
//             .post(baseUrl + url)
//             .set({'Accept': 'application/json','Authorization': 'Bearer ' + token})
//             .send(data)
//             .then(response => {
   
//                 return { result: response.body, statusCode: response.status };
//             })
//             .catch(error => {
//                 return { message: error.message, statusCode: 503 };
//             });
//         return result;
//     }

//     delete(url, data) {
//        let tkn=sessionStorage.getItem('authToken')
//         let  token=''
//         if (tkn) {
//             token = decryptString(tkn);
//        }
//         const result = request
//             .delete(baseUrl + url)
//             .send(data)
//             .set({'Accept': 'application/json','Authorization': 'Bearer ' + token})
//             .then(response => {
//                 return { result: response.body, statusCode: response.status };
//             })
//             .catch(error => {
//                 return { message: error.message, statusCode: 503 };
//             });
//         return result;
//     }

//     put(url, data) {
//        let tkn=sessionStorage.getItem('authToken')
//         let  token=''
//         if (tkn) {
//             token = decryptString(tkn);
//        }
//         const result = request
//             .put(baseUrl + url)
//             .send(data)
//             .set({'Accept': 'application/json','Authorization': 'Bearer ' + token})
//             .then(response => {
//                 return { result: response.body, statusCode: response.status };
//             })
//             .catch(error => {
//                 return { message: error.message, statusCode: 503 };
//             });
//         return result;
//     }

//     patch(url, data) {
//         let tkn=sessionStorage.getItem('authToken')
//         let  token=''
//         if (tkn) {  token = decryptString(tkn); }
//         const result = request
//             .patch(baseUrl + url)
//             .send(data)
//             .set({'Accept': 'application/json','Authorization': 'Bearer ' + token})
//             .then(response => {
//                 return { result: response.body, statusCode: response.status };
//             })
//             .catch(error => {
//                 return { message: error.message, statusCode: 503 };
//             });
//         return result;
//     }

// }

export default Request;
