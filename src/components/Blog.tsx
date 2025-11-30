import React, { useState } from 'react';
import { Award, Sparkles } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title:
      "Integrasi AI dengan Website Interaktif menggunakan Computer Vision & MQTT",
    description:
      "Mengintegrasikan Artificial Intelligence dengan Website Interaktif Menggunakan Computer Vision dan MQTT",
    category: "Certificate",
    date: "2024",
  },
  {
    id: 2,
    title: "Web Security",
    description:
      "Partisipasi dalam Webinar Web Security yang diselenggarakan oleh Mahasiswa UTB Kel. 3/223MB.",
    category: "Certificate",
    date: "2024",
  },
  {
    id: 3,
    title: "Membuat Role Management Menggunakan Laravel",
    description:
      "Kelulusan Kelas Belajar Membuat Role Management Menggunakan Laravel",
    category: "Certificate",
    date: "2023",
  },
  {
    id: 4,
    title: "Front-End Development",
    description:
      "Penghargaan kelulusan dalam mengikuti kelas Belajar Dasar Front-End Web.",
    category: "Certificate",
    date: "2023",
  },
];

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('Certificate');

  const filteredPosts = blogPosts.filter(post => post.category === activeFilter);

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            My learning journey and accomplishments
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full"></div>
            <div className="h-1.5 w-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200 dark:border-gray-700"
            >
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-full shadow-lg">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-cyan-600/50"></div>
                <Sparkles className="w-24 h-24 text-white/80 group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs font-semibold mb-3">
                  {post.date}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
