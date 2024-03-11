import { defineField, defineType } from "sanity";

export const Category=defineType({
    name:'category',
    title:'Categoy',
    type:'document',
    fields:[
        defineField({
            title:'Title of category',
            name:'title',
            type:'string',
            validation:(Rols)=>[Rols.required()]
        }), 
        defineField({
            title:'description of category',
            name:'description',
            type:'text',
       
        })
    ]
})