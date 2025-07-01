"use client";
import * as React from "react";

// Step data type
export interface ProgressStepData {
  id: number;
  isActive: boolean;
  isCompleted: boolean;
}

// Step circle SVG
export const ProgressStep: React.FC<{
  step: ProgressStepData;
  position: { cx: number; cy: number };
}> = ({ step, position }) => {
  if (step.isActive) {
    return (
      <circle
        cx={position.cx}
        cy={position.cy}
        r={10}
        fill="var(--mywhite)"
        stroke="var(--myemerald-400)"
        strokeWidth={5}
      />
    );
  }
  if (step.isCompleted) {
    return (
      <circle
        cx={position.cx}
        cy={position.cy}
        r={10}
        fill="var(--myemerald-400)"
        stroke="var(--myemerald-400)"
        strokeWidth={5}
      />
    );
  }
  return (
    <circle
      cx={position.cx}
      cy={position.cy}
      r={10}
      fill="var(--myviolet-50)"
      stroke="var(--myneutral-200)"
      strokeWidth={2}
    />
  );
};

// Connector SVG
export const ProgressConnector: React.FC<{
  startX: number;
  endX: number;
  y: number;
  isActive?: boolean;
}> = ({ startX, endX, y, isActive = false }) => (
  <line
    x1={startX}
    y1={y}
    x2={endX}
    y2={y}
    stroke={isActive ? "#03D89F" : "#E5E5E5"}
    strokeWidth={3}
    strokeLinecap="round"
  />
);

// SVG layout
export const ProgressSVG: React.FC<{
  steps: ProgressStepData[];
  labels: string[];
}> = ({ steps, labels }) => {
  const width = 800;
  const height = 60;
  const margin = 40;
  const stepGap = (width - 2 * margin) / (steps.length - 1);
  const cy = 20;

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* Connectors */}
      {steps.map((step, idx) =>
        idx < steps.length - 1 ? (
          <ProgressConnector
            key={idx}
            startX={margin + idx * stepGap + 12}
            endX={margin + (idx + 1) * stepGap - 12}
            y={cy}
            isActive={steps[idx].isCompleted}
          />
        ) : null
      )}
      {/* Steps */}
      {steps.map((step, idx) => (
        <ProgressStep
          key={step.id}
          step={step}
          position={{ cx: margin + idx * stepGap, cy }}
        />
      ))}
      {/* Labels */}
      {labels.map((label, idx) => (
        <text
          key={label}
          x={margin + idx * stepGap}
          y={cy + 32}
          textAnchor="middle"
          fontSize="15"
          fill={steps[idx].isActive || steps[idx].isCompleted ? "#222" : "#B0B0B0"}
          fontWeight={steps[idx].isActive ? 600 : 400}
          style={{ fontFamily: "inherit" }}
        >
          {label}
        </text>
      ))}
    </svg>
  );
};

// Main ProgressIndicator
const stepLabels = [
  "Personal Data",
  "Loan Info",
  "Additional Info",
  "Final review",
];

export const ProgressStepper: React.FC<{
  currentStep?: number;
  className?: string;
}> = ({ currentStep = 1, className = "" }) => {
  const steps: ProgressStepData[] = React.useMemo(
    () =>
      Array.from({ length: stepLabels.length }, (_, idx) => ({
        id: idx + 1,
        isActive: idx + 1 === currentStep,
        isCompleted: idx + 1 < currentStep,
      })),
    [currentStep]
  );

  return (
    <div className={`w-full max-w-4xl mx-auto px-2 ${className}`}>
      <ProgressSVG steps={steps} labels={stepLabels} />
    </div>
  );
};

export default ProgressStepper;