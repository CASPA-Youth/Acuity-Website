/**
 * Manual framing controls for the two fox videos.
 *
 * zoom: 1 is the source size; 1.1 is 10% larger.
 * x: percentage of the frame; positive moves right, negative moves left.
 * y: percentage of the frame; positive moves down, negative moves up.
 */
export const foxVideoSettings = {
  archer: {
    zoom: 1,
    x: 0,
    y: 0,
  },
  sitting: {
    zoom: 1,
    x: 0,
    y: 0,
  },
} as const
