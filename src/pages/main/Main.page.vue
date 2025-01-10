<template>
    <div class="full-container">
      <Hero
      title="Neriva Labs"
      subtitle="Tech Solutions" />
  
      <main class="main-container">
        <div class="content-container">
          <section>
            <article class="project-article">
              <h3 class="footer-item">Proyectos de Realidad Virtual</h3>
              <div class="project-container">
                <div>
                  <img
                    src="/projects/hospital-viladecans-vr-experience/hcvr-img-4.png"
                    alt="Proyecto de experiencia de realidad virtual en Hospital Viladecans"
                  />
                  <p class="project-container-title"><b>Hospital Viladecans</b></p>
                  <p class="project-container-subtitle">
                    <em>Realidad Virtual, Experiencia Inmersiva</em>
                  </p>
                  <RouterLink to="#"><a class="btn-disabled">Próximamente</a></RouterLink>
                </div>
                <div>
                  <img
                    src="/projects/tintin-vr-experience/TinTinVRExperience-1.png"
                    alt="Proyecto de realidad virtual TinTin60CAT"
                  />
                  <p class="project-container-title"><b>TinTin60CAT</b></p>
                  <p class="project-container-subtitle">
                    <em>Realidad Virtual, Museo, Experiencia Inmersiva</em>
                  </p>
                  <RouterLink to="/proyectos/tintin-60-cat"><a class="btn">Leer más</a></RouterLink>
                </div>
              </div>
            </article>
          </section>
          <section>
            <article class="team-article">
              <h3 class="footer-item">Equipo de Neriva Labs</h3>
              <div class="team-container">
                <TeamMember
                  imgSrc="/persona.png"
                  name="Ivan 'ItsIvanPsk' Figueredo"
                  role="Founder & Lead Programmer"
                />
                <TeamMember
                  imgSrc="/persona.png"
                  name="Nerea 'Remtail' López"
                  role="Founder & Project Manager"
                />
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  </template>
  
<script setup>
  import Hero from '../../components/ui/Hero.vue';
  import TeamMember from '../../components/ui/TeamMember.vue';
</script>
  
<style scoped>
  .full-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    color: #333;
  }
  
  .main-container {
    flex: 1;
    padding: 2rem;
    width: 100vh;
  }
  
  @media (max-width: 768px) {
    .main-container {
      width: 100%;
      max-width: none;
      min-width: none;
    }
  }

  .content-container {
    margin: 0 auto;
  }
  
  .project-article {
    margin-bottom: 3rem;
  }
  
  .project-article h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
    color: #007bff;
  }
  
  .project-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
  
  .project-container div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .project-container div:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .project-container img {
    width: 100%;
    height: auto;
    max-height: 180px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 4px;
  }
  
  .project-container-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .project-container-subtitle {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
  }
  
  .btn {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #0056b3;
  }

  .btn-disabled {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    color: white;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: #7491d6;
  }

  .btn-disabled:hover {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    color: white;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: #7491d6;
    cursor: default;
  }

  .team-article {
    margin-bottom: 3rem;
  }
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .team-article p {
    margin-bottom: 2rem;
    text-align: center;
    color: #555;
  }
  
  .team-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }


</style>
  