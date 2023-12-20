import { useState, useEffect} from 'react';
import CompaniesTable from "./components/CompaniesTable";
import {getAllCompanies} from "./utils/dataGetters"


const App = () => {
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const resp = await getAllCompanies(setTableData, 25)
      if (!resp.ok) {
        await getAllCompanies(setTableData, 25)
      }
    }
    getData()
  }, [])

  return (
    <div className="App">
      <h1>APP INVENTORY</h1>
      {
        tableData &&
        <CompaniesTable tableData={tableData} setTableData={setTableData}/>
      }

    </div>
  );
}

export default App;
