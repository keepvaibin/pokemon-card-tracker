// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // Tailwind Heroicons
import { useSession } from "next-auth/react";
import Link from "next/link";

export function Navbar() {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Dummy portfolio value and small graph data (replace with real data)
  const portfolioValue = 25342.17;
  const dailyChange = 1.24; // percent change
  const dailyChangePositive = dailyChange >= 0;

  return (
    <nav className="w-full bg-gradient-to-r from-green-400 to-green-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16">
        {/* Left side: Logo */}
        <Link href="/dashboard" className="flex items-center space-x-2">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-8 w-8"
          />
          <span className="text-white text-xl font-bold select-none">Vaibhawood</span>
        </Link>

        {/* Middle: Navigation links */}
        <div className="hidden md:flex space-x-8 text-white font-semibold text-sm">
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link href="/portfolio" className="hover:underline">
            Portfolio
          </Link>
          <Link href="/activity" className="hover:underline">
            Activity
          </Link>
          <Link href="/transfers" className="hover:underline">
            Transfers
          </Link>
        </div>

        {/* Right side: Portfolio value and profile dropdown */}
        <div className="flex items-center space-x-6">
          {/* Mini portfolio overview */}
          <div className="hidden sm:flex flex-col items-end text-white select-none">
            <p className="font-semibold text-lg tracking-tight">${portfolioValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
            <p
              className={`text-sm ${
                dailyChangePositive ? "text-green-200" : "text-red-400"
              } flex items-center`}
            >
              {dailyChangePositive ? "▲" : "▼"} {Math.abs(dailyChange).toFixed(2)}%
            </p>
          </div>

          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <img
                src={session?.user?.image || "/default-avatar.png"}
                alt="User Avatar"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-white font-semibold hidden sm:block">
                {session?.user?.name?.split(" ")[0] || "User"}
              </span>
              <ChevronDownIcon className="h-4 w-4 text-white" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Settings
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
