import express from 'express'
import * as userServices from '../services/userServices'

//import toNewUser from '../extras/utils'

const router = express.Router()

// Ruta para obtener todos los usuarios
router.get('/', async(_req, res) => {
    const data = await userServices.getEntries.getAll()
    return res.json(data);
})

// Ruta para obtener un usuario por ID
router.get('/:id', async(req, res) => {
    const data = await userServices.getEntries.findById(req.params.id)
    return res.json(data);
})

// Ruta para crear un nuevo usuario
router.post('/', async(req, res) => {
    const data = await userServices.getEntries.create(req.body)
    return res.json(data);
})

// Ruta para actualizar un usuario por ID
router.put('/:id', async(req, res) => {
    const data = await userServices.getEntries.update(req.params.id,req.body)
    return res.json(data);
})

// Ruta para eliminar un usuario por ID
router.delete('/:id', async(req, res) => {
    const data = await userServices.getEntries.delete(req.params.id)
    return res.json(data);
})

// Nueva ruta para añadir una experiencia a un usuario
router.post('/:userId/experiences/:experienceId', async (req, res) => {
    const data = await userServices.getEntries.addExperience(req.params.userId,req.params.experienceId)
    return res.json(data);

})

// Nueva ruta para eliminar una experiencia de un usuario
router.delete('/:userId/experiences/:experienceId', async (req, res) => {
    const data = await userServices.getEntries.delExperience(req.params.userId,req.params.experienceId)
    return res.json(data);
});

export default router