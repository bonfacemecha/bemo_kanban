<template>
    <div class="container">
        <div class="row">
            <div class="column" v-for="col in allDeliverables" :key="col.id">
                <button class="btn btn--state-delete" type="button" title="delete" @click.prevent="deleteCol(col.id, $event)">X</button>
                <h2 class="column-title">{{ col.title }}</h2>

                <div v-for="item in col.tasks" :key="item.id">
                    <button data-toggle="modal" :data-target="'#exampleModal'+col.id" @click="editModalWindow(item)">
                        <div class="card">
                            <h4>{{item.title}}</h4>
                        </div>
                    </button>
                </div>

                <button class="btn" data-toggle="modal" :data-target="'#exampleModal'+col.id" @click="openModal2(col.id)">Add Card</button>
                <div v-if="showModal2 && card_id === col.id" :id="'exampleModal'+col.id" class="modal-overlay">
                    <div class="modal-content">
                        <h5 v-show="!editMode" class="modal-title" id="addNewLabel">Add New Card</h5>
                        <h5 v-show="editMode" class="modal-title" id="addNewLabel">Update Card</h5>
                        <form action="" @submit.prevent="editMode ? updateTask() : storeTask(col.id)" method="post">
                            <label for="title">Title</label>
                            <input type="text" v-model="getTask.title" id="title" />
                            <label for="description">Description</label>
                            <input type="text" v-model="getTask.description" id="description" />

                            <button v-show="!editMode" class="btn" type="submit">Submit</button>
                            <button v-show="editMode" type="submit" class="btn btn-primary">Update</button>
                        </form>
                        <button @click="closeModal2" class="btn btn--state-modal-close-btn">Close</button>
                    </div>
                </div>
            </div>
            <div class="column">
                <div>
                    <button class="btn" data-target="#exampleModal2" @click="openModal">Add New Column</button>
                    <div v-if="showModal" id="exampleModal2" class="modal-overlay">
                        <div class="modal-content">
                            <h1 class="modal-title">Add New Column</h1>
                            <form action="" @submit.prevent="storeDeliverable" method="post">
                                <label for="title2">Title</label>
                                <input type="text" v-model="getDeliverable.title" id="title2" />
                                <button class="btn" type="submit">Submit</button>
                            </form>
                            <button @click="closeModal" class="btn btn--state-modal-close-btn">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import draggable from "vuedraggable";
    import axios from "axios";

    export default {
        name: "Home",
        data() {
            return {
                editMode: false,
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
                        Toast.fire({
                            icon: "success",
                            title: "Record added successfully",
                        });
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
                        Toast.fire({
                            icon: "success",
                            title: "Record added successfully",
                        });
                        this.showModal2 = false;
                        this.editMode = false;
                        this.getTask.reset();
                        this.getAllDeliverables();
                    })
                    .catch((err) => {
                        console.log(`Error : ${err}`);
                    });
            },

            updateTask() {
                let payload = {
                    title: this.getTask.title,
                    description: this.getTask.description,
                };

                axios
                    .put("/tasks/" + this.getTask.id, payload)
                    .then((res) => {
                        Toast.fire({
                            icon: "success",
                            title: "Record updated successfully",
                        });
                        this.showModal2 = false;
                        this.getTask.reset();
                        this.editMode = false;
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
                        Toast.fire({
                            icon: "success",
                            title: "Record deleted successfully",
                        });
                        this.getAllDeliverables();
                    })
                    .catch((err) => {
                        console.log(`Error : ${err}`);
                    });
            },

            editModalWindow(item) {
                this.getTask.clear();
                this.editMode = true;
                this.getTask.reset();
                this.card_id = item.deliverable_id;
                console.log(item.deliverable_id);
                this.showModal2 = true;
                this.getTask.fill(item);
            },

            openModal() {
                this.showModal = true;
            },
            closeModal() {
                this.showModal = false;
            },
            openModal2(value) {
                this.editMode = false;
                this.card_id = value;
                this.showModal2 = true;
                this.getTask.reset();
            },
            closeModal2() {
                this.showModal2 = false;
                this.getTask.reset();
            },
        },
        components: {
            draggable,
        },
        computed: {
            ...mapGetters(["getDeliverable", "allDeliverables", "getTask"]),
        },
    };
</script>
<style></style>
