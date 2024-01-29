import axios from "axios";

export default function axiosSetup(): void {
  // Base URL
  const baseUrl = import.meta.env.VITE_API_BASE_URL || "";
  axios.defaults.baseURL = baseUrl.replace(/\/?$/, "/");

  // Development Only
  if (import.meta.env.MODE === "development") {
    // Logging Request
    axios.interceptors.request.use(request => {
      const { method, baseURL, url, data } = request;

      console.log("axios -> :", request)
      console.log(`      # ${method}: ${baseURL}${url} data: ${data}`)
      return request
    })

    // Logging Response
    axios.interceptors.response.use(response => {
      const { statusText, status, data, request: { responseURL } } = response;

      console.log("axios <- :", response)
      console.log(`      # ${status}:${statusText} ${responseURL} data: ${data}`)
      return response
    })
  }

}