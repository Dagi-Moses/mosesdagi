"use client"

import Link from "next/link";

// app/not-found.tsx
export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-5xl font-bold">404</h1>
            <p className="mt-4 text-xl">Oops! Page not found.</p>
            <Link href="/" className="mt-6 text-blue-600 hover:underline">
                Go back home
            </Link>
        </div>
    );
}
