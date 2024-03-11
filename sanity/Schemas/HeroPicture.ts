import { defineField, defineType } from "sanity";

export const SessionPicture =defineType({
    name:'sessionPicture',
    title:'Session Picture' , 
    type:'document',
    description:'picture of session to change hero picture',
    fields:[
        defineField({
            name:'firstImage',
            type:'image',
            title:'first image '
        }),
        defineField({
            name:'secondImage',
            type:'image',
            title:'Second image '
        }),
    ]
})