<script>
import tab from '.';

export default {
  name:"Tab",
  props:{
    label:{
      type: String,
      default: "tab",
    },
    index:{
      type:[String, Number],
      default: 1,
    }  
  },
  computed:{
    isActive(){
      return this.index == this.$parent.currentIndex
    }
  },
  mounted(){
    this.$parent.pans.push(this)
  },
  render(){
    let classNames = {
      tab:true,
      active: this.isActive,
    }
    return(<li onClick={this.clickItemHandle} class={classNames}>{this.label}</li>)
  },
  methods:{
    clickItemHandle(){
      this.$parent.getIndex(this.index)
    }
  }
}
</script>

<style scoped>
.tab {
    flex: 1;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center;
}

.tab.active {
    border-bottom: 2px solid blue;
}
</style>