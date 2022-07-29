export interface AppProps{
    item?:ItemTypes,
    show?:boolean,
    onHide?:Function,
    mytimeout?:Function
}
export interface ItemTypes{
    id:number,
    name:string,
    description:string,
    price:number,
    type:string,
    popular:boolean
}

