<template>
  <div class="hello">
      <el-button @click="num++">+</el-button>
      <el-button @click="num--">-</el-button>


    <div v-for="(item , index) in data" :key="index">
       <div style="padding: 10px">
         {{index}} + {{item.name + item.age}}
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['msg'],
  watch:{
    'num':function (){
      console.log(this.num);
    }
  },
  data(){
    return{
      num:0,
      data:[
          {
        name:'zhangsan',
            age:'3'
          },
          {
            name:'lisi',
            age:'4'
          },
          {
            name:'wangwu',
            age:'5'
          },
      ]
    }
  },
  methods:{
    a(){
      console.log(this.msg);
    },
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
