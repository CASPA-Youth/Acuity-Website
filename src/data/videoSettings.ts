/**
 * Manual framing controls for the two fox videos.
 *
 * zoom: 1 is the source size; 1.1 is 10% larger.
 * x: percentage of the frame; positive moves right, negative moves left.
 * y: percentage of the frame; positive moves down, negative moves up.
 * crop: percentage trimmed from each edge without modifying the source video.
 */
export const foxVideoSettings = {
  archer: {
    zoom: 1,
    x: 0,
    y: 0,
  },
  // Thinking fox on the About page.
  sitting: {
    zoom: 1,
    x: 0,
    y: 10,
    crop: {
      top: 0,
      right: 0,
      bottom: 10,
      left: 0,
    },
  },
} as const
