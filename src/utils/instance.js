import axios from "axios";

export const instance = () => {
    axios.create({
        baseURL:"http://54.180.109.55/"
    })
}