<template>
  <div class="card text-center">
    <AppHeader></AppHeader>
    <div class="row">
      <div class="col-md-3 bg-light p-3">
        <AppLinks></AppLinks>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-8">
        <AppTable></AppTable>
      </div>
    </div>
    <AppFooter></AppFooter>
  </div>
  <button type="button" class="btn btn-success position-fixed bottom-0 end-0 m-3"
    @click="isOpen = !isOpen"
  >Add Student</button>
  
  <div v-if="isOpen" class="modal d-block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add New Student</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="isOpen = !isOpen"></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
            <input type="text" v-model="studName" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">City</span>
            <input type="text" v-model="studCity" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="isOpen = !isOpen">Close</button>
          <button type="button" class="btn btn-primary" @click="addStudent()">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppLinks from "@/components/AppLinks.vue";
import AppTable from "@/components/AppTable.vue";
import students from "@/data/students";

export default defineComponent({
  name: 'App',
  components: {
    AppTable,
    AppLinks,
    AppHeader,
    AppFooter
  },
  setup(){
    const isOpen = ref<boolean>(false);
    const studName = ref<string>("");
    const studCity = ref<string>("");
    function addStudent(){
      if(studName.value.trim() === "" || studCity.value.trim() === "") {
        alert("Please enter name and city together");
        return;
      }
      students.push({
        id: students.length + 1,
        name: studName.value.trim(),
        city: studCity.value.trim()
      });
      isOpen.value = false;
      studName.value = "";
      studCity.value = "";
    }
    return {
      isOpen,
      studName,
      studCity,
      addStudent
    }
  }
});

</script>

<style>
.modal {
  background: rgba(0, 0, 0, 0.5);
}
</style>
