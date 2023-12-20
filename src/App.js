import Button from '@mui/material/Button';


const App = () => {
  const url = "/api/v1/app-service/get-apps";
  const requestData = {
    "pageNumber": 0,
    "pageSize": 25
  }

  const fetchData = (url, data) => {
    const options = {
      method: 'PUT',
      headers: {
        "ngrok-skip-browser-warning": "69420",
        "Content-type": "application/json"
      }
    }
    options.body = JSON.stringify(data)

    return fetch(url, options)
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Something went Wrong')
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <Button variant="contained" onClick={() => fetchData(url, requestData)}>Say Hello</Button>
    </div>
  );
}

export default App;
