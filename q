[33mcommit 4f620008b4a4c1bbc39ce61abcab412ceda039c4[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m, [m[1;32mteste[m[33m)[m
Author: Gabriel Biazotto <biazottogabriel@gmail.com>
Date:   Sat Jul 7 13:49:50 2018 -0300

    firebase aplicado

[1mdiff --git a/.firebaserc b/.firebaserc[m
[1mnew file mode 100644[m
[1mindex 0000000..22711e8[m
[1m--- /dev/null[m
[1m+++ b/.firebaserc[m
[36m@@ -0,0 +1,5 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "projects": {[m
[32m+[m[32m    "default": "prj-natalia1"[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[1mdiff --git a/database.rules.json b/database.rules.json[m
[1mnew file mode 100644[m
[1mindex 0000000..8e33ddc[m
[1m--- /dev/null[m
[1m+++ b/database.rules.json[m
[36m@@ -0,0 +1,6 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "rules": {[m
[32m+[m[32m    ".read": "auth != null",[m
[32m+[m[32m    ".write": "auth != null"[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[1mdiff --git a/firebase.json b/firebase.json[m
[1mnew file mode 100644[m
[1mindex 0000000..85f6e2c[m
[1m--- /dev/null[m
[1m+++ b/firebase.json[m
[36m@@ -0,0 +1,16 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "database": {[m
[32m+[m[32m    "rules": "database.rules.json"[m
[32m+[m[32m  },[m
[32m+[m[32m  "hosting": {[m
[32m+[m[32m    "public": "build",[m
[32m+[m[32m    "ignore": [[m
[32m+[m[32m      "firebase.json",[m
[32m+[m[32m      "**/.*",[m
[32m+[m[32m      "**/node_modules/**"[m
[32m+[m[32m    ][m
[32m+[m[32m  },[m
[32m+[m[32m  "storage": {[m
[32m+[m[32m    "rules": "storage.rules"[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[1mdiff --git a/storage.rules b/storage.rules[m
[1mnew file mode 100644[m
[1mindex 0000000..d494542[m
[1m--- /dev/null[m
[1m+++ b/storage.rules[m
[36m@@ -0,0 +1,7 @@[m
[32m+[m[32mservice firebase.storage {[m
[32m+[m[32m  match /b/{bucket}/o {[m
[32m+[m[32m    match /{allPaths=**} {[m
[32m+[m[32m      allow read, write: if request.auth!=null;[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
