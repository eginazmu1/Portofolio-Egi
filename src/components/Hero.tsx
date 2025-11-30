import React from "react";
import { Instagram, Github, Linkedin, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative flex items-center justify-center">
          {/* Floating Cards - Left Side */}
          <div className="absolute left-0 -translate-x-64 space-y-8 hidden xl:block">
            <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 border border-blue-100 dark:border-gray-600">
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  2023
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 font-semibold text-sm">
                  Coding Journey
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 border border-cyan-100 dark:border-gray-600">
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 font-semibold text-sm">
                  Projects Built
                </div>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center z-10">
            {/* Profile Image */}
            <div className="mb-10 inline-block group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 p-1.5 shadow-2xl ring-4 ring-white dark:ring-gray-800 transform group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                  <img
                    src="./src/img/Foto Diri Sendiri/Foto Hero.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Main Text */}
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 tracking-wide">
                Hi there! I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold">
                  Egi
                </span>
              </h1>
              <h2 className="text-7xl font-black text-gray-900 dark:text-white tracking-tight">
                Full Stack
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  Developer
                </span>
              </h2>
              <div className="flex items-center justify-center gap-3 pt-2">
                <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
                <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full"></div>
                <div className="h-1.5 w-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"></div>
              </div>
              <p className="text-2xl text-gray-600 dark:text-gray-400 pt-3 font-medium">
                Student Developer & Tech Enthusiast
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4 pt-6">
              <a
                href="https://www.instagram.com/eginazmu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all hover:scale-110 group"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://github.com/eginazmu1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 hover:shadow-lg hover:shadow-gray-700/50 transition-all hover:scale-110"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/eginazmu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 hover:shadow-lg hover:shadow-blue-600/50 transition-all hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://wa.me/6283816527379"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 hover:shadow-lg hover:shadow-green-500/50 transition-all hover:scale-110"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Floating Cards - Right Side */}
          <div className="absolute right-0 translate-x-64 space-y-8 hidden xl:block">
            <div className="bg-gradient-to-br from-white to-teal-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 border border-teal-100 dark:border-gray-600">
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                  7+
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 font-semibold text-sm">
                  Certificates
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 border border-green-100 dark:border-gray-600">
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  11+
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 font-semibold text-sm">
                  Tech Stack
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
