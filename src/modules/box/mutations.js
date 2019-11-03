// import _ from 'lodash'
import {
  SET_SCENE_WIDTH,
  SET_SCENE_HEIGHT_IS_DIRTY,
  SET_SCENE_HEIGHT,
  SET_BOX_WIDTH,
  SET_BOX_HEIGHT,
  SET_BOX_FACE,
  SET_BOX_DEPTH,
  SET_FACE_WIDTH,
  SET_FACE_HEIGHT
} from './types'
const mutations = {
  [SET_SCENE_WIDTH]: function (state, value) { state.sceneWidth = value },
  [SET_SCENE_HEIGHT_IS_DIRTY]: function (state, value) { state.sceneHeightIsDirty = value },
  [SET_SCENE_HEIGHT]: function (state, value) { state.sceneHeight = value },
  [SET_BOX_WIDTH]: function (state, value) {
    state.width = value
  },
  [SET_BOX_HEIGHT]: function (state, value) {
    state.height = value
  },
  [SET_BOX_DEPTH]: function (state, value) {
    state.depth = value
  },
  [SET_FACE_WIDTH]: function (state, {face, value}) {
    if (value) {
      state.faces[face].width = value
      // adjustBoxSize(state, face)
    }
  },
  [SET_FACE_HEIGHT]: function (state, {face, value}) {
    if (value) {
      state.faces[face].height = value
      // adjustBoxSize(state, face)
    }
  },
  [SET_BOX_FACE]: function (state, value) { state.face = value },
}
/* bugged
const minBoxSize = 500
function adjustBoxSize(state, face) {
  function setBoxWidthToMaxFaceWidth() {
    let maxWidth
    if (['right', 'left'].indexOf(face) < 0) {
      maxWidth = Math.max(..._.flatMap(['front', 'back', 'top', 'bottom'], face => state.faces[face].width || minBoxSize))
      state.width = maxWidth
    } else {
      maxWidth = Math.max(..._.flatMap(['right', 'left', 'top', 'bottom'], face => state.faces[face].width || minBoxSize))
      state.depth = maxWidth
    }
  }

  function setBoxHeightToMaxFaceHeight() {
    let maxHeight
    if (['top', 'bottom'].indexOf(face) === -1) {
      maxHeight = Math.max(..._.flatMap(['front', 'back', 'right', 'left'], face => state.faces[face].height || minBoxSize))
      state.height = maxHeight
    } else {
      maxHeight = Math.max(..._.flatMap(['front', 'back', 'top', 'bottom'], face => state.faces[face].height || minBoxSize))
      state.depth = maxHeight
    }
  }
  setBoxWidthToMaxFaceWidth()
  setBoxHeightToMaxFaceHeight()
}
*/
export default mutations
