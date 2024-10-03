import { usersofDB } from '../modelos/types_d_users'
//import userData from './users.json'

export const getEntries = {
    // Obtener todos los usuarios
    getAll: async()=>{
    return await usersofDB.find();
    },
    // Buscar usuario por ID
    findById: async(id:string)=>{
        return await usersofDB.findById(id);
    },
    // Crear un nuevo usuario
    create: async(entry:object)=>{
        return await usersofDB.create(entry);
    },
    // Actualizar un usuario por ID
    update: async(id:string,body:object)=>{
        console.log(body);
        return await usersofDB.findByIdAndUpdate(id,body,{$new:true});
    },
    // Eliminar un usuario por ID
    delete: async(id:string)=>{
        return await usersofDB.findByIdAndDelete(id);
    },
    // Añadir una experiencia a un usuario (similar a addParticipant)
    addExperience: async (userId: string, experienceId: string) => {
        return await usersofDB.findByIdAndUpdate(userId,{$addToSet:{participants:experienceId}});
    },
    // Eliminar una experiencia de un usuario (similar a delParticipant)
    delExperience: async (userId: string, experienceId: string) => {
        return await usersofDB.findByIdAndUpdate(userId,{$pull:{participants:experienceId}});
    }
}