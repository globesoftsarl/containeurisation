<template>
  <div>
    <h1>{{ 'Test de conteneurisation ' }}</h1>
    <h3>Voici le message du serveur backend <i style="color: green">{{ message_from_server }}</i></h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message_from_server: ''
    };
  },
  created() {
    // l'url normal est http://localhost:5000/api mais quand on ouvre l'application dans le navigateur,
    // le http://backend:5000/api ne fonctionne pas, du coup on utilise le http://localhost:5001/api
    // au lieu de fetch(`http://backend:5000/api`)
    fetch(`http://localhost:8888/api`)
        .then(response => response.json())
        .then(data => {
          this.message_from_server = data.message;
        });
  }
};
</script>
