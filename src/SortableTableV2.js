import { useState } from  'react'
import { tableSort } from './SortableTables'

export default function SortableTableV2({ data, defaultKey='id', defaultOrder='asc', children, ...rest}) {
  const [sortKey, setSortKey] = useState(defaultKey)
  const [sortOrder, setSortOrder] = useState(defaultOrder)
  const updateSorting = (key) => {
    if (key === sortKey) {
      switch (sortOrder) {
        case 'asc':
          setSortOrder('desc')
          return
        case 'desc':
          setSortKey(null)
          setSortOrder('asc')
          return
        default:
          setSortOrder('asc')
          return
      }
    }
    setSortKey(key)
    setSortOrder('asc')
  }

  const headerProps = (key) => ({
    onClick: () => updateSorting(key),
    selected: sortKey === key,
    sortOrder: sortOrder,
  })

  const sortedData = tableSort(data, sortKey, sortOrder)
  return(
    <table { ...rest}>
      {children(sortedData, headerProps)}
    </table>
  )
}