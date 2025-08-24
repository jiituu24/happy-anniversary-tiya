import React, { useState } from 'react';
import { Heart, ArrowLeft, Lock, CheckCircle, XCircle, Sparkles } from 'lucide-react';

interface QuizProps {
  onComplete: () => void;
  onBack: () => void;
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    question: "What was the exact time when Jiituu proposed Tiya?",
    options: [
      "12:45 25 Aug 2024",
      "12:51 25 Aug 2024",
      "1:00 25 Aug 2024",
      "12:30 25 Aug 2024"
    ],
    correctAnswer: 1
  },
  {
    question: "Where was the 1st trip organized to?",
    options: [
      "Goa",
      "Shimla",
      "Manali",
      "Sonbhadra"
    ],
    correctAnswer: 3
  },
  {
    question: "What was the date Tiya got her college?",
    options: [
      "3 Sept 2024",
      "4 Sept 2024",
      "5 Sept 2024",
      "2 Sept 2024"
    ],
    correctAnswer: 1
  },
  {
    question: "Which subject Quiz was it Jiituu went to attempt while Tiya was leaving?",
    options: [
      "MA101",
      "CS101",
      "PH101",
      "EE101"
    ],
    correctAnswer: 0
  },
  {
    question: "What was the time Jiituu saw Tiya for the last time in Varanasi?",
    options: [
      "6:15 26 Sept 2024",
      "6:20 26 Sept 2024",
      "6:10 26 Sept 2024",
      "6:17 26 Sept 2024"
    ],
    correctAnswer: 3
  },
  {
    question: "What does Jiituu call her?",
    options: [
      "Sweetheart",
      "Tiya",
      "Princess",
      "Love"
    ],
    correctAnswer: 1
  }
];

export default function Quiz({ onComplete, onBack }: QuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    return selectedAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
  };

  const allQuestionsAnswered = selectedAnswers.every(answer => answer !== null);

  const FloatingHeart = ({ className }: { className: string }) => (
    <Heart 
      className={`absolute opacity-40 animate-pulse ${className}`}
      fill="currentColor"
    />
  );

  if (showResults) {
    const score = calculateScore();
    const passed = score === questions.length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-pink-200 relative overflow-hidden">
        <FloatingHeart className="top-20 left-16 w-8 h-8 text-pink-400" />
        <FloatingHeart className="top-32 right-24 w-6 h-6 text-rose-400" />
        <FloatingHeart className="bottom-32 right-32 w-8 h-8 text-pink-500" />
        <FloatingHeart className="bottom-48 left-16 w-6 h-6 text-rose-300" />
        <FloatingHeart className="top-48 left-32 w-10 h-10 text-pink-400" />
        <FloatingHeart className="bottom-64 right-8 w-7 h-7 text-rose-400" />

        <div className="flex items-center justify-center min-h-screen px-8">
          <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full text-center shadow-xl border border-pink-200">
            <div className="mb-6">
              {passed ? (
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              ) : (
                <XCircle className="w-16 h-16 text-red-500 mx-auto" />
              )}
            </div>

            <h2 className="text-2xl font-bold text-rose-800 mb-4">
              {passed ? "Congratulations! 🎉" : "Not Quite Right 😔"}
            </h2>

            <p className="text-lg text-pink-700 mb-6">
              You scored {score} out of {questions.length}
            </p>

            {passed ? (
              <div>
                <p className="text-rose-600 mb-6">
                  You've proven your love and unlocked the letter! 💕
                </p>
                <button
                  onClick={onComplete}
                  className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Read Love Letter 💌
                </button>
              </div>
            ) : (
              <div>
                <p className="text-rose-600 mb-6">
                  You need to answer all questions correctly to unlock the love letter.
                </p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => {
                      setSelectedAnswers(new Array(questions.length).fill(null));
                      setShowResults(false);
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={onBack}
                    className="px-6 py-3 bg-white bg-opacity-50 backdrop-blur-sm text-rose-700 font-semibold rounded-full border-2 border-pink-300 hover:bg-opacity-70 transform hover:scale-105 transition-all duration-300"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-pink-200 relative overflow-hidden">
      <FloatingHeart className="top-20 left-16 w-8 h-8 text-pink-400" />
      <FloatingHeart className="top-32 right-24 w-6 h-6 text-rose-400" />
      <FloatingHeart className="bottom-32 right-32 w-8 h-8 text-pink-500" />
      <FloatingHeart className="bottom-48 left-16 w-6 h-6 text-rose-300" />
      <FloatingHeart className="top-48 left-32 w-10 h-10 text-pink-400" />
      <FloatingHeart className="bottom-64 right-8 w-7 h-7 text-rose-400" />
      <FloatingHeart className="top-64 right-16 w-7 h-7 text-pink-300" />
      <FloatingHeart className="top-80 left-24 w-9 h-9 text-rose-500" />

      <Sparkles className="absolute top-56 left-48 w-4 h-4 text-pink-300 opacity-80 animate-pulse" />
      <Sparkles className="absolute bottom-40 right-48 w-3 h-3 text-rose-300 opacity-70 animate-pulse" />
      <Sparkles className="absolute top-44 right-80 w-5 h-5 text-pink-400 opacity-60 animate-pulse" />

      <div className="p-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-rose-700 hover:text-rose-900 font-semibold transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>
      </div>

      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-8">
        <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-3xl p-8 max-w-4xl w-full shadow-xl border border-pink-200">
          <div className="text-center mb-8">
            <div className="relative mb-6">
              <Lock className="w-12 h-12 text-rose-600 mx-auto" />
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-pink-300" />
            </div>
            <h1 className="text-3xl font-bold text-rose-800 mb-2">
              The Love Letter is Locked 🔒
            </h1>
            <p className="text-rose-600 text-lg">
              Answer the following {questions.length} multiple choice questions to read it
            </p>
          </div>

          <div className="space-y-8">
            {questions.map((question, questionIndex) => (
              <div key={questionIndex} className="bg-white bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 border border-pink-200">
                <h3 className="text-lg font-bold text-rose-800 mb-4">
                  Question {questionIndex + 1}: {question.question}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {question.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleOptionSelect(questionIndex, optionIndex)}
                      className={`p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                        selectedAnswers[questionIndex] === optionIndex
                          ? 'border-rose-500 bg-pink-100 bg-opacity-70 shadow-md'
                          : 'border-pink-200 bg-white bg-opacity-50 hover:bg-opacity-70 hover:border-pink-300'
                      }`}
                    >
                      <span className="text-rose-800 font-medium">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={handleSubmit}
              disabled={!allQuestionsAnswered}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                allQuestionsAnswered
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Submit Quiz 💕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}