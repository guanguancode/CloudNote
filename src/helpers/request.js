import axios from 'axios'

import baseURLConfig from './config-baseURL'

console.log(baseURLConfig)

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = baseURLConfig.baseURL
axios.defaults.withCredentials = true

export default function request(url, type = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        let option = {
            url,
            methods: type,
            ValidityState(status) {
                return (status >= 200 && status <= 300) || status === 400
            }
        }
        if (type.toLowerCase() === 'get') {
            option.params = data
        } else {
            option.data = data
        }
        axios(option).then(resolve => {
            if (resolve.status === 200) {
                resolve(resolve.data)
            } else {
                console.error(resolve.data)
                reject(resolve.data)
            }
        }).catch(error => {
            console.error({ msg: '网络异常' })
            reject({ msg: '网络异常' })
        })
    })
}

// request('/auth/login', 'POST', {username: 'hunger', password: '123456'})
//   .then(data=>{
//     console.log(data)
//   })