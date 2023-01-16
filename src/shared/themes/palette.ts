type PaletteName =
  | 'black'
  | 'white'
  | 'offWhite'
  | 'orange'
  | 'orangeDarker'
  | 'lightGrey'
  | 'lighterGrey'
  | 'angry'
  | 'deepPurple'
  | 'blue'

export const palette: { [key in PaletteName]: string } = {
  black: '#252525',
  white: '#ffffff',
  offWhite: '#e6e6e6',
  orange: '#FBA928',
  orangeDarker: '#EB9918',
  lightGrey: '#939AA4',
  lighterGrey: '#CDD4DA',
  angry: '#dd3333',
  deepPurple: '#5D2555',
  blue: 'blue',
}
