<template>
    <div class="contact-page">
      <h1 class="title">Contacto</h1>
      <p class="description">
        Rellena este formulario para ponerte en contacto con nosotros. Los datos que introduzcas serán enviados directamente al equipo de Neriva Labs.
      </p>
  
      <form @submit.prevent="onSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input
            id="name"
            type="text"
            v-model="form.name"
            :class="{ invalid: !validations.name }"
            @blur="validateField('name')"
          />
          <span v-if="!validations.name" class="error-message">El nombre es requerido.</span>
        </div>
  
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input
            id="email"
            type="email"
            v-model="form.email"
            :class="{ invalid: !validations.email }"
            @blur="validateField('email')"
          />
          <span v-if="!validations.email" class="error-message">Introduce un correo electrónico válido.</span>
        </div>
  
        <div class="form-group">
          <label for="phone">Teléfono:</label>
          <input
            id="phone"
            type="text"
            v-model="form.phone"
            :class="{ invalid: !validations.phone }"
            @blur="validateField('phone')"
          />
          <span v-if="!validations.phone" class="error-message">Introduce un teléfono válido.</span>
        </div>
  
        <div class="form-group">
          <label for="message">Mensaje:</label>
          <textarea
            id="message"
            rows="5"
            v-model="form.message"
            :class="{ invalid: !validations.message }"
            @blur="validateField('message')"
          ></textarea>
          <span v-if="!validations.message" class="error-message">El mensaje debe tener al menos 10 caracteres.</span>
        </div>
  
        <button type="submit" :disabled="!isFormValid" class="submit-button">Enviar</button>
      </form>
  
      <div v-if="successModal" class="modal">
        <div class="modal-content">
          <h2>¡Correo enviado!</h2>
          <p>Tu mensaje ha sido enviado con éxito. Te responderemos lo antes posible.</p>
          <button @click="closeModal" class="close-button">Cerrar</button>
        </div>
      </div>
  
      <div v-if="warningModal" class="modal">
        <div class="modal-content">
          <h2>No se puede enviar otro formulario</h2>
          <p>Ya has enviado un formulario en las últimas 24 horas. Te responderemos lo antes posible.</p>
          <button @click="closeModal" class="close-button">Cerrar</button>
        </div>
      </div>
    </div>
</template>
  
<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      validations: {
        name: true,
        email: true,
        phone: true,
        message: true,
      },
      successModal: false,
      warningModal: false,
      canSubmit: true,
    };
  },
  computed: {
    isFormValid() {
      return (
        this.form.name.trim() !== '' &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email) &&
        this.form.phone.trim().length === 9 &&
        this.form.message.trim().length >= 10
      );
    },
  },
  methods: {
    validateField(field) {
      if (field === 'name') {
        this.validations.name = this.form.name.trim() !== '';
      } else if (field === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.validations.email = emailRegex.test(this.form.email);
      } else if (field === 'phone') {
        this.validations.phone = this.form.phone.trim().length === 9;
      } else if (field === 'message') {
        this.validations.message = this.form.message.trim().length >= 10;
      }
    },
    onSubmit() {
      if (this.canSubmit) {
        const templateParams = {
          to_email: 'ivanfigueredo.et@gmail.com',
          from_name: this.form.name,
          reply_to: this.form.email,
          message: `Teléfono: ${this.form.phone}\nMensaje: ${this.form.message}`,
        };

        emailjs
          .send('service_k8f06ef', 'template_3lnj9vc', templateParams, 'pYWrqljqLd111v_zT')
          .then(() => {
            this.successModal = true;
            this.form = { name: '', email: '', phone: '', message: '' };
            localStorage.setItem('lastSubmitTime', new Date().toString());
            this.canSubmit = false;
          })
          .catch(() => {
            alert('Error al enviar el correo. Inténtalo de nuevo más tarde.');
          });
      } else {
        this.warningModal = true;
      }
    },
    closeModal() {
      this.successModal = false;
      this.warningModal = false;
    },
  },
  mounted() {
    const lastSubmitTime = localStorage.getItem('lastSubmitTime');
    if (lastSubmitTime) {
      const hoursSinceLastSubmit =
        (new Date().getTime() - new Date(lastSubmitTime).getTime()) / (1000 * 60 * 60);
      this.canSubmit = hoursSinceLastSubmit >= 24;
    }
  },
};
</script>

  
<style scoped>
  .contact-page {
    padding: 3rem;
    max-width: 800px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
  }
  
  .title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  
  .description {
    text-align: center;
    font-size: 1rem;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  input,
  textarea {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .invalid {
    border-color: #e74c3c;
  }
  
  .error-message {
    color: #e74c3c;
    font-size: 0.9rem;
    margin-top: 0.3rem;
  }
  
  .submit-button {
    padding: 0.8rem;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #2980b9;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
  }
  
  .close-button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .close-button:hover {
    background-color: #2980b9;
  }
</style>
