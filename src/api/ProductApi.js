import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
});

export const getData = async (endPoint) => {
  try {
    const response = await apiClient.get(endPoint)
    return response.data
  } catch (error) {
    console.log(error);
  }
} 
