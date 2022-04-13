import { getHint } from '../logic'
import { answers } from './list'

export function getAnswerOfDay(day: number) {

  // const [word = '', hint = ''] = answers[day] || []

  const word = '订婚三金'
  const hint = '金'
  return {
    word,
    hint: hint || getHint(word),
  }
}
