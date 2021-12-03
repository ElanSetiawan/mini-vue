<template>
  <div class="home container">
    <div class="table-head">
      <div>Name</div>
      <div>Age</div>
      <div>Hobbies</div>
    </div>
    <div v-if="loading">Mohon tunggu sebentar..</div>
    <div v-if="!loading" class="table-body">
    <div v-for="(user, i) in dataUsers" :key="i" class="table-row">
        <div>{{user.name}}</div>
        <div>{{user.age}}</div>
        <div>{{user.hobbies}}</div>
        <div v-if="user.squard" class="table-child">
          <div v-for="(squad, i) in user.squard" :key="i" class="table-row-child">
              <div>{{squad.name}}</div>
              <div>{{squad.age}}</div>
              <div>{{squad.hobbies}}</div>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { MixinsUsers } from '../mixins/users'
export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // },
  data () {
    return {
      loading: true,
      dataUsers: []
    }
  },
  mixins: [MixinsUsers],
  created () {
    if(this.$store.getters.users.length == 0){
      this.getDataUser().then(resp =>
      this.dataUsers = resp
      )
      .catch(err => console.log(err))
    }else{
      this.dataUsers = this.$store.getters.users;
    }
    this.loading = false
  }
}
</script>
<style scoped>
.table-head,.table-row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.table-head> * ,.table-row>*:not(:nth-child(n+4)),.table-row-child>*{
    width: 25%;
    text-align: left;
}
.table-head> *:first-child ,.table-row>*:first-child,.table-row-child>*:first-child{
    width: 50%;
}
.table-head> *{
    background-color: #007e4a;
    color: white;
    padding: 10px;
    border: 1px solid;
}
.table-row>*:nth-child(n+4){
    width: 100%;
    display: block;
    padding: 0;
}
.table-row-child{
    display: flex;
    justify-content: center;
    align-items: center;
}
.table-row-child>*{
  padding: 8px 10px;
  border: 1px solid rgb(32 32 32 / 11%);
}
.table-child{
    background-color: #ededed;
}
.table-row>*{
  padding: 10px;
    border: 1px solid;
    border-top: 0;
}
</style>