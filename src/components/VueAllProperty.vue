<template>
  <div class="hello">
    <h1>{{ msg | emptyFilter }}</h1>
    <h1>上面的文字，反转过来了：{{ reverseMsg | emptyFilter }}</h1>
    <h1>{{ msg2 | emptyFilter }}</h1>
    <input v-model='input1'>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '文本值：VueAllProperty',
      msg2: '',
      input1: 'input1'
    }
  },
  created () {
    console.log('created')
    this.output()
  },
  mounted () {
    this.$nextTick(function () {
        console.log('mounted')
        this.output()
    })
  },
  methods: {
    output: function () {
        console.log('output')
    }
  },
  computed: {
    reverseMsg: function () {
        return this.msg.split('').reverse().join('')
    }
  },
  watch: {
    input1: function (val, oldVal) {
        console.log('val = '+ val +' , oldVal = ' + oldVal)
    }
  },
  filters: {
    emptyFilter: (value) => {
        return value === '' ? 'filter默认显示：暂无信息' : value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
