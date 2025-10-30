<<<<<<< HEAD
# KranIQ

# KranIQ

## Electron

Dieses Repository enthält eine einfache HTML-Web-App. Ich habe eine minimale Electron-Umgebung hinzugefügt, damit die App als Desktop-Anwendung gestartet werden kann.

Kurzanleitung:

1. Stelle sicher, dass Node.js (empfohlen v16 oder neuer) installiert ist.
2. Im Projektverzeichnis ausführen:

```bash
npm install
npm run start
```

Das startet die Electron-Anwendung und lädt die vorhandene `index.html`.

Optional: Um ein einfaches Paket für macOS zu erzeugen (benötigt `electron-packager`):

```bash
npm run pack
```

Hinweis zur Sicherheit: Die App lädt `index.html` lokal. Vermeide unsichere remote-Inhalte oder aktiviere `nodeIntegration` nur mit Vorsicht.
