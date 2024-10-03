import { newUserInfo } from "../modelos/users"

const parseName = (nameFromRequest:any):string =>{
    if(!isString(nameFromRequest)){
        throw new Error ('Incorrect or missing name')
    }

    return nameFromRequest
}

const parseMail = (mailFromRequest:any):string =>{
    if(!isString(mailFromRequest)){
        throw new Error ('Incorrect or missing mail')
    }
    
    return mailFromRequest
}

const parsePassword = (passwordFromRequest:any):string =>{
    if(!isString(passwordFromRequest)){
        throw new Error ('Incorrect or missing password')
    }
    
    return passwordFromRequest
}

const parseComment = (commentFromRequest:any):string =>{
    if(!isString(commentFromRequest)){
        throw new Error ('Incorrect or missing comment')
    }
    
    return commentFromRequest
}

const parseExperiences = (experiencesFromRequest:any):string[] =>{
    if(!isString(experiencesFromRequest)){
        throw new Error ('Incorrect or missing comment')
    }
    
    return experiencesFromRequest
}

const isString = (string:any):boolean => {
    return typeof string == 'string' || string instanceof String
}
const toNewUser = (object:any): newUserInfo => {
    const newUser: newUserInfo = {
        name:parseName(object.name),
        mail:parseMail(object.mail),
        password:parsePassword(object.password),
        comment:parseComment(object.comment),
        experiences:parseExperiences(object.experiences),
    }
    return newUser
}

export default toNewUser