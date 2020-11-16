import { useState, useEffect } from 'react'
import axios from 'axios'
import SortableTableHeader from './sortable_table_header'
import { useTableSorting, tableSort } from './sortable_tables'

import './App.css'
import './tailwind.output.css'

function App() {
  const [sortKey, sortOrder, updateSorting] = useTableSorting('fname')
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then((response) => {
        setTableData(response.data.pokemon)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  return (
    <div className="App w-full">
      <table className="w-3/5 table-auto mx-auto">
        <thead className="bg-gray-700 text-white w-full">
          <th className="px-4 py-2" /> {/* image */}
          <SortableTableHeader
            onClick={() => updateSorting('num')}
            selected={sortKey === 'num'}
            sortOrder={sortOrder}
            className="px-4 py-2"
          >
            Number
          </SortableTableHeader>
          <SortableTableHeader
            onClick={() => updateSorting('name')}
            selected={sortKey === 'name'}
            sortOrder={sortOrder}
            className="px-4 py-2"
          >
            Name
          </SortableTableHeader>
          <SortableTableHeader
            onClick={() => updateSorting('type')}
            selected={sortKey === 'type'}
            sortOrder={sortOrder}
            className="px-4 py-2"
          >
            Type(s)
          </SortableTableHeader>
          <SortableTableHeader
            onClick={() => updateSorting('height')}
            selected={sortKey === 'height'}
            sortOrder={sortOrder}
            className="px-4 py-2"
          >
            Height
          </SortableTableHeader>
          <SortableTableHeader
            onClick={() => updateSorting('weight')}
            selected={sortKey === 'weight'}
            sortOrder={sortOrder}
            className="px-4 py-2"
          >
            Weight
          </SortableTableHeader>
          <SortableTableHeader
            onClick={() => updateSorting('weakness')}
            selected={sortKey === 'weakness'}
            sortOrder={sortOrder}
            className="px-4 py-2"
          >
            Weakness(es)
          </SortableTableHeader>

        </thead>
        <tbody>
          { tableSort(tableData, sortKey, sortOrder).map(({
            img,
            num,
            name,
            type,
            height,
            weight,
            weaknesses,
          }) => (
            <tr key={num} className="border">
              <td className="py-2">
                <img src={img} alt={name} className="object-scale-down"/>
              </td>
              <td>
                {num}
              </td>
              <td>
                {name}
              </td>
              <td>
                {type.join(',')}
              </td>
              <td>
                {height}
              </td>
              <td>
                {weight}
              </td>
              <td>
                { weaknesses.join(',')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
