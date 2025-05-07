"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";

interface ErrorProps {
  message?: string;
}

export default function Error({
  message = "Something went wrong",
}: ErrorProps) {
  return (
    <div className="error-wrapper">
      <div className="error-container">
        <div className="error-icon">
          <AlertTriangle size={48} />
        </div>
        <h2>Error Loading Data</h2>
        <p>{message}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    </div>
  );
}
