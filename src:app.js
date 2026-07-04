const express = require('express');
const app = express();
const TutorEngine = require('./tutorEngine');

app.use(express.json());

app.post('/api/tutor', (req, res) => {
    const { question } = req.body;
    const answer = TutorEngine.respond(question);
    res.json({ response: answer });
});

module.exports = app;