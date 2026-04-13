import { useEffect, useState } from 'react';
import { Download, FileArchive } from 'lucide-react';

type DownloadFile = {
  name: string;
  path: string;
  size?: string;
};

const normalizeDownloadPath = (rawPath: string) => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const cleanPath = rawPath.startsWith('/') ? rawPath.slice(1) : rawPath;

  return `${cleanBase}${cleanPath}`;
};

export default function Downloads() {
  const [files, setFiles] = useState<DownloadFile[]>([]);

  useEffect(() => {
    const loadManifest = async () => {
      try {
        const response = await fetch('/files/manifest.json');
        if (!response.ok) {
          setFiles([]);
          return;
        }

        const data = (await response.json()) as DownloadFile[];
        setFiles(Array.isArray(data) ? data : []);
      } catch {
        setFiles([]);
      }
    };

    loadManifest();
  }, []);

  return (
    <div className="py-20 bg-gradient-to-br from-white via-cyan-50 to-blue-100 dark:from-gray-950 dark:via-slate-900 dark:to-blue-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
            Download Center
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Simpan file ZIP di folder public/files, lalu download kapan saja dari sini.
          </p>
        </div>

        {files.length === 0 ? (
          <div className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-800/80 border border-dashed border-cyan-300 dark:border-cyan-700 rounded-2xl p-8 text-center">
            <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Belum ada file ZIP untuk diunduh.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tambahkan file ke public/files lalu update public/files/manifest.json.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {files.map((file) => (
              <article
                key={file.path}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300">
                    <FileArchive className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-900 dark:text-white truncate">{file.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{file.size ?? 'ZIP file'}</p>
                  </div>
                </div>

                <a
                  href={normalizeDownloadPath(file.path)}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 transition-colors font-semibold"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
