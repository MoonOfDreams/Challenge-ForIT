const express = require("express");
const router= express.Router();
const controllers= require("../controllers/apiControllers")

router.get("/tasks",controllers.traerTareas);
router.post("/tasks",controllers.crearTarea);
module.exports= router;
/* 
○ GET /api/tasks - Obtener todas las tareas
○ POST /api/tasks - Crear una nueva tarea
○ PUT /api/tasks/:id - Actualizar una tarea existente
○ DELETE /api/tasks/:id - Eliminar una tarea */