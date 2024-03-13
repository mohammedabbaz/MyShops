import {defineType, defineField, defineArrayMember} from 'sanity'

export const Product = defineType({
  title: "Product",
  name: "product",
  type: "document",
  fields: [
    defineField({
      title: "Title of product",
      name: "title",
      type: "string",
      validation:(Role)=>[Role.required()]
      
    }
    
    ),
    
    defineField({
        title: "Description of product",
        name: "description",
        type: "text",
       validation:(Role)=>[Role.required().min(10).max(1000).error('min value must be 10 and max value must be 1000')]
       
      }),
      defineField({
        title: "price of product ",
        name: "price",
        type: "number",
      }
      
    ),

    defineField({
        title: "Images of product",
        name: "images",
        type: "array",
        of:[
            {type:'image'}
        ]
        
      }
      
    ),
    defineField({
      title: "stripe product price id",
      name: "price_id",
      type: "string",
      
    }
    
  ),
    defineField({
        title: "slogs",
        name: "slogs",
        type: "slug",
        options:{
            source:'name'
        }
        
      }
      
    ),
    defineField({
      title: "Category of product",
      name: "category",
      type:'reference',
      to:{
        type:'category'
      }
      
      
    }
    
  ),

  ]
})  