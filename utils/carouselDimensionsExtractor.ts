interface ImageDimensionsInterface {
  width: number
  gap: number
}

const extractNumFromXxxPx = (str: string): number | null => {
  const width = parseInt(str.match(/[0-9]+/)[0])
  return width ? width : null
}

const getImageWidthAndGap = (): ImageDimensionsInterface | null => {
  const carouselEl = document.getElementsByClassName('Carousel')[0]
  const gapStr = getComputedStyle(carouselEl.firstChild as Element).gap
  const liWidth = getComputedStyle(
    carouselEl.firstChild.firstChild as Element
  ).width

  const gapNum = extractNumFromXxxPx(gapStr)
  const widthNum = extractNumFromXxxPx(liWidth)
  if (gapNum && widthNum) {
    return {
      width: widthNum,
      gap: gapNum,
    }
  }
}

export { getImageWidthAndGap }
