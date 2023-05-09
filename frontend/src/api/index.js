export const url = "http://localhost:5000/api"

export const setHeaders = () => {
  const token = localStorage.getItem("token");
  console.log(token)
  const headers = {
    "Authorization": `Bearer ${token}`
  };

  return headers;
};