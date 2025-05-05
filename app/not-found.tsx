"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/dashboard" className="not-found__button">
          <ArrowLeft size={20} />
          <span>Back to Dashboard</span>
        </Link>
      </div>
    </div>
  );
}
