import { getHint } from '../logic'
import { answers } from './list'

export function getAnswerOfDay(day: number) {

  // const [word = '', hint = ''] = answers[day] || []

  const word = '我谢谢你'
  const hint = '谢'
  return {
    word,
    hint: hint || getHint(word),
  }
}
