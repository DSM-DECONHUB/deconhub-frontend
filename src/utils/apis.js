import {BaseUrl} from "./instance";
import axios from "axios";

export const getList = async() => {
    let data
    await axios({
        url:BaseUrl+"/contest/list",
        method:'get'
    }).then((res)=>data=res)

    return data.data.list;
}

export const getQnAList = async() => {
    let data
    await axios({
        url:BaseUrl+"/qna/list",
        method:'get'
    }).then((res)=>data=res)

    return data.data.list;
}

export const deleteContest = async(id) => {
    await axios({
        url:BaseUrl+"/contest/delete"+ id,
        method:'delete'
    })
}

export const postContest = async() => {
    await axios({
        url: BaseUrl+"/contest/create",
        method:'post'
    })
}

export const postQnA = async(id) => {
    await axios({
        url: BaseUrl+"qna/create",
        method:'post'
    })
}