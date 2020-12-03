import SortableTableV2 from './SortableTableV2'
import SortableTableHeader from './SortableTableHeader'
import ViewportOnly from './ViewportOnly'
import Repeat from './Repeat'

export function SkeletonRow() {
  return (
    <tr className="border min-h-4">
      <Repeat times={7}><td className="py-2">&nbsp;</td></Repeat>
    </tr>
  )
}

export default function PokedexV2({ pokemon }) {
  return (
    <SortableTableV2 defaultKey='num' data={pokemon} className="w-4/5 mt-20 table-fixed mx-auto">
      {(sortedData, headerProps) => (
        <>
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-2" />{/* image */}
              <SortableTableHeader {...headerProps('num')} className="px-4 py-2">
                Number
              </SortableTableHeader>
              <SortableTableHeader {...headerProps('name')} className="px-4 py-2">
                Name
              </SortableTableHeader>
              <SortableTableHeader {...headerProps('type')} className="px-4 py-2">
                Type(s)
              </SortableTableHeader>
              <SortableTableHeader {...headerProps('height')} className="px-4 py-2">
                Height
              </SortableTableHeader>
              <SortableTableHeader {...headerProps('weight')} className="px-4 py-2">
                Weight
              </SortableTableHeader>
              <SortableTableHeader {...headerProps('weakness')} className="px-4 py-2">
                Weakness(es)
              </SortableTableHeader>
            </tr>
          </thead>
          <tbody>
          { sortedData.map(({
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
      </>
      )}
    </SortableTableV2>
  )
}