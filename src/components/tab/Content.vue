<script>
export default {
  props:{
    pans:{
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  mounted(){
  },
  render(){
    return(
      <div>
        {this.pans.map((ele, index) => {
          return <div style={{display:ele.isActive ? 'block' : 'none'}}>{ele.$slots.default}</div>
        })} 
         
      </div>
    )
  }
}
</script>

<style>

</style>