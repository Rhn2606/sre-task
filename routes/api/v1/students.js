const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();



router.get('/', async (req, res) => {
    const students = await prisma.student.findMany();
    res.json(students);
});


router.post('/', async (req, res) => {
    const { name, email } = req.body;
    const student = await prisma.student.create({
        data: { name, email }
    });
    res.json(student);
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const student = await prisma.student.findUnique({
        where: { id: parseInt(id) }
    });
    if(student) {
        res.json(student);
    } else {
        res.status(404).json({ error: 'Student not found' });
    }
});


router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const student = await prisma.student.update({
        where: { id: parseInt(id) },
        data: { name, email }
    });
    res.json(student);
});


router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.student.delete({
        where: { id: parseInt(id) }
    });
    res.status(204).send();
});

module.exports = router;

