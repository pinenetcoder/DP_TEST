import { useState, useEffect} from 'react';
import CompaniesTable from "./components/CompaniesTable";
import {getAllCompanies} from "./utils/dataGetters"


const App = () => {
  const [tableData, setTableData] = useState([])
  
  useEffect(() => {
    getAllCompanies(25, setTableData)
  }, [])

  return (
    <div className="App">
      <CompaniesTable tableData={tableData} setTableData={setTableData}/>
    </div>
  );
}

export default App;
