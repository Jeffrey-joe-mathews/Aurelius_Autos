import apiRequest from "./apiRequest"

export const singlePageLoader = async({request, params}) => {
    const res = await apiRequest("/posts/"+params.id);
    return res.data;
}

export const listPageLoader = async({request, params}) => {
    const query = new URL(request.url).search.split("?")[1];
    console.log(query)
    const res = await apiRequest("/posts?"+query)
    return res.data
}