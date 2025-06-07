<template>
  <div class="project-list">
    <h1 class="title footer-item">Proyectos</h1>
    <div class="project-grid">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card"
        :class="{ disabled: project.disabled }"
        @click="project.buttonAction"
      >
        <img :src="project.image" :alt="project.name" class="project-image" />
        <div class="project-content">
          <h2 class="project-name">{{ project.name }}</h2>
          <button
            class="project-button"
            :class="{ disabled: project.disabled }"
            :disabled="project.disabled"
          >
            {{ project.buttonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "ProjectList",
  setup() {
    const router = useRouter();

    const navigateToProject = (route) => {
      if (route) {
        router.push(route);
      }
    };

    const projects = [
      {
        id: 1,
        name: "50th Esteve Terradas",
        image: "/projects/esteve-terradas-50th/50-Esteve-Terradas-1.jpg",
        buttonText: "Leer más",
        disabled: false,
        buttonAction: () => navigateToProject("/proyectos/50th-esteve-terradas"),
      },
      {
        id: 2,
        name: "Hospital Viladecans",
        route: "/proyectos/hospital-viladecans",
        image: "/projects/hospital-viladecans-vr-experience/hcvr-img-0.jpg",
        buttonText: "Leer más",
        disabled: false,
        buttonAction: () => navigateToProject("/proyectos/hospital-viladecans"),
      },
      {
        id: 3,
        name: "TinTin60Cat",
        route: "/proyectos/tintin60cat",
        image: "/projects/tintin-vr-experience/TinTinVRExperience-1.png",
        buttonText: "Leer más",
        disabled: false,
        buttonAction: () => navigateToProject("/proyectos/tintin-60-cat"),
      },
      {
        id: 4,
        name: "MetaCorn",
        route: "/proyectos/meta-corn-fortnite",
        image: "/projects/meta-corn/meta-corn-1.png",
        buttonText: "Leer más",
        disabled: false,
        buttonAction: () => navigateToProject("/proyectos/meta-corn-fortnite"),
      }
    ];

    return { projects };
  },
};
</script>

<style scoped>
.project-list {
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.project-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
}

@media (min-width: 1024px) {
  .project-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.project-card {
  width: 100%;
  background-color: #fff;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
}

.project-card:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.project-card.disabled {
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
  pointer-events: none;
}

.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.project-content {
  padding: 1.5rem;
  text-align: center;
}

.project-name {
  font-size: 1.5rem;
  font-weight: 500;
  color: #222;
  margin-bottom: 0.5rem;
}

.project-button {
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
}

.project-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.project-button.disabled {
  background-color: #7491d6;
  color: #fff;
  cursor: not-allowed;
  pointer-events: none;
}

.project-button.disabled:hover {
  transform: none;
}
</style>
