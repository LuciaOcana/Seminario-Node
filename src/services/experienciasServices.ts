import { experienciasofDB } from "../modelos/types_d_experiencias";

export const getEntries = {
    // Funcion para obtener todas las experiencias de la base de datos.
    getAll: async()=>{
    return await experienciasofDB.find();
    },
    // Funcion para encontrar una experiencia por su ID.
    findById: async(id:string)=>{
        return await experienciasofDB.findById(id);
    },
     // Funcion para encontrar una experiencia por ID y poblar los datos del propietario y los participantes.
    findUserById: async(id:string)=>{
        return await experienciasofDB.findById(id).populate('owner').populate('participants');
    },
    // Funcion para añadir un participante a una experiencia.
    addParticipant: async(idExp:string,idPart:string)=>{
        return await experienciasofDB.findByIdAndUpdate(idExp,{$addToSet:{participants:idPart}});
    },
    // Funcion para eliminar un participante de una experiencia.
    delParticipant: async(idExp:string,idPart:string)=>{
        return await experienciasofDB.findByIdAndUpdate(idExp,{$pull:{participants:idPart}});
    },
    // Funcion para crear una nueva experiencia.
    create: async(entry:object)=>{
        return await experienciasofDB.create(entry);
    },
    // Funcion para actualizar una experiencia existente.
    update: async(id:string,body:object)=>{
        console.log(body);
        return await experienciasofDB.findByIdAndUpdate(id,body,{$new:true});
    },
    // Funcion para eliminar una experiencia por ID.
    delete: async(id:string)=>{
        return await experienciasofDB.findByIdAndDelete(id);
    }
}