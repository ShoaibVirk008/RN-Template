import { endPoints } from "../constants";
import {api} from "../utilities";

export const register = async ({ email, password, firstName, lastName, userName, birthDate, avatar }) => {
    let response = null
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('userName', userName)
    formData.append('birthDate', birthDate)
    avatar ? formData.append('avatar', avatar) : null
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }
    const {url_1}=endPoints.register
    let url = `${url_1}`
    __DEV__ && console.log('register \n\n url: ', url, '\n\n data: ', formData, '\n\n config: ', config,)
    await api.post(url, formData,config)
        .then(async responseJson => {
            __DEV__ && console.log('response: ', responseJson.data);
            if (responseJson.data) {
                //handle flow after register
                    response = responseJson.data
            }
        })
        .catch(error => {
            
        });
    return response
};

export const login = async ({ email, password }) => {
    let response = null
    let data = {
        email,
        password
    }
    const {url_1}=endPoints.login
    let url = `${url_1}`
    __DEV__ && console.log('login \n\n url: ', url, 'data: ', data);
    await api.post(url, params)
        .then(async responseJson => {
            __DEV__ && console.log('response', responseJson.data);
            if (responseJson.data) {
               //handle flow after login
               response = responseJson.data
            }
        })
        .catch(Error => {
           
        });
    return response
};

