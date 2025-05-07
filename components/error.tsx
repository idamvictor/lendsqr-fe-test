"use client";

import React from "react";
import { AlertOctagon } from "react-feather";

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
          <AlertOctagon size={48} />
        </div>
        <h2 className="error-title">Oops!</h2>
        <p className="error-message">{message}</p>
        <button
          className="error-retry"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
