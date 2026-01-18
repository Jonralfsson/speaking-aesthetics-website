<script>
fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQv6WwQZ4w-MoMcbRIFQxPnKWAlMlregftEd1gflv7O7UQ7aWYdBk-UrHZSpwDQmMtK6l3DxiOy81hr/pubhtml")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("portfolio");

    data.forEach(item => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h2>${item.titel}</h2>
        <p>${item.beschreibung}</p>
        <img src="${item.bild}" width="300">
      `;
      container.appendChild(div);
    });
  });
</script>
