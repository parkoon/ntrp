export interface INtrp {
  id: number
  type: 'stroke' | 'volley'
  skillName: string
  title: string
  tags: string[]
  answers: IAnswer[]
  weight: number
}

export interface IAnswer {
  id: string
  weight: number
  title: string
}

export interface ISelectedAnswer {
  id: number
  score: number
}
