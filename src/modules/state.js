import reservedWords from '../lib/reservedWords'
const state = {
  minFontSize: 80,
  maxFontSize: 150,
  reservedWords,
  flavors: [
    'Python',
    'R',
    'MatLab',
    'HPC',
    'Humanities'
  ],
  scopeNames: [
    'course',
    'episode',
    'elaboration',
    'example',
    'point',
    'summary'
  ],
  preferredFlavor: 'Python',
}
export default state
