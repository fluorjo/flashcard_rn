import {ICountry} from './ICountry'

export const getCountries = (): Promise<ICountry[]> =>
  new Promise((resolve, reject) => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then((result: any[]) => {
        const countries = result.map((data: any) => {
          const {region, subregion, name, population} = data
          // prettier-ignore
          return {region, subregion, name: name.common, population} as ICountry
        })
        resolve(countries)
      })
      .catch(reject)
  })
