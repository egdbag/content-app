import { failFetchData, finishFetchData } from "../../redux/actions";
import makeRequest from "../makeRequest";



export const saveTextComponent = () => {

    return makeRequest({
        url: '/articles/6/components',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            type: "TEXT",
            uri: "____"
        }
        )
    });
}


export const saveImageComponent = () => {

    return makeRequest({
        url: '/articles/6/components',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            type: "TEXT",
            uri: "____"
        }
        )
    });
}