"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
  const { status } = useSession();
  const router = useRouter();

  // If already signed in, bounce to dashboard before rendering the page
  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  // Only render the sign-in UI if not authenticated
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-purple-700 via-indigo-700 to-blue-700 px-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white">
          Welcome to PokeCard
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Please sign in with Google to continue
        </p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-full flex justify-center items-center gap-3 px-6 py-3 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors duration-300 shadow-md"
        >
          {/* Google logo svg */}
          <svg className="w-6 h-6" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.4H272v95.4h146.9c-6.3 34.1-25 62.9-53.3 82.3v68.3h86.2c50.5-46.6 79.7-114.9 79.7-195.6z" fill="#4285F4"/>
            <path d="M272 544.3c72.7 0 133.7-24.1 178.2-65.3l-86.2-68.3c-23.8 15.9-54.3 25.2-92 25.2-70.7 0-130.6-47.8-152.1-112.1H31.9v70.4c44.4 87.9 135 150.1 240.1 150.1z" fill="#34A853"/>
            <path d="M119.9 325.8c-10.2-30.4-10.2-63.5 0-93.9v-70.4H31.9c-38.1 74.5-38.1 163.3 0 237.8l88-73.5z" fill="#FBBC05"/>
            <path d="M272 214.1c39.5 0 75.1 13.6 102.9 40.4l77-77C401.3 129.3 344 103.7 272 103.7c-105.1 0-195.7 62.2-240.1 150.1l88 73.5c21.6-64.3 81.4-112.1 152.1-112.1z" fill="#EA4335"/>
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
