const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dashboard')
    .then(function() {
        console.log('Conectat la MongoDB!');
    })
    .catch(function(err) {
        console.error('Eroare conectare MongoDB:', err);
    });

const Project = require('./models/Project');

const PORT = 3000;

app.use(express.json());    

app.post('/api/projects', async function(req, res) {
    try {
        const newProject = new Project({
            title: req.body.title,
            tech: req.body.tech,
            done: req.body.done || false,
        });
        const saved = await newProject.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


app.get('/', function(req, res) {
    res.json({ message: 'Serverul functioneaza!' });
});

// const projects = [
//     { id: 1, title: "Pagina Personala", tech: "HTML, CSS", done: true },
//     { id: 2, title: "Calculator Buget", tech: "JS", done: true },
//     { id: 3, title: "Dashboard React", tech: "React", done: false },
//     { id: 4, title: "API Meteo", tech: "React, API", done: false },
// ];

app.get('/api/projects', async function(req, res) {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: 'Eroare ' + err });
    }
});


app.get('/api/projects/:id', async function(req, res) {
    try {
        const result = await Project.findById(req.params.id)
        if (result) res.json(result);
        else res.status(404).json({error: 'Proiectul nu a fost gasit!'})
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// app.get('/api/stats', function(req, res) {
//     const stats = {
//         "total": projects.length,
//         "finalizate": projects.filter(p => p.done).length,
//         "in progres": projects.filter(p => !p.done).length
//     };
//     res.json(stats);
// });

app.listen(PORT, function() {
    console.log(`Server pornit pe http://localhost:${PORT}`);
});