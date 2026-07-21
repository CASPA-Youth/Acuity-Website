export type PodiumPlacement = {
  /** Horizontal center, as a percentage of the stage width. */
  x: number
  /** Distance from the bottom, as a percentage of the stage height. */
  bottom: number
  /** Element width, as a percentage of the stage width. */
  width: number
}

export type ResponsivePodiumPlacement = {
  mobile: PodiumPlacement
  tablet: PodiumPlacement
  desktop: PodiumPlacement
}

/**
 * MANUAL PODIUM CONTROLS
 *
 * x: move left/right
 * bottom: move up/down
 * width: make smaller/larger
 *
 * Edit a number and save to preview it instantly on localhost.
 */
export const sponsorPodiumSettings: Record<'podium' | 'gold' | 'silver' | 'bronze', ResponsivePodiumPlacement> = {
  podium: {
    mobile: { x: 50, bottom: 0, width: 94 },
    tablet: { x: 50, bottom: 0, width: 88 },
    desktop: { x: 50, bottom: 0, width: 75 },
  },
  gold: {
    mobile: { x: 50, bottom: 36, width: 36 },
    tablet: { x: 50, bottom: 47, width: 32 },
    desktop: { x: 48, bottom: 40, width: 29 },
  },
  silver: {
    mobile: { x: 18.5, bottom: 27, width: 31 },
    tablet: { x: 18.5, bottom: 38, width: 27 },
    desktop: { x: 22.5, bottom: 30.5, width: 25.5 },
  },
  bronze: {
    mobile: { x: 82.5, bottom: 20, width: 31 },
    tablet: { x: 82.5, bottom: 30, width: 27 },
    desktop: { x: 72, bottom: 22.5, width: 25 },
  },
}
