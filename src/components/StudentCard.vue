<template>
  <div class="student-card">
    <h4>name: {{ student.name }}</h4>
    <h4>surname: {{ student.surname }}</h4>
    <img :src="student.image" class="image" />
    <h4>GPA: {{ student.gpa }}</h4>
  </div>
</template>

<script>
export default {
  name: 'StudentCard',
  props: {
    student: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.student-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.student-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.image {
  width: 150px;
  height: 150px;
}
</style>
