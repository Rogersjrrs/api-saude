const express = require('express');
const Paciente = require('../models/Paciente');
const router = express.Router();
router.get('/', async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.json(pacientes);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar pacientes' });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id);
    if (!paciente) return res.status(404).json({ error: 'Paciente não encontrado' });
    res.json(paciente);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar paciente' });
  }
});
router.post('/', async (req, res) => {
  try {
    const { nome, idade, doenca, dataConsulta } = req.body;
    const novoPaciente = await Paciente.create({ nome, idade, doenca, dataConsulta });
    res.status(201).json(novoPaciente);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar paciente' });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const { nome, idade, doenca, dataConsulta } = req.body;
    const paciente = await Paciente.findByPk(req.params.id);
    if (!paciente) return res.status(404).json({ error: 'Paciente não encontrado' });
    await paciente.update({ nome, idade, doenca, dataConsulta });
    res.json(paciente);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar paciente' });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id);
    if (!paciente) return res.status(404).json({ error: 'Paciente não encontrado' });
    await paciente.destroy();
    res.json({ message: 'Paciente deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar paciente' });
  }
});
module.exports = router;