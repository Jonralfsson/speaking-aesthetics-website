// 1. URL zu deiner Google-Sheet-Datenquelle
const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQv6WwQZ4w-MoMcbRIFQxPnKWAlMlregftEd1gflv7O7UQ7aWYdBk-UrHZSpwDQmMtK6l3DxiOy81hr/pubhtml";

// 2. Daten aus dem Sheet laden
fetch(sheetURL)
  .then(response => response.json()) // Antwort in JSON umwandeln
  .then(data => {
    // 3. Das HTML-Element holen, in das wir Inhalte einfügen
    const container = document.getElementById("portfolio");

    // 4. Für jeden Eintrag (jede Tabellenzeile) etwas erzeugen
    data.forEach(item => {
      const div = document.createElement("div");

      div.innerHTML = `
        <h2>${item.titel}</h2>
        <p>${item.beschreibung}</p>
        <img src="${item.bild}" alt="${item.titel}" width="300">
      `;

      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Fehler beim Laden der Daten:", error);
  });
