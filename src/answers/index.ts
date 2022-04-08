import { getHint } from '../logic'
import { answers } from './list'

export function getAnswerOfDay(day: number) {

  // const [word = '', hint = ''] = answers[day] || []

  const word = '富婆饿饿'
  const hint = '婆'
  return {
    word,
    hint: hint || getHint(word),
  }
}
