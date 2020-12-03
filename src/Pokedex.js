import SortableTableHeader from './sortable_table_header'
import { useTableSorting, tableSort } from './sortable_tables'
import ViewportOnly from './viewport_only'
import Repeat from './repeat'

export function SkeletonRow() {
  return (
    <tr className="border min-h-4">
      <Repeat times={7}><td className="py-2">&nbsp;</td></Repeat>
    </tr>
  )
}

export default function Pokedex({ pokemon }) {
  const [sortKey, sortOrder, updateSorting] = useTableSorting('num')
  return (
    <table className="w-4/5 mt-20 table-fixed mx-auto">
      <thead className="bg-gray-700 text-white">
        <tr>
          <th className="px-4 py-2" />{/* image */}
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
        </tr>
      </thead>
      <tbody>
      { tableSort(pokemon, sortKey, sortOrder).map(({
        img,
        num,
        name,
        type,
        height,
        weight,
        weaknesses,
      }) => (
        <ViewportOnly placeholder={<SkeletonRow />}>
          <tr key={num} className="border" data-testid='row'>
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
              {type.join(', ')}
            </td>
            <td>
              {height}
            </td>
            <td>
              {weight}
            </td>
            <td>
              { weaknesses.join(', ')}
            </td>
          </tr>
        </ViewportOnly>
      ))}
    </tbody>
  </table>
  )
}