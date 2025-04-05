"use client";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import React from "react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.png"
        alt={`${APP_NAME} logo`}
        height={160}
        width={160}
        priority={true}
      />
      <div className="p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold m-4">Page Not Found</h1>
        <p className="text-destructive mb-5">Could not find requested page.</p>
        <Link
          href="/"
          className="mt-7 ml-3 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to the Home Page
        </Link>
      </div>
    </div>
  );
}
