let tasks= [
    {
        id:1,
        title:"Blockazo",
        description:"Comprar un chocolate blockazo",
        completed:false,
        createdAt:new Date(),

    }

]

const traerTareas=()=>{
    return tasks
}
const crearTarea=(tarea)=>{
    tasks.push({
        id:tasks[tasks.length-1].id +1,
        title:tarea.title,
        description: tarea.description,
        completed:false,
        createdAt:new Date(),

    })
}
module.exports={
    traerTareas
}