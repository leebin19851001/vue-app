<template>
    <div class="question">
        问题： {{ question}}
        <button
            v-show="nextFlag"
            @click="handleClick">
            下一个问题
        </button>
    </div>
    
</template>

<script>
export default {
    beforeRouteUpdate (to, from, next) {
        const id = to.params.id;
        this.getData(id);
        next();
    },
    methods: {
        handleClick () {
            this.$router.push({
                name: 'question',
                params: {
                    id: this.questionId + 1
                }
            });
        },
        getData(id) {
            const index = this.questionList.findIndex( item => item.questionId === id);
            if (index !== -1) {
                this.question = this.questionList[index].title;
                this.questionId = id;               
            } else {
                this.question = '没有更多问题了！！！';
                this.nextFlag = false;
            }
        }
    },
    mounted () {
        const id = this.$route.params.id;
        this.getData(id);
    },
    data () {
        return {
            nextFlag: true,
            question: '',
            questionId: null,
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