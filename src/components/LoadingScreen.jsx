import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const loadingSteps = [
    "Importing datasets...",
    "Cleaning data...",
    "Running analysis...",
    "Generating insights...",
    "Preparing visualization...",
    "Finalizing report..."
  ];
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    let textIndex = 0;
    let stepIndex = 0;

    const interval = setInterval(() => {
      const currentText = loadingSteps[stepIndex];
      setText(currentText.substring(0, textIndex));
      textIndex++;

      if (textIndex > currentText.length) {
        textIndex = 0;
        stepIndex++;

        if (stepIndex >= loadingSteps.length) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 2000);
          return;
        }

        setTimeout(() => {
          setCurrentStep(stepIndex);
        }, 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  const progress = ((currentStep + 1) / loadingSteps.length) * 100;

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-8 text-2xl font-mono">
        {text}<span className="animate-blink ml-1">_</span>
      </div>

      <div className="w-[300px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div 
          className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] transition-all duration-500" 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-4 text-sm text-gray-500 font-mono">
        {currentStep + 1} / {loadingSteps.length} steps completed
      </div>
    </div>
  );
};

export default LoadingScreen;