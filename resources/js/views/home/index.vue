<template>
  <div class="container">
      <div class="columns">
          <div class="column" v-for="col in allDeliverables" :key="col.id">
              <button title="delete" @click.prevent="deleteCol(col.id, $event)">X</button>
              <h2 class="column-title">{{ col.title }}</h2>
              <div class="card" v-for="item in col.tasks" :key="item.id">
                  {{item.title}}
              </div>

              <button data-toggle="modal" :data-target="'#exampleModal'+col.id" @click="openModal2(col.id)">Add Card</button>
              <div v-if="showModal2 && card_id === col.id " :id="'exampleModal'+col.id" class="modal-overlay">
                  <div class="modal-content">
                      <h1 class="modal-title">Add New Card</h1>
                      <form action="" @submit.prevent="storeTask(col.id)" method="post">
                          <input type="text" v-model="getTask.title" id="title" />
                          <input type="text" v-model="getTask.description" id="description" />

                          <button type="submit">submit</button>
                      </form>
                      <br />
                      <button @click="closeModal2" class="modal-close-btn">Close</button>
                  </div>
              </div>
          </div>
          <div class="column">
              <div>
                  <button data-target="#exampleModal2" @click="openModal">Add Column</button>
                  <div v-if="showModal" id="exampleModal2" class="modal-overlay">
                      <div class="modal-content">
                          <h1 class="modal-title">Add New Column</h1>
                          <form action="" @submit.prevent="storeDeliverable" method="post">
                              <input type="text" v-model="getDeliverable.title" id="title" />
                              <button type="submit">submit</button>
                          </form>
                          <br />
                          <button @click="closeModal" class="modal-close-btn">Close</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";
  import axios from "axios";

  export default {
      name: "Home",

      data() {
          return {
              title: "",
              showModal: false,
              showModal2: false,
              card_id: "",
          };
      },
      mounted() {
          this.getAllDeliverables();
      },
      methods: {
          ...mapActions(["getAllDeliverables"]),

          storeDeliverable() {
              axios
                  .post("/deliverables", { title: this.getDeliverable.title })
                  .then((res) => {
                      this.showModal = false;
                      this.getDeliverable.title = "";
                      this.getAllDeliverables();
                  })
                  .catch((err) => {
                      console.log(`Error : ${err}`);
                  });
          },

          storeTask(value) {
              console.log(value);
              let payload = {
                  title: this.getTask.title,
                  deliverable_id: value,
                  description: this.getTask.description,
              };
              axios
                  .post("/tasks", payload)
                  .then((res) => {
                      this.showModal2 = false;
                      this.getTask.title = "";
                      this.getTask.description = "";
                      this.getAllDeliverables();
                  })
                  .catch((err) => {
                      console.log(`Error : ${err}`);
                  });
          },

          deleteCol(value) {
              axios
                  .delete("/deliverables/" + value)
                  .then((res) => {
                      this.getAllDeliverables();
                  })
                  .catch((err) => {
                      console.log(`Error : ${err}`);
                  });
          },

          openModal() {
              this.showModal = true;
          },
          closeModal() {
              this.showModal = false;
          },
          openModal2(value) {
              this.card_id = value;
              this.showModal2 = true;
          },
          closeModal2() {
              this.showModal2 = false;
          },
      },
      computed: {
          ...mapGetters(["getDeliverable", "allDeliverables", "getTask"]),
      },
  };
</script>
<style></style>
