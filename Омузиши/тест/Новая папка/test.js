// test.js

const questions = [
    { 
        question: "Кадом узви организми инсон хати дурустии худро ба андозаи муқаррарии мустаҳкам нигоҳ медорад?", 
        answer: "А", 
        options: ["А) Мушакҳо", "Б) Идораҳои гормонҳо", "В) Антигенҳо", "Г) Лимфоцитҳо"] 
    },
    { 
        question: "Дар кадом органи инсон молекулҳои протеини марҳилаи душвор кӯмак мерасонанд?", 
        answer: "Г", 
        options: ["А) Печида", "Б) Маъдан", "В) Моғ", "Г) Меҳр"] 
    },
    { 
        question: "Кадом органи инсон дар таҳлили хоричии гази кимиёї бо таваҷҷӯҳ ба дарозии таъриф хидмат мекунад?", 
        answer: "Б", 
        options: ["А) Печида", "Б) Реваҷ ё хоҷагии машқ", "В) Чавобҳои ҳолат", "Г) Диагностикаи тухм"] 
    },
    { 
        question: "Кадом ҳуҷайраи марғӯб дар функтсияи тахрики спирини фрази сӯхт ва эстроген кӯмак мерасонад?", 
        answer: "А", 
        options: ["А) Тетоскопия", "Б) Муҳаммади ошкор", "В) Зарфи осмонӣ", "Г) Китоби таҳлилгар"] 
    },
    { 
        question: "Кадом ғалти органи инсон дар ҳодисаҳои гуногун дар тафсири нишонгари таърифӣ паҳн мешаванд?", 
        answer: "Г", 
        options: ["А) Дезинфексия", "Б) Қисмати хавотиркунанда", "В) Умри ихтилоф", "Г) Илтиҳоби интиқоли химикӣ"] 
    },
    { 
        question: "Дар кадом сатҳи ё заводи инсон, тамоми пӯсти холӣ ба ҳуҷайраҳои канорӣ пайванд меёбад?", 
        answer: "А", 
        options: ["А) Лимфома", "Б) Чашмҳои муқаррарӣ", "В) Обгоҳи шевротиш", "Г) Халқ"] 
    },
    { 
        question: "Чӣ хосиятҳои хас ва тарҳи ояндаи маводҳои тиббӣ дар шуур имконият медиҳанд?", 
        answer: "В", 
        options: ["А) Каналҳои ҳуҷайрӣ", "Б) Шӯрои оҳангар", "В) Шӯъбаи тибби"], 
    },
    // 13 саволи дигар
];

// Суханҳои ангезишӣ
const motivationalMessages = [
    "Шумо метавонед, танҳо бар дороиву кушиш диққат диҳед!",
    "Шумо софу бо қувват ҳастед!",
    "Бештар мехонед, бештар ёд мегиред!",
    "Маъзаратонро қабул намоед, шубҳа намекунед!",
    "Ҳар як ҷустуҷӯ барои шуури беҳтар аст!",
    "Ҳар рӯз шиддат мегардад, шумо ҳаргиз ба хона намегардед!",
    "Шумо имрӯз ҳама корҳо мекунед!",
    "Се марҳила аз ҳаёти хуб ба наздик мешавад!",
    "Саволҳо ва масъаларо барнома мекунед!",
    "Ҳамеша кӯшиш кунед!"
];

// Функсия барои шурӯъ кардани тест
function startTest() {
    let shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    let selectedQuestions = shuffledQuestions.slice(0, 20);
    renderQuestions(selectedQuestions);
}

// Намоиши саволҳо
function renderQuestions(questions) {
    const container = document.getElementById("questions-container");
    container.innerHTML = "";
    
    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        
        const questionText = document.createElement("p");
        questionText.textContent = question.question;
        questionDiv.appendChild(questionText);

        const optionsDiv = document.createElement("div");
        optionsDiv.classList.add("options");
        
        question.options.forEach(option => {
            const optionDiv = document.createElement("div");
            optionDiv.classList.add("option");
            optionDiv.textContent = option;
            optionDiv.onclick = () => handleAnswer(index, option.charAt(0));
            optionsDiv.appendChild(optionDiv);
        });

        questionDiv.appendChild(optionsDiv);
        container.appendChild(questionDiv);
    });
}

// Сабт кардани ҷавоб
function handleAnswer(questionIndex, answer) {
    userAnswers[questionIndex] = answer;
}

// Функсия барои ҳисоб кардани натиҷа
function calculateResults() {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            correctAnswers++;
        }
    });

    displayResults(correctAnswers);
}

// Намоиши натиҷаҳо
function displayResults(correctAnswers) {
    const resultsDiv = document.getElementById("results");
    resultsDiv
