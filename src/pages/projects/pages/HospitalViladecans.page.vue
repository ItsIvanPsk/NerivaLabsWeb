<template>
  <div class="project-detail">
    <h1 class="title">Hospital Viladecans VR Experience</h1>
    <img src="/projects/hospital-viladecans-vr-experience/hcvr-img-0.jpg" alt="Simulación de realidad virtual en Hospital Viladecans" class="project-image" />

    <div class="content">
      <p class="description">
        Descubre <strong>Hospital Viladecans VR Experience</strong>, un innovador proyecto de <strong>realidad virtual aplicada al entorno hospitalario</strong> que transforma la forma en que pacientes y profesionales viven la experiencia sanitaria. Diseñado para reducir el estrés, facilitar la adaptación al entorno clínico y ofrecer <strong>formación inmersiva</strong> al personal médico.
      </p>

      <h2 class="subtitle">Beneficios clave de la experiencia VR en hospitales</h2>
      <ul class="features">
        <li><strong>Simulación realista</strong> de espacios hospitalarios para preparar a los pacientes antes de su ingreso o intervención.</li>
        <li><strong>Reducción comprobada del estrés</strong> y la ansiedad en pacientes mediante entornos seguros e inmersivos.</li>
        <li><strong>Formación interactiva y práctica</strong> para el personal sanitario en situaciones clínicas simuladas.</li>
        <li><strong>Compatible con Meta Quest</strong>: sin cables, fácil de usar y 100% portátil.</li>
      </ul>

      <h2 class="subtitle">Imágenes del proyecto</h2>
      <div class="gallery">
        <img src="/projects/hospital-viladecans-vr-experience/hcvr-img-1.jpg" alt="Simulación VR en hospital de Viladecans" />
        <img src="/projects/hospital-viladecans-vr-experience/hcvr-img-2.jpg" alt="Paciente usando gafas de realidad virtual en hospital" />
        <img src="/projects/hospital-viladecans-vr-experience/hcvr-img-3.png" alt="Entrenamiento médico con realidad virtual" />
        <img src="/projects/hospital-viladecans-vr-experience/hcvr-img-4.png" alt="Escenario inmersivo hospitalario en VR" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HospitalViladecans',
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
