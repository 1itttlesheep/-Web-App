<template>
  <div>
    <div class="title">
      <h3>{{ cityName }}疫情数据</h3>
    </div>
    <div class="map" id="city"></div>
  </div>
</template>

<script>
import api from "../api/index";
export default {
  props: {
    cityName: {
      type: String,
      default: "北京",
    },
  },
  mounted() {
    api
      .getCityNcov({
        city: this.cityName
      })
      .then((res) => {
        console.log(res.data);
        let covidData = [];
        for (let i = 0; i < res.data.retdata.length; i++) {
          let temp = {
            name: res.data.retdata[i].xArea,
            value: res.data.retdata[i].curConfirm,
            // name: "xx",
            // value: 100
          };
          covidData.push(temp);
        }
        this.$echarts.cityMap("city", covidData);
      })
      .catch((err) => {
        console.log(err);
      });
    this.$echarts.cityMap("city", [], this.cityName);
  },
};
</script>

<style>
.map {
  width: 375px;
  height: 500px;
}

.title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2828ff;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>