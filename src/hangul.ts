const INITIAL_SOUND_TABLE = [
  'ㄱ',
  'ㄲ',
  'ㄴ',
  'ㄷ',
  'ㄸ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅃ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅉ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ'
]

export function asIndependentInitialSoundChar(index: number): string {
  return INITIAL_SOUND_TABLE[index]
}

export function composeHangul(
  initialSoundIndex: number,
  medialSoundIndex: number = -1,
  finalSoundIndex: number = 0
): string {
  if (medialSoundIndex === -1) {
    return asIndependentInitialSoundChar(initialSoundIndex)
  }
  return String.fromCharCode(
    initialSoundIndex * 588 + medialSoundIndex * 28 + finalSoundIndex + 0xac00
  )
}

export function decomposeHangul(c: string): [number, number?, number?] | null {
  let charCode = c.charCodeAt(0)

  if (/*ㄱ*/ 0x3131 <= charCode && charCode <= /*ㅎ*/ 0x314e) {
    const initialSoundIndex = INITIAL_SOUND_TABLE.indexOf(c)
    return initialSoundIndex !== -1 ? [initialSoundIndex] : null
  }

  if (charCode < /*가*/ 0xac00 || /*킿*/ 0xd0bf < charCode) {
    return null
  }

  charCode -= 0xac00
  const initialSoundIndex = Math.floor(charCode / 588)
  const medialSoundIndex = Math.floor((charCode % 588) / 28)
  const finalSoundIndex = Math.floor(charCode % 28)

  if (finalSoundIndex === 0) {
    return [initialSoundIndex, medialSoundIndex]
  } else {
    return [initialSoundIndex, medialSoundIndex, finalSoundIndex]
  }
}

export function hasMedialSound(c: string | [number, number?, number?]): boolean {
  const indices = c instanceof Array ? c : decomposeHangul(c)
  return indices !== null && indices.length == 2 && indices[2] !== -1
}

export function hasFinalSound(c: string | [number, number?, number?]): boolean {
  const indices = c instanceof Array ? c : decomposeHangul(c)
  return indices !== null && indices.length == 3 && indices[2] !== 0
}
