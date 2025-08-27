import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 定义 counter 状态的类型
interface CounterState {
  value: number;
}

// 定义 counter 的初始状态
const initialState: CounterState = {
  value: 0,
};

// 创建 counter slice，包含 reducer 和 action
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // 增加计数的 reducer
    increment: (state) => {
      state.value += 1;
    },
    // 减少计数的 reducer
    decrement: (state) => {
      state.value -= 1;
    },
    // 增加指定值的 reducer，接受一个 payload
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    // 重置计数的 reducer
    reset: (state) => {
      state.value = 0;
    },
  },
});

// 导出各个 action creator
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

// 导出 reducer
export default counterSlice.reducer;