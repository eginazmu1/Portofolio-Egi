Simpan file ZIP kamu di folder ini.

Agar muncul di website:
1. Tambahkan file ZIP ke folder public/files.
2. Buka public/files/manifest.json.
3. Tambahkan item baru dengan format:
   {
     "name": "Nama-File.zip",
     "path": "/files/Nama-File.zip",
     "size": "opsional, contoh 20 MB"
   }
