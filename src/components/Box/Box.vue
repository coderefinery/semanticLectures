<template>
  <div
    class="scene"
    :style="sceneStyle"
  >
    <div
      class="box"
      :style="boxStyle"
    >
      <side face="front" />
      <side face="back" />
      <side face="right" />
      <side face="left" />
      <side face="top" />
      <side face="bottom" />
    </div>
  </div>
</template>

<script>
import { SET_SCENE_WIDTH, SET_SCENE_HEIGHT, SET_BOX_WIDTH, SET_BOX_DEPTH, SET_SCENE_HEIGHT_IS_DIRTY } from '../../modules/box/types'
import Side from './Side'

const namespace = 'box'
export default {
  name: 'Box',
  components: {
    Side
  },
  computed: {
    sceneHeight() {
      return this.$store.state.box.sceneHeight
    },
    sceneWidth() {
      return this.$store.state.box.sceneWidth
    },
    face: {
      get() {
        return this.$store.state.box.face
      }
    },
    sceneStyle() {
      let style = {}
      style.height = `${this.sceneHeight}px`
      style.perspective = `${this.sceneWidth * 4}px`
      return style
    },
    boxStyle() {
      let style = {}
      style.height = `${this.height}px`
      style.width = `${this.sceneWidth}px`
      style.transform = `${this.yTranslation(this.face)} ${this.zTranslation(this.face)} ${this.yRotation(this.face)}`
      style.transition = `transform ${this.transitionTime}s ease`
      if (this.debug) {
        style.backgroundColor = `#000;`
      }
      return style
    },
    width() {
      return this.$store.state.box.width
    },
    height() {
      return this.$store.state.box.height
    },
    depth() {
      return this.$store.state.box.depth
    },
    transitionTime() {
      return this.$store.state.box.transitionTime
    },
    debug() {
      return this.$store.state.box.debug
    }
  },
  watch: {
    $route() { // to, from
      const vm = this
      this.$nextTick(function () {
        vm.adjustSize()
      })
    }
  },
  mounted() {
    const vm = this
    this.$nextTick(function () {
      window.addEventListener('resize', function() {
        vm.$store.commit(namespace + '/' + SET_SCENE_HEIGHT_IS_DIRTY, true)
      })
      vm.$store.commit(namespace + '/' + SET_SCENE_HEIGHT_IS_DIRTY, true)
    })
    this.$watch(
      '$route',
      function () { // to, from
        vm.$nextTick(function () {
          vm.$store.commit(namespace + '/' + SET_SCENE_HEIGHT_IS_DIRTY, true)
        })
      }
    )
    this.$watch(
      `$store.state.${namespace}.sceneHeightIsDirty`,
      function (newVal, oldVal) {
        const hasChanged = newVal !== oldVal
        const isDirty = hasChanged && newVal
        if (isDirty) {
          vm.adjustSize()
        }
      }
    )
    this.adjustSize()
  },
  methods: {
    yTranslation(face) {
      // compensates for turning tall and slim box onto its side
      let translation = ''
      if (['top', 'bottom'].indexOf(face) !== -1) {
        translation = `translateY(${-(this.height - this.depth) / 2}px)`
      }
      return translation
    },
    zTranslation(face) {
      // maintains center of box in center of scene (coupled with yRotation)
      let translation = ''
      if (['front', 'back'].indexOf(face) !== -1) {
        translation = `translateZ(${-this.depth / 2}px)`
      } else if (['right', 'left'].indexOf(face) !== -1) {
        translation = `translateZ(${-this.width / 2}px)`
      } else if (['top', 'bottom'].indexOf(face) !== -1) {
        translation = `translateZ(${-this.height / 2}px)`
      }
      return translation
    },
    yRotation(face) {
      // rotates acitve box side to face the window
      let rotation = 0
      if (face === 'front') rotation = `rotateY(0deg)`
      if (face === 'back') rotation = `rotateY(-180deg)`
      if (face === 'right') rotation = `rotateY(-90deg)`
      if (face === 'left') rotation = `rotateY(90deg)`
      if (face === 'top') rotation = `rotateX(-90deg)`
      if (face === 'bottom') rotation = `rotateX(90deg)`
      return rotation
    },
    adjustSize() {
      this.$store.commit(namespace + '/' + SET_SCENE_WIDTH, Math.min(this.$el.clientWidth, window.innerWidth))
      this.$store.commit(namespace + '/' + SET_BOX_WIDTH, Math.min(this.$el.clientWidth, window.innerWidth))
      this.$store.commit(namespace + '/' + SET_BOX_DEPTH, Math.min(this.$el.clientWidth, window.innerWidth))
      const activeSide = this.$el.children[0].querySelector(`.side.active`)
      if (activeSide) {
        const content = activeSide.children[0]
        if (content) {
          if (this.sizeTimer) this.sizeTimer = clearTimeout(this.sizeTimer)
          const heightChanged = content.clientHeight !== this.lastSceneHeight
          if (heightChanged) {
            this.$store.commit(namespace + '/' + SET_SCENE_HEIGHT, content.clientHeight)
            this.lastSceneHeight = content.clientHeight
            // todo: stinks: inefficient size watchdog (alternatives: css?, @mounted$nextTick: content > img@load bootstrapping
            // todo: css3 for sizing: https://stackoverflow.com/questions/16301625/rotated-elements-in-css-that-affect-their-parents-height-correctly#answer-47860039
            this.sizeTimer = setTimeout(this.adjustSize, 1000)
          }
        }
      }
      this.$store.commit(namespace + '/' + SET_SCENE_HEIGHT_IS_DIRTY, false)
    }
  }
}
</script>

<style scoped>
  .scene {
    width: 100%;
  }
  .box {
    position: relative;
    transform-style: preserve-3d;
  }
</style>
