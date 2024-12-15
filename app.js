const express=require('express');
const app=express();
const port=3000;

//middleware ara parsear JSON
app.use(express.json());

//Datos para ejemplo

let libros=[
    {id:1, titulo:'un grito desesperado', anio:1995},
    {id:2, titulo:'100 anios de soledad',anio:1991},
    {id:3, titulo:'Ingenieria de sw un enfoque practico', anio:2000}
];

//endpoint para obtener libros por ID
app.get('/libros',(req,res)=>{
    res.json(libros);
});

//endpoint para agregar libros
app.post('/libros', (req,res)=>{
    const nuevoLibro=req.body;
    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
});

//endpoint para eliminar libros
app.delete('/libros/:id', (req,res)=>{
    const {id}=req.params;
    libros.libros.filter(libro=>libro.id!==parseInt(id));
    res.status(204).json(nuevolibro);
});

//escuchar al servidor
app.listen(port,()=>{
    console.log(`Servidor de BIBLIOTECA ONLINE en acción en http://localhost:${port}`);
});