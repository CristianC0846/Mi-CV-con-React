import "./App.css";

// Componente principal que contiene todo el CV
function App() {
  return (
    // Contenedor principal: tarjeta blanca centrada con bordes redondeados y sombra
    <div className="contenedor-principal">

      {/* ========== HEADER (CABECERA) ==========
          Fondo con degradado morado/azul, foto de perfil, nombre,
          título profesional y datos de contacto */}
      <div className="header">
        <img
          src="/CristianCeamanosGañarul_FOTO.jpg"
          alt="Mi foto"
          className="foto-perfil"
        />
        <h1>Cristian Ceamanos Gañarul</h1>
        <h2>Desarrollador de Aplicaciones Multiplataforma</h2>
        <p>📧 crisceagana@gmail.com | 📱 644 88 95 45 | 📍 Zaragoza, España</p>
      </div>

      {/* ========== SOBRE MÍ ==========
          Descripción breve del perfil profesional (2-3 líneas) */}
      <div className="seccion">
        <h2 className="titulo-seccion">Sobre Mí</h2>
        <p>
          Desarrollador de aplicaciones móviles, apasionado por crear interfaces limpias, accesibles
          y fáciles de usar. Actualmente me especializo en React, pero tengo experiencia tanto con Java como con Kotlin e incluso Figma, y busco
          oportunidades donde seguir creciendo y aportar valor a un equipo de desarrollo.
        </p>
      </div>

      {/* ========== HABILIDADES ==========
          Cada tecnología se muestra como una "etiqueta" visual (píldora)
          con degradado suave y borde morado */}
      <div className="seccion">
        <h2 className="titulo-seccion">Habilidades y Lenguajes</h2>
        <div className="lista-habilidades">
          <div className="habilidad">HTML</div>
          <div className="habilidad">CSS</div>
          <div className="habilidad">JavaScript</div>
          <div className="habilidad">React</div>
          <div className="habilidad">Git</div>
          <div className="habilidad">Figma</div>
        </div>
      </div>

      {/* ========== EXPERIENCIA PROFESIONAL ==========
          Cada trabajo/práctica tiene: puesto, empresa, periodo y descripción.
          La línea vertical morada a la izquierda crea un efecto de línea de tiempo */}
      <div className="seccion">
        <h2 className="titulo-seccion">Experiencia Profesional</h2>

        {/* Experiencia 1 */}
        <div className="item-experiencia">
          <h3>Desarrollador Frontend (Prácticas)</h3>
          <p className="empresa">TechSolutions S.L.</p>
          <p className="periodo">2023 - 2024</p>
          <p>
            Desarrollo de componentes reutilizables con React y maquetación
            responsive de la web corporativa, mejorando el tiempo de carga
            de las páginas principales.
          </p>
        </div>

        {/* Experiencia 2 */}
        <div className="item-experiencia">
          <h3>Técnico Informático</h3>
          <p className="empresa">Ecomputer Utebo</p>
          <p className="periodo">2025 - 2026</p>
          <p>
            Técnico Informático especializado en arreglar PCs de clientes, 
            dar soporte técnico por remoto y mejorar y limpiar portatiles
            de clientes.
          </p>
        </div>
      </div>

      {/* ========== EDUCACIÓN ==========
          Título obtenido, centro educativo y años */}
      <div className="seccion">
        <h2 className="titulo-seccion">Educación</h2>

        <div className="item-experiencia">
          <h3>Técnico Medio de Sistemas Microinformáticos y Redes</h3>
          <p className="empresa">IES Tiempos Modernos</p>
          <p className="periodo">2023 - 2025</p>
        </div>

        <div className="item-experiencia">
          <h3>Técnico Superior de Desarrollo de Aplicaciones Multiplataforma</h3>
          <p className="empresa">IES Santiago Hernández/CPIFP Los Enlaces</p>
          <p className="periodo">2025 - Actualmente</p>
        </div>
      </div>

    </div>
  );
}

export default App;
