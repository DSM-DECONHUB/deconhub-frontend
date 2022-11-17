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
        url:BaseUrl+"/qna/list/none/content",
        method:'get'
    }).then((res)=>data=res)

    return data.data.list;
}

export const deleteContest = async(id) => {
    await axios({
        url: BaseUrl + "/contest/delete/" + id,
        method: 'delete'
    }).then(() => alert('대회가 삭제되었습니다.'))
}

export const postContest = async (title, introduce, period, place, sign_period, sponsor, site_address, sign_condition, sign_way, category) => {
    axios.post(
        BaseUrl + "/contest/create/admin",
        {
            title: title,
            introduce: introduce,
            period: "2022-10-25 ~ 2022-10-29",
            place: "대덕SW마고",
            sign_period: "2022-10-29T11:28:01.210Z",
            sponsor: "배민, 당근, 수박, 사과, 바나나",
            site_address: "Link",
            sign_condition: "참가 조건",
            sign_way: "참가 방법",
            category: "OFFLINE"
        }
    ).then(() => alert('대회가 생성되었습니다.'))
}

export const postQnA = async (id, text) => {
    axios.patch(
        BaseUrl + "/qna/answer/" + id,
        {
            content: text
        }
    ).then(() => alert('답글이 작성되었습니다.'))
}