export type SpacingName = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | '16px'

export const spacing: { [key in SpacingName]: number } = {
  tiny: 4,
  small: 8,
  medium: 12,
  large: 24,
  huge: 64,
  '16px': 16,
}
