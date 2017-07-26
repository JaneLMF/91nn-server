<template>
  <div class="timeline-item">
    <text class="dot"></text>
    <div class="line-top" :class="[isFirst?'line-top-first':(index===1?'line-top-second':'')]"></div>
    <div class="line-bottom" :class="[isLast?'line-bottom-last':(isFirst?'line-bottom-first':'')]"></div>
    <div class="content">
      <text class="date">{{date}}</text>
      <text class="title"><slot></slot></text>
      <slot v-if="!isFirst" name="extra"></slot>
      <slot v-else name="extra-active"></slot>
    </div>
  </div>
</template>
<script>
const modal = weex.requireModule('modal')
export default {
  name: 'v-timeline-item',
  props: {
    date: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      index: -1,
      $parent: null
    }
  },
  computed: {
    isFirst () {
      return this.index === 0
    },
    isLast () {
      return this.$parent && this.$parent.childrenCount === this.index + 1
    }
  },
  created () {
    let parent = this.$parent
    while (parent.$parent && parent.$options._componentTag !== 'v-timeline') {
      parent = parent.$parent
    }
    if (parent.$options._componentTag !== 'v-timeline') {
      modal.toast({ message: 'v-timeline-item不能单独使用', duration: 0.3 })
      return
    } else {
      this.index = parent.addLine()
    }
    this.$parent = parent
  }
}
</script>
<style>
.timeline-item {
  position: relative;
  flex-direction: row;
  flex: 1;
  padding-top: 20px;
  padding-bottom: 20px;
}
.dot {
  width: 13px;
  height: 13px;
  margin-top: 12px;
  margin-left: 16px;
  margin-right: 44px;
  border-radius: 6px;
  background-color: #bbbbbb;
}
.dot-active {
  width: 25px;
  height: 25px;
  margin-left: 10px;
  margin-top: 6px;
  margin-right: 38px;
  border-style: solid;
  border-width: 6px;
  border-color: #95c5ff;
  border-radius: 13px;
  background-color: #489cff;
}
.line-top {
  position: absolute;
  left: 22px;
  top: 0;
  height: 32px;
  width: 1px;
  background-color: #bbbbbb;
}
.line-top-first {
  height: 0;
}
.line-top-second {
  background-color: #bbbbbb;
}
.line-bottom {
  position: absolute;
  left: 22px;
  top: 45px;
  bottom: 0;
  width: 1px;
  background-color: #bbbbbb;
}
.line-bottom-first {
  top: 45px;
  background-color: #bbbbbb;
}
.line-bottom-last {
  height: 0;
}
.line-last {
  height: 0;
}
.content {
  flex: 1;
}
.title {
  color: #333333;
  font-size: 26px;
}
.date {
  color: #888888;
  font-size: 24px;
  margin-top: 5px;
  margin-bottom: 12px;
}
.title-active {
  color: #489cff;
}
.date-active {
  color: #489cff;
}
</style>
