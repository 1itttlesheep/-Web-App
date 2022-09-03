<template>
  <div>
    <p class="title"><i></i>疫情地图</p>
    <tabs :currentIndex="currentIndex" @onIndex="onIndexhandle">
      <tab index="1" label="全国疫情">
        <div class="map" id="map"></div>
      </tab>
      <tab index="2" label="全球疫情">
        <div class="map" id="worldMap"></div>
      </tab>
    </tabs>
  </div>
</template>

<script>
// import MyComponent from "../../../vue-tabs/src/components/MyComponent/MyComponent.vue";
import api from "../api/index";
export default {
  // components: { MyComponent },
  data() {
    return {
      currentIndex: 1,
    };
  },
  mounted() {
    api
      .getProvinceNcov()
      .then((res) => {
        // console.log(res.data);
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
        this.$echarts.chinaMap("map", covidData);
      })
      .catch((err) => {
        console.log(err);
      })

      api
      .getWorldNcov()
      .then((res) => {
        // console.log(res.data);
        let covidData = [];
        for (let i = 0; i < res.data.retdata.length; i++) {
          let temp = {
            name: res.data.retdata[i].xArea,
            value: res.data.retdata[i].curConfirm,
          };
          covidData.push(temp);
        }
        this.$echarts.worldMap("worldMap", covidData);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    onIndexhandle(data) {
      this.currentIndex = data;
    },
  },
};
</script>

<style scoped>
.map {
  width: 375px;
  height: 500px;
}

#worldMap {
  width: 375px;
  height: 400px;
}
.title {
  border-top: 0.005rem solid #ebebeb;
  border-bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  height: 0.44rem;
  padding: 0 0.16rem;
  font-weight: 500;
  font-size: 0.17rem;
  line-height: 0.44rem;
  background: #fff;
}
.title::before {
  content: "";
  width: 5px;
  height: 20px;
  background: #4169e2;
  margin-right: 10px;
}
</style>>

</style>