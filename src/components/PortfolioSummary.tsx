// src/components/PortfolioSummary.tsx
"use client";

import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

interface PortfolioSummaryProps {
  total: number;
  dailyChange: number;
  sparkData: number[];
}

export function PortfolioSummary({ total, dailyChange, sparkData }: PortfolioSummaryProps) {
  return (
    <section className="bg-white rounded-xl shadow p-6 mb-8">
      <h2 className="text-gray-600 uppercase tracking-wide text-xs font-semibold mb-2">
        Portfolio Value
      </h2>
      <div className="flex items-center space-x-4">
        <p className="text-4xl font-semibold">
          ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        <p
          className={`text-sm font-semibold ${
            dailyChange >= 0 ? "text-green-600" : "text-red-600"
          } flex items-center space-x-1`}
        >
          {dailyChange >= 0 ? (
            <span className="text-green-600">▲</span>
          ) : (
            <span className="text-red-600">▼</span>
          )}
          <span>{Math.abs(dailyChange).toFixed(2)}%</span>
          <span className="text-gray-400 text-xs">today</span>
        </p>
      </div>
      <div className="mt-4 max-w-xs">
        <Sparklines data={sparkData} svgWidth={200} svgHeight={40} margin={5}>
          <SparklinesLine
            color={dailyChange >= 0 ? "#22c55e" : "#ef4444"}
            style={{ strokeWidth: 3, fill: "none" }}
          />
        </Sparklines>
      </div>
    </section>
  );
}
