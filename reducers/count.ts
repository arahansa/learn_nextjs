export const initialState = 0 // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

export const COUNT_PLUS = 'COUNT_PLUS' // count 1을 증가시킬 액션 타입이다.
export const COUNT_MINUS = 'COUNT_MINUS' // count 1을 감소시킬 액션 타입이다.

export const countPlusAction = () => ({
  // 액션 생성 함수
  type: COUNT_PLUS,
})

export const countMinusAction = () => ({
  type: COUNT_MINUS,
})

const reducer = (state = initialState, action: any) => {
  // 리듀서
  switch (
    action.type // 액션의 type이 COUNT_PLUS일땐 state에 + 1 COUNT_MINUS 일 땐 state에 -1
  ) {
    case COUNT_PLUS:
      return state + 1
    case COUNT_MINUS:
      return state - 1
    default:
      return state
  }
}

export default reducer
