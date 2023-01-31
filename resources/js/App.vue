<template>
    <div>
      <component :is="this.$route.meta.layout || 'div'">
        <router-view />
      </component>
      <div>
    <button @click="showModalCard = true">Open Modal</button>
    <div v-if="showModalCard" class="modal-overlay">
      <div class="modal">
        <header class="modal-header">
          <h3>Modal Title</h3>
          <button @click="showModalCard = false">Close</button>
        </header>
        <div class="modal-body">
          <p>Modal Content</p>
        </div>
        <footer class="modal-footer">
          <button @click="showModalCard = false">Close</button>
        </footer>
      </div>
    </div>
  </div>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      showModalCard: false
    };
  }
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  max-width: 500px;
  min-width: 300px;
  width: 80%;
  padding: 1rem;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}
</style>