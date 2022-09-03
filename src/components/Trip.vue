<template>
    <div class="spring">
        <h3 class="title">疫情期间出行防疫</h3>
        <Cascader label="出发城市" :options="options" @onValue="getFromCity"/>
        <Cascader label="到达城市" :options="options" @onValue="getToCity"/>
        <van-button type="info" block @click="getPolicy()">查看政策</van-button>
    </div>
  
</template>

<script>
import Cascader from './Cascader.vue';
import api from '../api/index'
export default { 
  components: { Cascader } ,
  data(){
    return{
      options:[],
      from: "",
      to: "",
    }
  },
  methods:{
    getFromCity(fromCity){
      this.from = String(fromCity.value)
    },
    getToCity(toCity){
      this.to = String(toCity.value)
    },
    getPolicy(from, to){
      this.$router.push({name: "Policy", params:{fromId: this.from, toId: this.to}})
    }
  },
  mounted(){
    api.getCities().then((res) => {
      if(res.status == 200){
        // console.log(res.data)
        var allcities = []
        for(let i = 0; i < res.data.result.length; i++){
          var citylist = []
          for(let j = 0; j < res.data.result[i].citys.length;j++){
            var temp2 = {
              text: res.data.result[i].citys[j].city,
              value: res.data.result[i].citys[j].city_id,
            }
            citylist.push(temp2)
          }
          var temp1 = {
            text: res.data.result[i].province,
            value: res.data.result[i].province.province_id,
            children: citylist
          }
          allcities.push(temp1)
        }
        // console.log(allcities)
        this.options = allcities
      }
    }).catch(
      (err) => {
        console.log(err)
      }
    )
  }
};
</script>

<style scoped>
.spring {
  width: 100%;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
}

.spring .title {
  font-size: 0.16rem;
  margin: 0 0 0.08rem 0.16rem;
}
</style>