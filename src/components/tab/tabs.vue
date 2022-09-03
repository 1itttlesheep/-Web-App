<!-- <template>
  <h3>tabs</h3>
</template> -->

<script>
import Content from "./Content.vue";
export default {
  name: "Tabs",
  components:{
    Content
  },
  data(){
    return{
      pans:[],
    }
  },
  props: {
    currentIndex: {
      type: [String, Number],
      default: 1,
    },
  },
  render() {
    return (
      <div>
        <ul class="tabs-header">{this.$slots.default}</ul>
        <Content pans={this.pans} />
      </div>
    );
  },
  methods: {
    getIndex(index) {
      this.$emit("onIndex", index);
    },
  },
};
</script>

<style scoped>
.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
}
</style>