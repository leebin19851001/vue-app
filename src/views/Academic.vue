<template>
    <ul class="academic">
        <router-link
            tag="li"
            :to="{name: 'question', params: {id: question.questionId}}"
            v-for="question in questionList"
            :key="question.questionId"
        >
            {{question.title}}
        </router-link>
    </ul>
</template>

<script>
export default {
    beforeRouteEnter (to, from, next) {
        next();
    },
    data () {
        return {
            questionList: [
                {
                    questionId: 201801,
                    title: "第一个问题 "
                },
                {
                    questionId: 201802,
                    title: "第二个问题 "
                },
                {
                    questionId: 201803,
                    title: "第三个问题 "
                }
            ]
        }
    }
}
</script>

<style scoped>
li {
    margin-bottom: 20px;
}
</style>