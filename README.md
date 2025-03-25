# Quiz-Website
Quiz Application
A simple, interactive online quiz game built with HTML, CSS, and JavaScript. Users can answer multiple-choice questions, submit their answers, and view their final score in a modal popup. The quiz covers general knowledge topics, with 20 questions stored in a JavaScript array.

Features:-
  Responsive Design: Works on various screen sizes with a clean and modern UI.
  Dynamic Quiz Generation: Questions and options are dynamically rendered from a JavaScript data array.
  Score Tracking: Keeps track of the user's score and displays it upon submission.
  Modal Result Display: Shows the final score in a popup modal with a close button.
  Interactive UI: Hover effects, checked radio button styling, and button animations enhance user experience.

Demo:-
You can test the quiz by opening index.html in a web browser. Answer the questions, click "Submit," and view your score in the modal.

Files:-
  index.html: The main HTML structure of the quiz application.
  d.css: Stylesheet for the quiz layout, colors, and animations.
  d.js: JavaScript file containing quiz data, logic for rendering questions, and score calculation.

Implementation Details:-
HTML Structure
  The quiz is contained within a div#quiz-container.
  Questions are dynamically added to div#question-container.
  A footer (div#quiz-footer) includes a "Submit" button and a live score display.
  A modal (div#resultModal) appears after submission to show the final score.
CSS Styling
  Fonts and Colors: Uses 'Lucida Sans' font family and a pastel color scheme (darksalmon container, #e0e7ff background).
  Card Layout: Questions are styled as cards with shadows and rounded corners.
  Radio Buttons: Custom styling for radio inputs with hover and checked states.
  Modal: A semi-transparent overlay with a centered content box for the result.
  Buttons: Interactive buttons with hover effects and solid borders.
JavaScript Logic
  Quiz Data: Stored in the quizData array, each object contains a question, options, and correct answer.
  Display Function: displayQuiz() dynamically generates HTML for each question and its options.
  Submit Function: submitQuiz() calculates the score by comparing selected answers with correct ones.
  Result Display: showResult() updates and displays the modal with the final score.

Usage:-
  Open the quiz in a browser.
  Select one answer per question using the radio buttons.
  Click the "Submit" button to calculate your score.
  View your score in the modal and click "Close" to reset.
Future Improvements:-
  Add a timer for each question or the entire quiz.
  Include feedback for correct/incorrect answers after submission.
  Allow users to restart the quiz without refreshing the page.
  Store high scores using localStorage.
