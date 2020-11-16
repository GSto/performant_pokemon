function Repeat({ times, children }) {
  return [...Array(times)].map(() => children)
}

export default Repeat