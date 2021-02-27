import { failFetchData, finishFetchData } from "../../redux/actions";
import makeRequest from "../makeRequest";


export const getAllTags = () => {

    return (dispatch: any, getState: any) => {

        makeRequest({ url: '/articles', method: 'GET' })
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch(finishFetchData(result));
                },
                (error) => {
                    dispatch(failFetchData(error))
                }
            )


    }
}

export const saveArticle = () => {

    return makeRequest({
        url: '/articles',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            title: "Test_1",
            hashTags: [
                "test1",
                "test2"
            ]
        })
    });
}