import {instance} from "./instance";

export const getContestList = async () => {
    return await instance.get().data;
}

export const getQuA = async () => {
    return await instance.get().data;
}