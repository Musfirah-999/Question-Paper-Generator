// quiz-app.js - COMPLETELY FIXED VERSION (With DSA)

document.addEventListener('DOMContentLoaded', function () {
    // ======================== DSA IMPLEMENTATION ========================

    // 1. LINKED LIST for Question Navigation
    class QuestionNode {
        constructor(question, index) {
            this.question = question;
            this.index = index;
            this.next = null;
            this.prev = null;
            this.visited = false;
            this.answered = false;
            this.skipped = false;
        }
    }

    class QuestionLinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
            this.current = null;
            this.length = 0;
        }

        add(question, index) {
            const newNode = new QuestionNode(question, index);

            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
                this.current = newNode;
            } else {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }

            this.length++;
            return newNode;
        }

        traverseTo(index) {
            let current = this.head;
            while (current && current.index !== index) {
                current = current.next;
            }
            this.current = current;
            return current;
        }

        nextNode() {
            if (this.current && this.current.next) {
                this.current = this.current.next;
                return this.current;
            }
            return null;
        }

        prevNode() {
            if (this.current && this.current.prev) {
                this.current = this.current.prev;
                return this.current;
            }
            return null;
        }

        getCurrent() {
            return this.current;
        }
    }

    // 2. STACK for Navigation History
    class NavigationStack {
        constructor() {
            this.stack = [];
        }

        push(questionIndex) {
            this.stack.push(questionIndex);
        }

        pop() {
            return this.stack.pop();
        }

        peek() {
            return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
        }

        isEmpty() {
            return this.stack.length === 0;
        }
    }

    // 3. QUEUE for Quiz Progression
    class QuestionQueue {
        constructor() {
            this.queue = [];
        }

        enqueue(item) {
            this.queue.push(item);
        }

        dequeue() {
            return this.queue.shift();
        }

        isEmpty() {
            return this.queue.length === 0;
        }

        size() {
            return this.queue.length;
        }
    }

    // 4. HASH MAP for Storage
    class QuizHashMap {
        constructor() {
            this.map = new Map();
        }

        set(key, value) {
            this.map.set(key, value);
        }

        get(key) {
            return this.map.get(key);
        }

        has(key) {
            return this.map.has(key);
        }

        delete(key) {
            return this.map.delete(key);
        }

        clear() {
            this.map.clear();
        }
    }

    // ======================== DOM ELEMENTS ========================
    const welcomePage = document.getElementById('welcomePage');
    const quizPage = document.getElementById('quizPage');
    const resultsPage = document.getElementById('resultsPage');
    const reviewPage = document.getElementById('reviewPage');

    const subjectDropdown = document.getElementById('subjectDropdown');
    const topicsContainer = document.getElementById('topicsContainer');
    const topicsGrid = document.getElementById('topicsGrid');
    const instructionsContainer = document.getElementById('instructionsContainer');
    const instructionsToggle = document.getElementById('instructionsToggle');
    const startQuizBtn = document.getElementById('startQuizBtn');

    const quizSubject = document.getElementById('quizSubject');
    const timerContainer = document.getElementById('timerContainer');
    const timerElement = document.getElementById('timer');
    const currentQuestionNum = document.getElementById('currentQuestionNum');
    const totalQuestions = document.getElementById('totalQuestions');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const skipBtn = document.getElementById('skipBtn');
    const submitQuizBtn = document.getElementById('submitQuizBtn');
    const questionsGrid = document.getElementById('questionsGrid');

    const scoreValue = document.getElementById('scoreValue');
    const correctAnswers = document.getElementById('correctAnswers');
    const incorrectAnswers = document.getElementById('incorrectAnswers');
    const timeTaken = document.getElementById('timeTaken');
    const accuracy = document.getElementById('accuracy');
    const rank = document.getElementById('rank');
    const restartBtn = document.getElementById('restartBtn');
    const newQuizBtn = document.getElementById('newQuizBtn');
    const reviewBtn = document.getElementById('reviewBtn');

    const backToResultsBtn = document.getElementById('backToResultsBtn');
    const reviewContent = document.getElementById('reviewContent');

    // ======================== APPLICATION STATE ========================

    // ARRAYS
    let currentQuestionsArray = [];
    let userAnswersArray = [];
    let visitedArray = [];
    let skippedArray = [];
    let questionStatesArray = [];

    // DSA Structures
    let questionLinkedList = null;
    let navigationStack = null;
    let questionQueue = null;
    let quizHashMap = null;

    let selectedSubject = null;
    let selectedSubtopics = new Set();
    let currentQuestionIndex = 0;
    let quizTimer;
    let timeLeft = 15 * 60;
    let isQuizActive = false;
    let lockedQuestionsSet = new Set();
    let usedQuestionIdsSet = new Set();
    let quizStartTime;

    // ======================== INITIALIZATION ========================

    function init() {
        // Initialize DSA structures
        navigationStack = new NavigationStack();
        questionQueue = new QuestionQueue();
        quizHashMap = new QuizHashMap();

        setupEventListeners();
        updateStartButtonState();
    }

    function setupEventListeners() {
        subjectDropdown.addEventListener('change', handleSubjectChange);
        instructionsToggle.addEventListener('click', toggleInstructions);
        startQuizBtn.addEventListener('click', startQuiz);
        prevBtn.addEventListener('click', goToPreviousQuestion);
        nextBtn.addEventListener('click', goToNextQuestion);
        skipBtn.addEventListener('click', skipQuestion);
        submitQuizBtn.addEventListener('click', submitQuiz);

        restartBtn.addEventListener('click', restartQuiz);
        newQuizBtn.addEventListener('click', startNewQuiz);
        reviewBtn.addEventListener('click', showReview);

        backToResultsBtn.addEventListener('click', () => {
            reviewPage.style.display = 'none';
            resultsPage.style.display = 'flex';
        });

        document.addEventListener('keydown', handleKeyboardNavigation);
    }

    // ======================== QUIZ SETUP ========================

    function handleSubjectChange() {
        selectedSubject = subjectDropdown.value;

        if (!selectedSubject) {
            topicsContainer.style.display = 'none';
            selectedSubtopics.clear();
            updateStartButtonState();
            return;
        }

        topicsContainer.style.display = 'block';
        loadTopics();
    }

    function loadTopics() {
        topicsGrid.innerHTML = '';
        selectedSubtopics.clear();

        const subjectData = window.quizData.subjects[selectedSubject];
        if (!subjectData) return;

        const topics = subjectData.topics;

        for (const [topicKey, topicData] of Object.entries(topics)) {
            const topicElement = document.createElement('div');
            topicElement.className = 'topic-item';

            topicElement.innerHTML = `
                <div class="topic-header">
                    <div class="topic-name">${topicData.name}</div>
                    <input type="checkbox" class="topic-select-all" data-topic="${topicKey}">
                </div>
                <div class="subtopics-container" id="subtopics-${topicKey}">
                    <!-- Subtopic checkboxes -->
                </div>
            `;

            topicsGrid.appendChild(topicElement);

            const subtopicsContainer = document.getElementById(`subtopics-${topicKey}`);
            topicData.subtopics.forEach(subtopic => {
                const subtopicId = `${topicKey}-${subtopic.replace(/\s+/g, '-').toLowerCase()}`;

                const checkboxDiv = document.createElement('div');
                checkboxDiv.className = 'subtopic-checkbox';
                checkboxDiv.innerHTML = `
                    <input type="checkbox" id="${subtopicId}" value="${subtopicId}">
                    <label for="${subtopicId}">${subtopic}</label>
                `;

                subtopicsContainer.appendChild(checkboxDiv);

                const checkbox = checkboxDiv.querySelector('input');
                checkbox.addEventListener('change', function () {
                    if (this.checked) {
                        selectedSubtopics.add(this.value);
                    } else {
                        selectedSubtopics.delete(this.value);
                    }
                    updateStartButtonState();
                });
            });

            const selectAllCheckbox = topicElement.querySelector('.topic-select-all');
            selectAllCheckbox.addEventListener('change', function () {
                const subtopicCheckboxes = subtopicsContainer.querySelectorAll('input[type="checkbox"]');
                subtopicCheckboxes.forEach(checkbox => {
                    checkbox.checked = this.checked;
                    if (this.checked) {
                        selectedSubtopics.add(checkbox.value);
                    } else {
                        selectedSubtopics.delete(checkbox.value);
                    }
                });
                updateStartButtonState();
            });
        }

        updateStartButtonState();
    }

    function toggleInstructions() {
        const isVisible = instructionsContainer.style.display === 'block';
        instructionsContainer.style.display = isVisible ? 'none' : 'block';
        instructionsToggle.innerHTML = isVisible ?
            '<i class="fas fa-book-open"></i> Show Instructions' :
            '<i class="fas fa-times"></i> Hide Instructions';
    }

    function updateStartButtonState() {
        const hasSubject = !!selectedSubject;
        const hasSubtopics = selectedSubtopics.size > 0;
        startQuizBtn.disabled = !(hasSubject && hasSubtopics);
    }

    // ======================== QUIZ START ========================

    function startQuiz() {
        if (!selectedSubject || selectedSubtopics.size === 0) return;

        console.log("🚀 Starting Quiz...");
        console.log("Subject:", selectedSubject);
        console.log("Subtopics:", Array.from(selectedSubtopics));

        
        const filteredQuestions = window.quizData.getQuestionsBySubtopics(selectedSubject, Array.from(selectedSubtopics));

        console.log("Available questions:", filteredQuestions.length);

        if (filteredQuestions.length === 0) {
            alert(`No questions found. Please select different topics or try another subject.`);
            return;
        }

        // Clear used questions
        usedQuestionIdsSet.clear();

        // Shuffle questions - Fisher-Yates algorithm (SORTING)
        const shuffledQuestions = [...filteredQuestions];
        for (let i = shuffledQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
        }

        // Select 15 unique questions (SEARCHING)
        const selectedQuestions = [];
        for (const question of shuffledQuestions) {
            if (selectedQuestions.length >= 15) break;

            if (!usedQuestionIdsSet.has(question.id)) {
                usedQuestionIdsSet.add(question.id);
                selectedQuestions.push(question);
            }
        }

        // Fallback: If still less than 15, add any available
        if (selectedQuestions.length < 15) {
            console.log(`⚠️ Only ${selectedQuestions.length} unique questions available`);
            // Continue with available questions
        }

        // Initialize ARRAYS
        currentQuestionsArray = selectedQuestions;
        userAnswersArray = new Array(currentQuestionsArray.length).fill(null);
        visitedArray = new Array(currentQuestionsArray.length).fill(false);
        skippedArray = new Array(currentQuestionsArray.length).fill(false);
        questionStatesArray = new Array(currentQuestionsArray.length).fill(0);

        // Initialize LINKED LIST
        questionLinkedList = new QuestionLinkedList();
        currentQuestionsArray.forEach((question, index) => {
            questionLinkedList.add(question, index);
        });

        // Initialize QUEUE for BFS
        questionQueue = new QuestionQueue();
        for (let i = 0; i < currentQuestionsArray.length; i++) {
            questionQueue.enqueue(i);
        }

        // Reset state
        currentQuestionIndex = 0;
        lockedQuestionsSet.clear();
        timeLeft = 15 * 60;
        isQuizActive = true;
        quizStartTime = Date.now();
        navigationStack = new NavigationStack();

        // Update UI
        welcomePage.style.display = 'none';
        quizPage.style.display = 'flex';
        resultsPage.style.display = 'none';
        reviewPage.style.display = 'none';

        const subjectName = window.quizData.subjects[selectedSubject].name;
        quizSubject.textContent = subjectName;

        // Start timer
        updateTimerDisplay();
        clearInterval(quizTimer);
        quizTimer = setInterval(updateTimer, 1000);

        // Load first question
        loadQuestion(currentQuestionIndex);

        totalQuestions.textContent = currentQuestionsArray.length;

        createQuestionIndicators();

        console.log("✅ Quiz started successfully with", currentQuestionsArray.length, "questions");
    }

    // ======================== TIMER ========================

    function updateTimer() {
        if (!isQuizActive) return;

        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(quizTimer);
            submitQuiz();
        } else if (timeLeft <= 300) {
            timerContainer.classList.add('warning');
        }
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // ======================== QUESTION LOADING ========================

    function loadQuestion(index) {
        // Update LINKED LIST
        questionLinkedList.traverseTo(index);
        const currentNode = questionLinkedList.getCurrent();

        if (!currentNode) return;

        currentQuestionNum.textContent = index + 1;
        questionText.textContent = currentNode.question.question;

        optionsContainer.innerHTML = '';
        const optionsArray = currentNode.question.options;

        optionsArray.forEach((option, optionIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';

            const optionLetter = document.createElement('div');
            optionLetter.className = 'option-letter';
            optionLetter.textContent = String.fromCharCode(65 + optionIndex);

            const optionText = document.createElement('div');
            optionText.textContent = option;

            optionDiv.appendChild(optionLetter);
            optionDiv.appendChild(optionText);

            const isLocked = lockedQuestionsSet.has(index);
            const isSelected = userAnswersArray[index] === optionIndex;

            if (isLocked) {
                optionDiv.classList.add('locked');
            } else if (isSelected) {
                optionDiv.classList.add('selected');
            }

            if (!isLocked) {
                optionDiv.addEventListener('click', () => selectOption(index, optionIndex));
            }

            optionsContainer.appendChild(optionDiv);
        });

        // Mark as visited
        if (questionStatesArray[index] === 0) {
            questionStatesArray[index] = 1;
            visitedArray[index] = true;
            currentNode.visited = true;
            updateQuestionIndicator(index);
        }

        updateNavigationButtons();
        updateQuestionIndicators();
    }

    function selectOption(questionIndex, optionIndex) {
        lockedQuestionsSet.add(questionIndex);
        questionStatesArray[questionIndex] = 3;
        userAnswersArray[questionIndex] = optionIndex;

        const node = questionLinkedList.traverseTo(questionIndex);
        if (node) {
            node.answered = true;
        }

        // STACK operation
        navigationStack.push(questionIndex);

        if (questionIndex === currentQuestionIndex) {
            loadQuestion(currentQuestionIndex);
        }

        updateQuestionIndicator(questionIndex);
    }

    function skipQuestion() {
        if (questionStatesArray[currentQuestionIndex] !== 3) {
            questionStatesArray[currentQuestionIndex] = 2;
            skippedArray[currentQuestionIndex] = true;
        }

        const node = questionLinkedList.getCurrent();
        if (node) {
            node.skipped = true;
        }

        goToNextQuestion();
    }

    // ======================== NAVIGATION (LINKED LIST) ========================

    function goToPreviousQuestion() {
        // STACK pop operation
        const prevIndex = navigationStack.pop();

        if (prevIndex !== null && prevIndex !== currentQuestionIndex) {
            currentQuestionIndex = prevIndex;
        } else {
            const prevNode = questionLinkedList.prevNode();
            if (prevNode) {
                currentQuestionIndex = prevNode.index;
            }
        }

        loadQuestion(currentQuestionIndex);
    }

    function goToNextQuestion() {
        const nextNode = questionLinkedList.nextNode();
        if (nextNode) {
            currentQuestionIndex = nextNode.index;
            loadQuestion(currentQuestionIndex);
        }
    }

    function updateNavigationButtons() {
        const currentNode = questionLinkedList.getCurrent();
        if (!currentNode) return;

        prevBtn.disabled = !currentNode.prev;
        nextBtn.disabled = !currentNode.next;
    }

    // ======================== QUESTION INDICATORS ========================

    function createQuestionIndicators() {
        questionsGrid.innerHTML = '';

        for (let i = 0; i < currentQuestionsArray.length; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'question-indicator not-visited';
            indicator.textContent = i + 1;
            indicator.dataset.index = i;

            indicator.addEventListener('click', () => {
                currentQuestionIndex = i;
                questionLinkedList.traverseTo(i);
                loadQuestion(i);
            });

            questionsGrid.appendChild(indicator);
        }

        updateQuestionIndicators();
    }

    function updateQuestionIndicators() {
        const indicators = questionsGrid.querySelectorAll('.question-indicator');

        indicators.forEach((indicator, index) => {
            indicator.className = 'question-indicator';

            switch (questionStatesArray[index]) {
                case 0: indicator.classList.add('not-visited'); break;
                case 1: indicator.classList.add('visited'); break;
                case 2: indicator.classList.add('skipped'); break;
                case 3: indicator.classList.add('answered-locked'); break;
            }

            if (index === currentQuestionIndex) {
                indicator.classList.add('current');
            }
        });
    }

    function updateQuestionIndicator(index) {
        const indicator = questionsGrid.querySelector(`.question-indicator[data-index="${index}"]`);
        if (!indicator) return;

        indicator.className = 'question-indicator';

        switch (questionStatesArray[index]) {
            case 0: indicator.classList.add('not-visited'); break;
            case 1: indicator.classList.add('visited'); break;
            case 2: indicator.classList.add('skipped'); break;
            case 3: indicator.classList.add('answered-locked'); break;
        }

        if (index === currentQuestionIndex) {
            indicator.classList.add('current');
        }
    }

    // ======================== QUIZ SUBMISSION ========================

    function submitQuiz() {
        isQuizActive = false;
        clearInterval(quizTimer);

        // Calculate results
        let correctCount = 0;
        let incorrectCount = 0;
        let unansweredCount = 0;

        for (let i = 0; i < currentQuestionsArray.length; i++) {
            if (userAnswersArray[i] === null) {
                unansweredCount++;
            } else if (userAnswersArray[i] === currentQuestionsArray[i].correctAnswer) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        }

        const totalQuestionsCount = currentQuestionsArray.length;
        const score = Math.round((correctCount / totalQuestionsCount) * 100);
        const timeElapsed = 15 * 60 - timeLeft;
        const minutesElapsed = Math.floor(timeElapsed / 60);
        const secondsElapsed = timeElapsed % 60;
        const accuracyValue = Math.round((correctCount / (correctCount + incorrectCount)) * 100) || 0;

        // Update results
        scoreValue.textContent = score;
        correctAnswers.textContent = `${correctCount} out of ${totalQuestionsCount}`;
        incorrectAnswers.textContent = `${incorrectCount} (${unansweredCount} unanswered)`;
        timeTaken.textContent = `${minutesElapsed.toString().padStart(2, '0')}:${secondsElapsed.toString().padStart(2, '0')}`;
        accuracy.textContent = `${accuracyValue}%`;

        // Determine rank (SEARCHING algorithm)
        const rankScores = [
            { min: 90, rank: 'Expert' },
            { min: 75, rank: 'Advanced' },
            { min: 60, rank: 'Intermediate' },
            { min: 40, rank: 'Beginner' },
            { min: 0, rank: 'Novice' }
        ];

        let rankText = 'Novice';
        for (const rankItem of rankScores) {
            if (score >= rankItem.min) {
                rankText = rankItem.rank;
                break;
            }
        }

        rank.textContent = rankText;

        // Show results
        quizPage.style.display = 'none';
        resultsPage.style.display = 'flex';
    }

    // ======================== RESTART & NEW QUIZ ========================

    function restartQuiz() {
        // Reset ARRAYS
        userAnswersArray.fill(null);
        visitedArray.fill(false);
        skippedArray.fill(false);
        questionStatesArray.fill(0);

        // Reset SET
        lockedQuestionsSet.clear();

        // Reset DSA structures
        navigationStack = new NavigationStack();
        questionQueue = new QuestionQueue();

        // Reset LINKED LIST
        let current = questionLinkedList.head;
        while (current) {
            current.visited = false;
            current.answered = false;
            current.skipped = false;
            current = current.next;
        }
        questionLinkedList.traverseTo(0);

        // Reset state
        currentQuestionIndex = 0;
        timeLeft = 15 * 60;
        isQuizActive = true;
        quizStartTime = Date.now();

        // Update UI
        resultsPage.style.display = 'none';
        quizPage.style.display = 'flex';

        updateTimerDisplay();
        clearInterval(quizTimer);
        quizTimer = setInterval(updateTimer, 1000);

        loadQuestion(currentQuestionIndex);
        createQuestionIndicators();
    }

    function startNewQuiz() {
        // Clear everything
        selectedSubject = null;
        selectedSubtopics.clear();
        currentQuestionsArray = [];
        userAnswersArray = [];
        visitedArray = [];
        skippedArray = [];
        questionStatesArray = [];
        lockedQuestionsSet.clear();
        usedQuestionIdsSet.clear();

        questionLinkedList = null;
        navigationStack = new NavigationStack();
        questionQueue = new QuestionQueue();

        // Update UI
        resultsPage.style.display = 'none';
        welcomePage.style.display = 'flex';

        subjectDropdown.value = '';
        topicsContainer.style.display = 'none';
        topicsGrid.innerHTML = '';
        updateStartButtonState();
    }

    // ======================== REVIEW ========================

    function showReview() {
        resultsPage.style.display = 'none';
        reviewPage.style.display = 'flex';
        generateReviewContent();
    }

    function generateReviewContent() {
        reviewContent.innerHTML = '';

        // Use QUEUE BFS traversal
        const queue = [...Array(currentQuestionsArray.length).keys()];

        while (queue.length > 0) {
            const index = queue.shift();
            const question = currentQuestionsArray[index];
            const userAnswer = userAnswersArray[index];
            const isCorrect = userAnswer === question.correctAnswer;
            const isUnanswered = userAnswer === null;

            const reviewQuestion = document.createElement('div');
            reviewQuestion.className = 'review-question';

            let statusText = '';
            let statusClass = '';

            if (isUnanswered) {
                statusText = 'Unanswered';
                statusClass = 'unanswered';
            } else if (isCorrect) {
                statusText = 'Correct';
                statusClass = 'correct';
            } else {
                statusText = 'Incorrect';
                statusClass = 'incorrect';
            }

            reviewQuestion.innerHTML = `
                <div class="review-question-header">
                    <div class="review-question-number">Question ${index + 1}</div>
                    <div class="review-question-status ${statusClass}">${statusText}</div>
                </div>
                <div class="review-question-text">${question.question}</div>
                <div class="review-options-grid" id="reviewOptions-${index}"></div>
                ${!isUnanswered ? `<div class="review-explanation">
                    <h4>Explanation:</h4>
                    <p>${question.explanation}</p>
                </div>` : ''}
            `;

            reviewContent.appendChild(reviewQuestion);

            const optionsContainer = document.getElementById(`reviewOptions-${index}`);
            question.options.forEach((option, optionIndex) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'review-option';

                const optionLetter = document.createElement('div');
                optionLetter.className = 'review-option-letter';
                optionLetter.textContent = String.fromCharCode(65 + optionIndex);

                const optionText = document.createElement('div');
                optionText.textContent = option;

                optionDiv.appendChild(optionLetter);
                optionDiv.appendChild(optionText);

                if (optionIndex === question.correctAnswer) {
                    optionDiv.classList.add('correct-answer');
                }

                if (optionIndex === userAnswer) {
                    optionDiv.classList.add('user-answer');
                    if (isCorrect) {
                        optionDiv.classList.add('correct');
                    } else {
                        optionDiv.classList.add('incorrect');
                    }
                }

                optionsContainer.appendChild(optionDiv);
            });
        }
    }

    // ======================== KEYBOARD ========================

    function handleKeyboardNavigation(e) {
        if (!isQuizActive) return;

        switch (e.key) {
            case 'ArrowLeft':
                if (!prevBtn.disabled) goToPreviousQuestion();
                break;
            case 'ArrowRight':
                if (!nextBtn.disabled) goToNextQuestion();
                break;
            case ' ':
                e.preventDefault();
                skipQuestion();
                break;
            case '1':
            case '2':
            case '3':
            case '4':
                if (!lockedQuestionsSet.has(currentQuestionIndex)) {
                    const optionIndex = parseInt(e.key) - 1;
                    if (optionIndex >= 0 && optionIndex < 4) {
                        selectOption(currentQuestionIndex, optionIndex);
                    }
                }
                break;
        }
    }

    // ======================== INITIALIZE ========================

    init();
});