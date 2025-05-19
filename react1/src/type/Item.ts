export type Item = {
    id: number,
    name: string,
    price: number
    qty: number
    measure?:"kg" | "g" | "ml" | "l"
}