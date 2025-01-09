<template>
  <div class="project-detail">
    <h1 class="title">TinTin60Cat</h1>
    <img src="/projects/tintin-vr-experience/TinTinVRExperience-1.png" alt="TinTin60Cat" class="project-image" />
    
    <div class="content">
      <p class="description">
        Proyecto de realidad virtual inspirado en el mundo de Tintín. Una experiencia inmersiva única para los amantes del cómic.
        Explora los lugares emblemáticos del universo de Tintín, interactúa con personajes y vive una historia única a través de la realidad virtual.
      </p>

      <h2 class="subtitle">Características</h2>
      <ul class="features">
        <li>Exploración de escenarios en 3D, generados con el contenido del universo del comic.</li>
        <li>Recorrido inmersivo diseñado fans y nuevos usuarios.</li>
        <li>Compatibilidad con dispositivos de realidad virtual más populares.</li>
      </ul>

      <h2 class="subtitle">Galería</h2>
      <div class="gallery">
        <img src="/projects/tintin-vr-experience/TinTinVRExperience-1.png" alt="Galería 1" />
        <img src="/projects/tintin-vr-experience/TinTinVRExperience-2.jpg" alt="Galería 2" />
        <img src="/projects/tintin-vr-experience/TinTinVRExperience-3.jpg" alt="Galería 3" />
        <img src="/projects/tintin-vr-experience/TinTinVRExperience-4.jpg" alt="Galería 3" />
        <img src="/projects/tintin-vr-experience/TinTinVRExperience-5.jpg" alt="Galería 3" />
        <img src="/projects/tintin-vr-experience/TinTinVRExperience-6.png" alt="Galería 3" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TinTin60Cat',
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

.technologies {
  font-size: 1rem;
  line-height: 1.8;
  margin-top: 1rem;
  color: #555;
}

.technologies strong {
  color: #007bff;
}
</style>
