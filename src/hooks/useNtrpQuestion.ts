import { INtrp } from '@Interfaces/Ntrp'

import ntrpQuestions from '@Constants/ntrp/questions'

function useNtrpQuestion(id: string) {
  const question = ntrpQuestions[id] as INtrp
  const keys = Object.keys(ntrpQuestions)

  const last = keys.indexOf(id) === keys.length - 1

  const first = keys.indexOf(id) === 0

  return {
    question,
    last,
    first,
  }
}

export default useNtrpQuestion
