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
  preferredFlavor: 'Python',
}
export default state
