import {request} from './request.js'

export function getHomeMuticata(){
    return request({
        url:'/home/multidata'
    })
}
export function getHomegoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}