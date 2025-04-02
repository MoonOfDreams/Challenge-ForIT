const tasksService = require("../services/tasksService");
const controllers = {
  traerTareas: (req, res) => {
    res.json(tasksService.traerTareas());
  },
  crearTarea: (req, res) => {
    tasksService.crearTarea({
      title: req.body.title,
      description: req.body.description,
    }),
res.status(200).end()
  },
};

module.exports = controllers;

/* ○ GET /api/tasks - Obtener todas las tareas
○ POST /api/tasks - Crear una nueva tarea
○ PUT /api/tasks/:id - Actualizar una tarea existente
○ DELETE /api/tasks/:id - Eliminar una tarea */
