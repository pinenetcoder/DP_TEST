const allCompaniesUrl = "/api/v1/app-service/get-apps";
const requestData = {
  "pageNumber": 0,
  "pageSize": 25
}

export const getAllCompanies = async (pageSize, setterFunction) => {
  const options = {
    method: 'PUT',
    headers: {
      "ngrok-skip-browser-warning": "69420",
      "Content-type": "application/json"
    }
  }
  options.body = JSON.stringify({...requestData, pageSize: pageSize})

  const response = await fetch(allCompaniesUrl, options);
  const respData = await response.json()
  setterFunction(respData)
}
