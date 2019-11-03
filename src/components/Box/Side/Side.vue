<template>
  <div
    class="side"
    :class="faceClasses"
    :style="faceStyle"
  >
    <router-view
      :name="face"
    />
    <span
      v-if="debug"
      style="color: white; font-size: 72px"
    >{{ face }}</span>
  </div>
</template>

<script>
import { SET_SCENE_HEIGHT_IS_DIRTY } from '../../../modules/box/types'
export default {
  name: 'Side',
  props: {
    face: {
      type: String,
      required: true,
      validator(value) {
        return ['front', 'back', 'right', 'left', 'top', 'bottom'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      timeout: null,
      show: true
    }
  },
  computed: {
    debug: {
      get() {
        return this.$store.state.box.debug
      }
    },
    faceStyle() {
      let style = {}
      style.width = `${this.faceWidth}px`
      style.height = `${this.faceHeight}px`
      style.left = `${this.faceYOffsetToSide}px`
      style.top = `${this.faceZOffsetToSide}px`
      style.transform = `${this[this.face + 'FaceTransform']}`
      style.overflow = 'hidden'
      if (this.isOppositeFace) {
        style.opacity = '0.2'
      } else if (this.isTargetFace) {
        style.opacity = '1'
        style.overflow = 'visible'
      }
      if (this.debug) {
        const faceColors = {
          front: 'hsla(8, 0%, 100%, 0.5',
          back: 'hsla(0, 0%, 0%, 0.5',
          right: 'hsla(0, 100%, 50%, 0.5)',
          left: 'hsla(124, 100%, 50%, 0.5)',
          top: 'hsla(42, 100%, 50%, 0.5)',
          bottom: 'hsla(216, 100%, 50%, 0.5)'
        }
        style.backgroundColor = faceColors[this.face]
      }
      return style
    },
    frontFaceTransform() { return `rotateY(0deg) translateZ(${this.boxDepth / 2}px)` },
    backFaceTransform() { return `rotateY(180deg) translateZ(${this.boxDepth / 2}px)` },
    rightFaceTransform() { return `rotateY(90deg) translateZ(${this.boxWidth / 2}px)` },
    leftFaceTransform() { return `rotateY(-90deg) translateZ(${this.boxWidth / 2}px)` },
    topFaceTransform() { return `rotateX(90deg) translateZ(${this.faceHeight / 2}px)` },
    bottomFaceTransform() { return `rotateX(-90deg) translateZ(${-(this.faceHeight) / 2 + this.boxHeight}px)` },
    faceWidth() {
      let value = 0
      if (['front', 'back'].indexOf(this.face) !== -1) value = this.boxWidth
      if (['right', 'left'].indexOf(this.face) !== -1) value = this.boxDepth
      if (['top', 'bottom'].indexOf(this.face) !== -1) value = this.boxWidth
      return value
    },
    faceHeight() {
      let value = 0
      if (['front', 'back'].indexOf(this.face) !== -1) value = this.boxHeight
      if (['right', 'left'].indexOf(this.face) !== -1) value = this.boxHeight
      if (['top', 'bottom'].indexOf(this.face) !== -1) value = this.boxDepth
      return value
    },
    faceYOffsetToSide() {
      let value = 0
      if (['front', 'back'].indexOf(this.face) !== -1) value = Math.max(this.boxDepth - this.boxWidth, 0) / 2
      if (['right', 'left'].indexOf(this.face) !== -1) value = Math.max(this.boxWidth - this.boxDepth, 0) / 2
      if (['top', 'bottom'].indexOf(this.face) !== -1) value = Math.max(this.boxDepth - this.boxWidth, 0) / 2
      return value
    },
    faceZOffsetToSide() {
      let value = 0
      if (this.width < this.height) {
        if (['front', 'back'].indexOf(this.face) !== -1) value = Math.max(this.boxDepth - this.boxHeight, 0) / 2
        if (['right', 'left'].indexOf(this.face) !== -1) value = Math.max(this.boxDepth - this.boxHeight, 0) / 2
        if (['top', 'bottom'].indexOf(this.face) !== -1) value = Math.max(this.boxHeight - this.boxDepth, 0) / 2
        if (this.face === 'top') value = this.boxHeight / 2
        if (this.face === 'bottom') value = -this.boxHeight / 2
      }
      return value
    },
    faceClasses() {
      let classes = {
        [this.face]: true,
        opposite: this.isOppositeFace,
        active: this.isTargetFace
      }
      return classes
    },
    sceneWidth() { return this.$store.state.box.sceneWidth },
    boxHeight() { return this.$store.state.box.height },
    boxWidth() { return this.$store.state.box.width },
    boxDepth() { return this.$store.state.box.depth },
    isTargetFace() {
      return this.face === this.$store.state.box.face
    },
    isOppositeFace() {
      const opposites = {
        front: 'back',
        back: 'front',
        right: 'left',
        left: 'right',
        top: 'bottom',
        bottom: 'top'
      }
      return this.face === opposites[this.$store.state.box.face]
    },
  },
  created () {
    let vm = this
    window.addEventListener('scroll', vm.$store.commit('box/' + SET_SCENE_HEIGHT_IS_DIRTY, true))
  },
  mounted() {
    let vm = this
    this.$nextTick(function () {
      vm.$store.commit('box/' + SET_SCENE_HEIGHT_IS_DIRTY, true)
    })
  },
  updated() {
    let vm = this
    this.$nextTick(function () {
      vm.$store.commit('box/' + SET_SCENE_HEIGHT_IS_DIRTY, true)
    })
  }
}
</script>

<style scoped>
  .side {
    position: absolute;
    z-index: 1;
    min-height: 100px;
    min-width: 100px;
  }

  .side > * {
    opacity: 0.25
  }
  .side.active > * {
    opacity: 1
  }
  .side.opposite > * {
    opacity: 0.1
  }
</style>
