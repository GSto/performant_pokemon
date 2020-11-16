import { useState } from 'react'

/**
 *  Include this hook with in a table with asc/desc sorting based on keys.
 */
export const useTableSorting = (defaultKey = 'name', defaultOrder = 'asc') => {
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
  return [sortKey, sortOrder, updateSorting]
}


export const tableCompare = (a, b, key = null, order = 'asc') => {
  // if the specificed key is an array, check the first element of the array 
  // (specific use case to original production project)
  const aComparator = Array.isArray(a[key]) ? a[key][0] : a[key]
  const bComparator = Array.isArray(b[key]) ? b[key][0] : b[key]
  if (aComparator === bComparator) {
    return 0
  }
  if (order === 'asc') {
    return aComparator > bComparator ? 1 : -1
  }
  return aComparator > bComparator ? -1 : 1
}

// sort an array of objects based on a certain key + direction
export const tableSort = (arr, key = null, order = 'asc') => arr.sort((a, b) => tableCompare(a, b, key, order))

const defaults = {
  useTableSorting,
  tableSort,
  tableCompare,
}

export default defaults 