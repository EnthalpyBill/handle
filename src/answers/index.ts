import { getHint } from '../logic'
import { answers } from './list'

export function getAnswerOfDay(day: number) {

  // const [word = '', hint = ''] = answers[day] || []

  const word = '小猪佩奇'
  const hint = '猪'
  return {
    word,
    hint: hint || getHint(word),
  }
}
