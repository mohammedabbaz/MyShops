export type Product ={
    _id :string,
    title:string,
    imageUrl:string,
    price:number,
    slug:string,
    categoryName:string

}

export type ProductFull ={
    _id :string,
    title:string,
    images:any,
    price:number,
    slug:string,
    categoryName:string,
    description:string,
    price_id:string
}