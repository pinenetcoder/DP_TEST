const allCompaniesUrl = "/api/v1/app-service/get-apps";
const singleAppUrl = "/api/v1/app-service/get-app-overview"

const requestData = {
  "pageNumber": 0,
  "pageSize": 25
}

export const getAllCompanies = async (setterFunction, pageSize, page = 0 ) => {
  const options = {
    method: 'PUT',
    headers: {
      "ngrok-skip-browser-warning": "69420",
      "Content-type": "application/json"
    }
  }
  options.body = JSON.stringify({...requestData, pageSize: pageSize, pageNumber: page})

  try {
    const response = await fetch(allCompaniesUrl, options);
    const respData = await response.json()
    setterFunction(respData)
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getSingleCompany = async (id) => {
  const options = {
    method: 'GET',
    headers: {
      "ngrok-skip-browser-warning": "69420",
      "Content-type": "application/json"
    }
  }

  try {
    const response = await fetch(`${singleAppUrl}/${id}`, options);
    const respData = await response.json()
    console.log(respData)
    
  } catch (error) {
    console.log(error)
  }

}
