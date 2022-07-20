<template>
  <h1>Student</h1>
  <div class="events">
    <StudentCard
      v-for="student in students"
      :key="student.id"
      :student="student"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import StudentCard from '../components/StudentCard.vue'
import StudentService from '@/services/StudentService'

export default {
  name: 'StudentView',
  components: {
    StudentCard
  },
  data() {
    return {
      students: null
    }
  },
  created() {
    StudentService.getEvents()
      .then((response) => {
        this.students = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
