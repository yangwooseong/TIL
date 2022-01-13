import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
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

export const { increment, incrementByAmount } = counterSlice.actions
console.log(increment.toString() === increment.type)
console.log(increment())
console.log(incrementByAmount(1))
export const myCounterReducer = counterSlice.reducer
