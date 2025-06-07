<template>
  <div class="project-detail">
    <h1 class="title">MetaCorn: Fortnite Metaverse</h1>
    <img src="/projects/meta-corn/meta-corn-1.png" alt="Mapa educativo de Cornellà en Fortnite" class="project-image" />

    <div class="content">
      <p class="description">
        <strong>MetaCorn</strong> es una innovadora experiencia de <strong>realidad virtual y metaverso</strong> desarrollada por Neriva Labs en colaboración con el Institut Esteve Terradas i Illa. Este proyecto recrea de forma interactiva los <strong>lugares más emblemáticos de Cornellà de Llobregat</strong> dentro de Fortnite, combinando <strong>educación, cultura local y gamificación</strong>.
        <br><br>
        Pensado especialmente para jóvenes, <strong>MetaCorn invita a explorar Cornellà mientras juegas</strong>, conectando el entorno urbano con una narrativa inmersiva en uno de los videojuegos más populares del mundo.
      </p>

      <h2 class="subtitle">¿Qué lo hace especial?</h2>
      <ul class="features">
        <li>Recreación fidedigna de <strong>zonas icónicas de Cornellà</strong> dentro del universo Fortnite.</li>
        <li><strong>Exploración educativa</strong>: cada espacio revela su historia, valor cultural y social.</li>
        <li>Diseñado para ser <strong>atractivo y didáctico</strong>, ideal para jóvenes estudiantes.</li>
        <li>Un puente entre el <strong>aprendizaje activo y el entretenimiento digital</strong>.</li>
      </ul>

      <h2 class="subtitle">Galería del mapa en Fortnite</h2>
      <div class="gallery">
        <img src="/projects/meta-corn/meta-corn-2.jpg" alt="Zona emblemática recreada en Fortnite" />
        <img src="/projects/meta-corn/meta-corn-5.jpg" alt="Jugabilidad educativa dentro del mapa MetaCorn" />
        <img src="/projects/meta-corn/meta-corn-4.jpg" alt="Fortnite metaverso Cornellà" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MetaCorn",
};
</script>

  
<style scoped>
  .project-detail {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: #222;
    margin-bottom: 2rem;
  }
  
  .project-image {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .content {
    margin-top: 2rem;
    font-size: 1rem;
    line-height: 1.8;
    color: #444;
  }
  
  .subtitle {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 2rem 0 1rem;
    color: #333;
  }
  
  .features {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .features li {
    margin: 0.5rem 0;
  }
  
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .gallery img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .gallery img:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
</style>
