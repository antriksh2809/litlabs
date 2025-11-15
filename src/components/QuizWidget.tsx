import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Cpu, Navigation, Printer, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuizWidget = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Which component is essential for a robot to detect obstacles?",
      options: [
        "Microcontroller",
        "Ultrasonic Sensor",
        "Motor Driver",
        "Battery"
      ],
      correct: 1,
      explanation: "Ultrasonic sensors emit sound waves and measure the time it takes for the echo to return, allowing robots to detect obstacles."
    },
    {
      id: 2,
      question: "What does AI stand for in the context of machine learning?",
      options: [
        "Automated Intelligence",
        "Artificial Intelligence",
        "Algorithmic Integration",
        "Advanced Interface"
      ],
      correct: 1,
      explanation: "AI stands for Artificial Intelligence, which refers to systems that can perform tasks typically requiring human intelligence."
    },
    {
      id: 3,
      question: "Which programming language is commonly used for drone flight control?",
      options: [
        "Python",
        "JavaScript",
        "C++",
        "All of the above"
      ],
      correct: 3,
      explanation: "All these languages can be used for drone programming, with Python being popular for its simplicity and extensive libraries."
    }
  ];

  const handleAnswer = () => {
    if (selectedAnswer === null) return;

    // Check if answer is correct
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    // Move to next question or show results
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setCompleted(false);
  };

  const startDemo = () => {
    setCompleted(true);
  };

  if (completed) {
    return (
      <div className="bg-card rounded-2xl border p-6 shadow-sm">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Ready for the Challenge?</h3>
          <p className="text-muted-foreground mb-6">
            You've completed our STEM quiz! Now try our interactive demos.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Button className="flex flex-col items-center gap-2 h-auto p-4">
              <Bot className="h-6 w-6" />
              <span>Robotics Simulator</span>
            </Button>
            <Button className="flex flex-col items-center gap-2 h-auto p-4">
              <Cpu className="h-6 w-6" />
              <span>AI Playground</span>
            </Button>
            <Button className="flex flex-col items-center gap-2 h-auto p-4">
              <Navigation className="h-6 w-6" />
              <span>Drone Flight</span>
            </Button>
            <Button className="flex flex-col items-center gap-2 h-auto p-4">
              <Printer className="h-6 w-6" />
              <span>3D Design</span>
            </Button>
          </div>
          <Button variant="outline" className="mt-6" onClick={restartQuiz}>
            Retake Quiz
          </Button>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="bg-card rounded-2xl border p-6 shadow-sm">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Quiz Completed!</h3>
          <p className="text-5xl font-bold text-primary mb-2">{score}/{questions.length}</p>
          <p className="text-muted-foreground mb-6">
            {score === questions.length ? "Perfect score! You're a STEM expert!" : 
             score >= questions.length/2 ? "Good job! You understand the basics." : 
             "Keep learning! STEM is exciting!"}
          </p>
          <Button className="w-full mb-4" onClick={startDemo}>
            Try Interactive Demos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="w-full" onClick={restartQuiz}>
            Retake Quiz
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl border p-6 shadow-sm">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg">STEM Challenge Quiz</h3>
          <span className="text-sm text-muted-foreground">
            {currentQuestion + 1}/{questions.length}
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h4 className="text-xl font-semibold mb-6">
          {questions[currentQuestion].question}
        </h4>

        <div className="space-y-3 mb-6">
          {questions[currentQuestion].options.map((option, index) => (
            <motion.button
              key={index}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                selectedAnswer === index
                  ? "border-primary bg-primary/10"
                  : "border-muted hover:border-primary/50 hover:bg-muted/50"
              }`}
              onClick={() => setSelectedAnswer(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                  selectedAnswer === index 
                    ? "border-primary bg-primary text-white" 
                    : "border-muted-foreground"
                }`}>
                  {selectedAnswer === index && <CheckCircle className="h-4 w-4" />}
                </div>
                <span>{option}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <motion.div
            className="p-4 rounded-xl bg-muted/50 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm">
              <span className="font-semibold">Explanation:</span> {questions[currentQuestion].explanation}
            </p>
          </motion.div>
        )}

        <Button 
          className="w-full"
          onClick={handleAnswer}
          disabled={selectedAnswer === null}
        >
          {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
        </Button>
      </motion.div>
    </div>
  );
};

export default QuizWidget;