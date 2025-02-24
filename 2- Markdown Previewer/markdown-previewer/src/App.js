// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import { marked } from 'marked'; // Importamos Marked

// Configuración básica de Marked
marked.setOptions({
  breaks: true, // Habilita saltos de línea
  gfm: true,   // Soporte para GitHub Flavored Markdown
});

const defaultMarkdown = `
# Bienvenido a mi Previsualizador de Markdown

## Este es un subencabezado
Aquí hay un [enlace](https://www.example.com) para visitar.

Puedes usar \`código en línea\` así.

\`\`\`
Bloque de código {
  console.log("¡Hola, mundo!");
}
\`\`\`

- Elemento de lista 1
- Elemento de lista 2

> Esta es una cita en bloque.

![Imagen de ejemplo](https://via.placeholder.com/150)

**Texto en negrita** para destacar.
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const renderMarkdown = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Previsualizador de Markdown</h1>
      <div className="editor-preview-container">
        <div className="editor-section">
          <h2>Editor</h2>
          <textarea
            id="editor"
            value={markdown}
            onChange={handleChange}
            className="editor"
            placeholder="Escribe tu Markdown aquí..."
          />
        </div>
        <div className="preview-section">
          <h2>Vista Previa</h2>
          <div
            id="preview"
            className="preview"
            dangerouslySetInnerHTML={renderMarkdown()}
          />
        </div>
      </div>
    </div>
  );
}

export default App;