import { useState } from 'react'
import SortableTableHeader from './sortable_table_header'
import { useTableSorting, tableSort } from './sortable_tables'

import './App.css'
import './tailwind.output.css'

const testData = [
  {
    fname: 'glenn',
    lname: 'stovall',
    score: 250,
  },
  {
    fname: 'richard',
    lname: 'stovall',
    score: 200,
  },
  {
    fname: 'kim',
    lname: 'stovall',
    score: 500,
  },
  {
    fname: 'seth',
    lname: 'hines',
    score: 250,
  },
  {
    fname: 'andrew',
    lname: 'long',
    score: -1,
  },
]

function App() {
  const [sortKey, sortOrder, updateSorting] = useTableSorting('fname')
  const [tableData] = useState(testData)

  return (
    <div className="App w-64 mx-auto">
      <table className="w-full">
        <thead>
          <SortableTableHeader
            onClick={() => updateSorting('fname')}
            selected={sortKey === 'fname'}
            sortOrder={sortOrder}
          >
            First Name
          </SortableTableHeader>
          <SortableTableHeader
            onClick={() => updateSorting('lname')}
            selected={sortKey === 'lname'}
            sortOrder={sortOrder}
          >
            Last Name
          </SortableTableHeader>
          <SortableTableHeader
            onClick={() => updateSorting('score')}
            selected={sortKey === 'score'}
            sortOrder={sortOrder}
          >
            Score
          </SortableTableHeader>
        </thead>
        <tbody>
          { tableSort(tableData, sortKey, sortOrder).map(({ fname, lname, score }) => (
            <tr>
              <td>{ fname }</td>
              <td>{ lname }</td>
              <td>{ score }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
