import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

  const data = [
    {name: 'John C.', salary: 1800, increase: true},
    {name: 'Jack B.', salary: 8000, increase: false},
    {name: 'Ron V.', salary: 3000, increase: true},
    {name: 'Karl S.', salary: 2000, increase: false},
    {name: 'Shanan A.', salary: 5000, increase: false},
  ]


function App() {
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
