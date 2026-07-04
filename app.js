document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const responseDiv = document.getElementById('ai-response');

    // Fungsi ini adalah 'jembatan' ke file api.js
    async function handleSend() {
        const question = userInput.value.trim();
        if (!question) return;

        // 1. Tampilkan pesan proses agar user tahu AI sedang bekerja
        responseDiv.innerText = "Marleigh sedang berpikir...";
        userInput.value = '';

        try {
            // 2. Panggil fungsi callAI dari file api.js
            const answer = await callAI(question);
            
            // 3. Tampilkan jawaban dari AI
            responseDiv.innerText = answer;
        } catch (error) {
            responseDiv.innerText = "Maaf, sistem sedang offline.";
            console.error(error);
        }
    }

    sendBtn.addEventListener('click', handleSend);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
});
