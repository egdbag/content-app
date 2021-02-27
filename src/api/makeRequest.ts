import axios, { Method } from 'axios'
let method_: Method;
export default function ({
    baseURL = "https://article.airaketa.keenetic.link",
    url = "/",
    method = method_,
    params = {},
    data = "",
    headers = {}

}) {
    return method == 'GET'
        ? fetch(baseURL + url, { method: method, headers: headers })
        : fetch(baseURL + url, { method: method, body: data, headers: headers });

    /* axios({
       url,
       params,
       data,
       headers,
       method,
       baseURL
   }) */
}