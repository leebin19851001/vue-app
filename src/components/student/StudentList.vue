<template>
    <div class="student-list">
        <div>学生列表</div>
        <ul>
            <li 
            v-for="student in studentList"
            :key="student.id">
                {{student.name}}
                {{student.age}}
            </li>
        </ul>
        <hr/>

        <ul>
            <li 
            v-for="(student, index) in newStudentList"
            :key="index">
                {{ student }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState }  from 'vuex';
import { mapGetters } from 'vuex';

export default {
    computed : {
        ...mapState(['studentList']),
        ...mapGetters(['newStudentList'])
    }
}
</script>