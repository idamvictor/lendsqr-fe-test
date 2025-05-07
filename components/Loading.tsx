"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="loading-wrapper">
      <div className="loading-container">
        <div className="loading-spinner" />
        <p>Loading...</p>
      </div>
    </div>
  );
}
