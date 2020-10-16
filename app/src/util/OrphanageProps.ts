interface Image{
    id: number
    url: string
}

export default interface OrphanageProps{
    id: number
    name: string
    latitude: number
    longitude: number
    about?: string
    instructions?: string
    opening_hours?: string
    open_on_weekends?: boolean
    images?: Image[]
}