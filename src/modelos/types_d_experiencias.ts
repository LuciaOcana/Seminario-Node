import { ObjectId, model, Schema } from "mongoose";

export interface experienciasInterface{
    id: number,
    owner: ObjectId,
    participants: ObjectId[],
    description: string
}

export const experienciasSchema = new Schema<experienciasInterface>({
    id:Number,
    owner: {type: Schema.Types.ObjectId, ref:'user'},
    participants: [{type: Schema.Types.ObjectId, ref:'user'}],
    description: String
})

export const experienciasofDB = model<experienciasInterface>('experiencias',experienciasSchema)