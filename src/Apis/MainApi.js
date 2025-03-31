import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
console.log("api", API_BASE_URL);

export const postFunction = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/login`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  })

  return response.data;
}

export const postRegister = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/register`, data, {
    headers: {
      "Content-Type": "application/json"
    }
  })
  return response.data;
}

export const logout = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/individual/logout`, data, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${data}`
    }
  })
  return response.data;
}