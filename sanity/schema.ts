import { type SchemaTypeDefinition } from 'sanity'
import { Product } from './Schemas/product'
import { Category } from './Schemas/category'
import { SessionPicture } from './Schemas/HeroPicture'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product , Category , SessionPicture],
}
