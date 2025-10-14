export const cities = [
  'lowton','leigh','golborne','tyldesley','bolton','birchwood','wigan','atherton'
] as const

export type City = typeof cities[number]

export function normaliseCity(param: string): City | null {
  const key = param.toLowerCase()
  return (cities as readonly string[]).includes(key) ? (key as City) : null
}

export const cityPretty: Record<City,string> = {
  lowton: 'Lowton', leigh: 'Leigh', golborne: 'Golborne', tyldesley: 'Tyldesley',
  bolton: 'Bolton', birchwood: 'Birchwood', wigan: 'Wigan', atherton: 'Atherton'
}