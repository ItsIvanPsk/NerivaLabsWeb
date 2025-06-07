<template>
  <div class="project-detail">
    <h1 class="title">TinTin60Cat</h1>
    <img src="/projects/tintin-vr-experience/TinTinVRExperience-1.png" alt="Experiencia VR del universo Tintín" class="project-image" />
    
    <div class="content">
      <p class="description">
        <strong>TinTin60Cat</strong> es una <strong>experiencia de realidad virtual inmersiva</strong> inspirada en el emblemático universo del cómic de Hergé. Creado para homenajear los <strong>60 años de Tintín en Cataluña</strong>, el proyecto permite a los usuarios <strong>explorar escenarios icónicos</strong>, interactuar con personajes legendarios y revivir la magia de las aventuras de Tintín como nunca antes.
        <br><br>
        Esta experiencia combina <strong>educación, cultura y tecnología</strong>, brindando un recorrido interactivo tanto para fans veteranos como para nuevos exploradores del mundo del reportero belga.
      </p>

      <h2 class="subtitle">Lo que hace única esta experiencia VR</h2>
      <ul class="features">
        <li><strong>Escenarios en 3D</strong> fieles al estilo visual original de Tintín, cuidadosamente recreados para realidad virtual.</li>
        <li><strong>Recorrido narrativo inmersivo</strong> que invita a descubrir secretos y curiosidades del cómic.</li>
        <li><strong>Diseñada para todo tipo de público</strong>, desde lectores nostálgicos hasta nuevos fans.</li>
        <li><strong>Compatible con Meta Quest y otros visores VR</strong>, sin necesidad de equipos complejos.</li>
      </ul>

      <h2 class="subtitle">Galería del universo Tintín en VR</h2>
      <div class="gallery">
        <img src="/projects/tintin-vr-experience/TinTinVRExperience-1.png" alt="Vista principal de la experiencia VR de Tintín" />
        <img src="/projects/tintin-vr-experience/TinTinVRExperience-2.jpg" alt="Exploración 3D del castillo de Moulinsart" />
        <img src="/projects/tintin-vr-experience/TinTinVRExperience-3.jpg" alt="Ambientación inmersiva con personajes de Tintín" />
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
