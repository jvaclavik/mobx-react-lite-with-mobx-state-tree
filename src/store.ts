import {
  types,
  Instance,
} from "mobx-state-tree"

const RootModel = types
  .model("Root", {
    query: types.string,
    cities: types.array(types.string),
  })
  .actions(self => ({
    setQuery: (query: string)=>{
      self.query = query
    },
    addCity: (newCity: string) => {
      self.cities.push(newCity)
    }
  }))
  .views(self => ({
    get filteredCities () { 
      return self.cities.filter((city: string) => {
        return city.toLowerCase().includes(self.query)
      })
    }}))

export const createStore = () => {
  return RootModel.create({
    query: "", 
    cities: [
      'Prague',
      'Barcelona',
      'Reykjavík'
    ]
  })
};

export type TStore = Instance<typeof RootModel>;