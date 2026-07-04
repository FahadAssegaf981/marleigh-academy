class TutorEngine {
    static respond(question) {
        if (question.toLowerCase().includes("bantu")) return "Tentu, mari kita bahas pelan-pelan!";
        return "Saya sedang menganalisis kebutuhan belajar Anda. Apa yang ingin dipelajari hari ini?";
    }
}
module.exports = TutorEngine;
