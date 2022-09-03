import axios from "../utils/request"
import base from "./base"

const api = {
    getNcov(params){
        // console.log()
        return axios.get(base.baseUrl + base.ncov, {
            params
        })
    },
    getProvinceNcov(){
        return axios.get(base.baseUrl + base.provienceNcov)
    },
    getWorldNcov(){
        return axios.get(base.baseUrl + base.worldNcov)
    },
    getCityNcov(params){
        // console.log()
        return axios.get(base.baseUrl + base.cityNcov, {
            params
        })
    },
    getSwiperImg(){
        return axios.get(base.baseUrl + base.swiperImg)
    },
    getCities(){
        return axios.get(base.baseUrl + base.cities)
    },
    getPolicy(params){
        // console.log()
        return axios.get(base.baseUrl + base.policy, {
            params
        })
    },
}

export default api
