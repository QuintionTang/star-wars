import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://swapi.dev/api/",
});
// interceptors 拦截器，统一处理接口的请求，如修改header等
apiClient.interceptors.request.use((request) => {
    return request;
});
// interceptors 拦截器，统一处理接口的响应和错误
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error(error);
    }
);

export default apiClient;
