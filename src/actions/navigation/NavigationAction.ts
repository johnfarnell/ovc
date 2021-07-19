export const FILTER_NAME = "FILTER_NAME"
export type FilterName = {
  type: typeof FILTER_NAME,
  payload: string
}
 
const setFilterName = (name: string): FilterName => ({
  type: FILTER_NAME,
  payload: name
})

export default setFilterName