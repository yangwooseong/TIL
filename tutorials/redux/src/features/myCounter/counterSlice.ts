import {
  Action,
  createAction,
  createAsyncThunk,
  createReducer,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import { fetchCount } from '../counter/counterAPI'
export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
}

// createAsyncThunk('type prefix', payload creator)
const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number, thunkAPI) => {
    const response = await fetchCount(amount)
    return response.data
  },
)

const counterSlice = createSlice({
  name: 'myCounter',
  initialState,
  reducers: {
    // 이 명령을 해라
    increment(state) {
      // 명령을 수행하는 부분
      state.value += 1
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
    usersLoading(state, action) {
      if (state.status === 'idle') {
        state.status = 'loading'
      }
    },
    usersReceived(state, action) {
      if (state.status === 'loading') {
        state.status = 'idle'
        state.value += action.payload
      }
    },
  },

  // extraReducers(actionCreator or type, reducer)
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.status = 'idle'
      state.value += action.payload
    })
  },
})

export const { usersLoading, usersReceived } = counterSlice.actions

export const myIncrementByAmount =
  (amount: number) => async (dispatch: any) => {
    dispatch(usersLoading({}))
    const response = await fetchCount(amount)
    dispatch(usersReceived(response.data))
  } // 왠지 이게 더 편해보이기는 한데, createAsyncThunk 를 쓰면 로딩 중이거나 끝날 때의
// 로직을 thunk 안에 아예안써도 되서 그게 좀 편한 점이 될 수도?

export const { increment, incrementByAmount } = counterSlice.actions
console.log(increment.toString() === increment.type)
console.log(increment())
console.log(incrementByAmount(1))
export const myCounterReducer = counterSlice.reducer

const action = createAction<number, 'test'>('test')
// payload 의 literal type 추론 가능
console.log(action(2))

const inc = createAction<number>('increment')
// payload 의 literal type 추론 불가

const incre = createAction<number, 'increment'>('increment')
const decrement = createAction<number, 'decrement'>('decrement')

const myReducer = createReducer(0, {
  [incre.type]: (state, action) => {
    // action is any type here
  },
  [decrement.type]: (state, action: PayloadAction<string>) => {
    // even though action should actually be PayloadAction<number>, TypeScript can't detect that and won't give a warning here.
  },
}) // createAction 에서 payload 의 타입을 지정을 해줬음에도 불구하고 타입 추론이 안됨

const myReducer1 = createReducer(0, (builder) => {
  builder.addCase(incre, (state, action) => {
    action.payload += 1
  })
})

// 하지만!! 실제로는 createSlice를 쓰면 끝 ~

const slice = createSlice({
  name: 'test',
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
  },
})
