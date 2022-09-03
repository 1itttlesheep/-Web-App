<template>
    <div>
        <h3>从{{this.fromCity}}到{{this.toCity}}出行政策</h3>
        <p>{{this.fromInfo}}</p>
        <p>{{this.toInfo}}</p>
    </div>
</template>

<script>
import api from "../api/index";
export default {
  props: {
    fromId: {
      type: String,
      default: 10000,
    },
    toId: {
      type: String,
      default: 10000,
    },
  },
  data(){
    return {
        fromCity: "",
        toCity: "",
        fromInfo: "",
        toInfo: "",
    }
  },
  mounted(){
    console.log("start")
    api.getPolicy({
        from: this.fromId,
        to: this.toId,
        key: "171e165a7d991c5f6ecd5194c54778ef"
    }).then((res) => {
        console.log(res.data)
        if(res.status == 200){
            this.fromCity = res.data.result.from_info.city_name
            this.fromInfo = res.data.result.from_info.low_in_desc
            this.toCity = res.data.result.to_info.city_name
            this.toInfo = res.data.result.to_info.low_in_desc
        }
    }).catch((err) => {
        console.log(err)
    })
  }
};
</script>

<style>
</style>