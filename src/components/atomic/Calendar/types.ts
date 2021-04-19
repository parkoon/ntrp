import { Dayjs } from 'dayjs'

/**
 * 달 시작 일 이전 / 이후 빈 값을 null 로 표현
 */
export type CalendarArr = Array<null | Dayjs>
