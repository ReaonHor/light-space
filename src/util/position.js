export function position (lo, block) {
  let windowWidth = document.documentElement.clientWidth
  if (windowWidth <= 700) {
    return `transform: translate3d(0px,${lo * 100}%,0) scale(${block ? "1,1" : "0.001,0.001"
      })`
  }
  return `transform: translate3d(${lo % 3 * 100}%,${Math.floor(lo / 3) * 100}%,0) scale(${block ? "1,1" : "0.001,0.001"
    })`
}

