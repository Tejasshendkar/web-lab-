const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Student = require("./models/userModels");
const cors = require('cors')
mongoose.connect('mongodb://localhost:27017/college');

app.use(express.json());
app.use(cors())

app.post('/student', async (req, res) => {
    const student = new Student(req.body);
    try {
        await student.save();
        res.status(201).send(student);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.get('/student', async (req, res) => {
    try {
        const student = await Student.find({});
        res.send(student);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get('/student/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).send();
        }
        res.send(student);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.put(`/student/:studid`, async (req, res) => {
    var Studid = req.params.studid;
    var updated = await Student.findByIdAndUpdate({ _id: Studid }, {
        id: req.body.id,
        name: req.body.name,
        address: req.body.address,
        stream: req.body.stream,
        year: req.body.year
    })
    res.send(updated);
})

app.delete('/student/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(student);
    } catch (e) {
        res.status(500).send(e);
    }
});


app.listen(7171)


