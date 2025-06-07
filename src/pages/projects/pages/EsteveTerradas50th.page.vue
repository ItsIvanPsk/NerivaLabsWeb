<template>
  <div class="project-detail">
    <h1 class="title">50º Aniversario Esteve Terradas</h1>
    <img src="/projects/esteve-terradas-50th/50-Esteve-Terradas-1.jpg" alt="Recorrido virtual del instituto Esteve Terradas" class="project-image" />
    
    <div class="content">
      <p class="description">
        Con motivo del <strong>50º aniversario del Institut Esteve Terradas i Illa</strong>, Neriva Labs ha desarrollado una <strong>experiencia interactiva en realidad virtual</strong> que fusiona historia, tecnología y comunidad educativa. 
        <br><br>
        Este proyecto conmemorativo ofrece un recorrido inmersivo por los momentos clave del centro, permitiendo a <strong>alumnos, exalumnos, docentes y familias</strong> revivir su historia desde una nueva perspectiva digital.
      </p>

      <h2 class="subtitle">¿Qué incluye esta experiencia?</h2>
      <ul class="features">
        <li><strong>Tour virtual</strong> a través de las décadas de evolución del instituto.</li>
        <li><strong>Actividades interactivas</strong> centradas en la participación del alumnado.</li>
        <li><strong>Espacios temáticos conmemorativos</strong> en entornos 3D accesibles y envolventes.</li>
        <li><strong>Compatible con visores VR</strong> como Meta Quest, así como dispositivos tradicionales.</li>
      </ul>

      <h2 class="subtitle">Galería del recorrido conmemorativo</h2>
      <div class="gallery">
        <img src="/projects/esteve-terradas-50th/50-Esteve-Terradas-2.jpg" alt="Celebración 50 años Esteve Terradas en VR" />
        <img src="/projects/esteve-terradas-50th/50-Esteve-Terradas-3.jpg" alt="Evento conmemorativo en realidad virtual" />
        <img src="/projects/esteve-terradas-50th/50-Esteve-Terradas-6.jpg" alt="Espacios históricos del instituto en 3D" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'EsteveTerradas50th',
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
