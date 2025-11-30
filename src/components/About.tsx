import React from "react";
import { GraduationCap, MapPin, Instagram, Github } from "lucide-react";

export default function About() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Get to know me better
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full"></div>
            <div className="h-1.5 w-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              <p>
                Hello! My name is{" "}
                <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Egi Nazmu Muqtafi
                </span>
                , but you can call me Egi. I'm from{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Bandung
                </span>
                , a beautiful town in West Java
              </p>

              <p>
                Currently studying at{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  SMKN 1 Cipeundeuy
                </span>{" "}
                in the Software Engineering (RPL) department. Throughout my
                studies, I’ve learned various aspects of programming, web
                development, database management, and API integration. I enjoy
                creating projects that solve real problems, I’m always excited
                to explore new technologies, improve my abilities, and continue
                growing in the world of software development.
              </p>
            </div>

            {/* Info Cards */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl border border-blue-100 dark:border-gray-600">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-cyan-400 mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  School
                </p>
                <p className="font-bold text-gray-900 dark:text-white">
                  SMKN 1 Cipeundeuy
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl border border-teal-100 dark:border-gray-600">
                <MapPin className="w-6 h-6 text-teal-600 dark:text-teal-400 mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Location
                </p>
                <p className="font-bold text-gray-900 dark:text-white">
                  Bandung Barat
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl border border-pink-100 dark:border-gray-600">
                <Instagram className="w-6 h-6 text-pink-600 dark:text-pink-400 mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Instagram
                </p>
                <p className="font-bold text-gray-900 dark:text-white">
                  eginazmu
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  GitHub
                </p>
                <p className="font-bold text-gray-900 dark:text-white">
                  eginazmu1
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - 3D Card Effect */}
          <div className="relative group flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-3xl p-1 shadow-2xl h-full">
                <div className="bg-gray-900 rounded-3xl overflow-hidden h-full">
                  <div className="relative overflow-hidden h-full">
                    <img
                      src="/images/Foto About.jpg"
                      alt="Developer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <p className="text-xl font-bold text-white mb-1">
                        Full Stack Developer
                      </p>
                      <p className="text-base text-gray-200">
                        Passionate Coder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
