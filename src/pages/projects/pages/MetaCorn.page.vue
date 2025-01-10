<template>
    <div class="project-detail">
      <h1 class="title">MetaCorn</h1>
      <img src="/logos/nerivalabs-logo.png" alt="MetaCorn Project" class="project-image" />
  
      <div class="content">
        <p class="description">
          MetaCorn es un proyecto desarrollado en colaboración con el instituto Esteve Terradas i Illa. Neriva Labs ha creado
          un mapa interactivo en Fortnite que recrea los edificios y zonas más emblemáticas de Cornellà de Llobregat,
          Barcelona, destacando su valor socio-cultural. Este proyecto permite a los jóvenes explorar y descubrir la
          ciudad de una manera inmersiva y divertida mientras juegan a Fortnite.
        </p>
  
        <h2 class="subtitle">Características</h2>
        <ul class="features">
          <li>Recreación de Cornellà de Llobregat en Fortnite.</li>
          <li>Incluye edificios y zonas emblemáticas de la ciudad.</li>
          <li>Pone en valor la propuesta socio-cultural de cada espacio.</li>
          <li>Ofrece una experiencia educativa y entretenida para los jóvenes.</li>
        </ul>
  
        <h2 class="subtitle">Galería</h2>
        <div class="gallery">
          <img src="/logos/nerivalabs-logo.png" alt="Galería 1" />
          <img src="/logos/nerivalabs-logo.png" alt="Galería 2" />
          <img src="/logos/nerivalabs-logo.png" alt="Galería 3" />
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
