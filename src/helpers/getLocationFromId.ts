import { Location } from "../models/table"

const getLocationFromId = (id: string): Location => (
  id ? id.split("-").map( (s, i) => i % 2 === 0 ? parseInt(s) : s ) : []
)

export default getLocationFromId;