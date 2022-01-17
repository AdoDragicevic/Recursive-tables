import { Location } from "../models/table"

export const getLocationFromId = (id: string): Location => (
  id ? id.split("-").map( (s, i) => i % 2 === 0 ? parseInt(s) : s ) : []
)