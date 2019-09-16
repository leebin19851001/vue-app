    export default {
        state: {
            name: "xixi",
            age: 3,
            look: 'Lovely',
            studentList:[]
          },
          getters: {
            newStudentList (state) {
              return state.studentList.map( student => `姓名: ${student.name} 年龄：${student.age}`)
            }
          },
          mutations: {
            changeStudentList (state, payload) {
              state.studentList.push(payload);
            }
          },
          actions: {
            changeStudentList( {commit}, payload){
              setTimeout ( ()=> {
                commit('changeStudentList',payload);
              }, 1000);
            }
          }
    }