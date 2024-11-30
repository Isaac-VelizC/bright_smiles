/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007bff", // Azul brillante
        secondary: "#53c4f5", // Azul claro
        morningGlory: "#a3d5e0", // Azul suave
        porcelain: "#f6f8f8", // Gris muy claro
        goldenrod: "#f9d36c", // Amarillo dorado
        textPrimary: "#212529",
        white: "#ffffff", // Blanco puro
        dark: "#000000", // Negro puro

        // Colores adicionales
        success: "#28a745", // Verde éxito
        danger: "#dc3545", // Rojo peligro
        warning: "#ffc107", // Amarillo advertencia
        info: "#17a2b8", // Azul info
        muted: "#6c757d", // Gris apagado
        light: "#f8f9fa", // Gris claro para fondos

        // Colores para estados específicos
        hoverPrimary: "#0056b3", // Azul oscuro para hover en primario
        hoverSecondary: "#39b0e1", // Azul más oscuro para hover en secundario
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
        ],
        mono: [
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      fontSize: {
        "custom-16": "16px", // Define un nuevo tamaño de fuente
        "custom-32": "32px", // Define un nuevo tamaño de fuente
      },
      // Add more custom configurations as needed
    },
  },
  plugins: [],
};
