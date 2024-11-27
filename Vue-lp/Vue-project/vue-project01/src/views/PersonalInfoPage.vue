<template>
    <div class="personal-info">
      <h2>个人信息页面</h2>
      <PersonalInfo v-if="!isEditing"/>
      <EditPersonalInfo v-if="isEditing"/>
      <button @click="toggleEdit">编辑/取消</button>
    </div>
  </template>
  
  <script>
  import PersonalInfo from '../components/PersonalInfo.vue';
  import EditPersonalInfo from '../components/EditPersonalInfo.vue';
  
  export default {
    name: 'PersonalInfoPage',
    components: {
      PersonalInfo,
      EditPersonalInfo,
    },
    data() {
      return {
        isEditing: false,
      };
    },
    methods: {
      toggleEdit() {
        this.isEditing = !this.isEditing;
      },
    },
  };
  </script>