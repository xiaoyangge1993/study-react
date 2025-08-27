/*
 * @Author: 孝扬
 * @Date: 2025-08-27 08:26:12
 * @LastEditors: 孝扬
 * @LastEditTime: 2025-08-27 08:35:15
 * @Version: V1.0
 * @Description:
 */
import { configureStore } from "@reduxjs/toolkit";

// 导入 counter reducer
import counterReducer from "./counterSlice";

// 配置 Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// 定义 RootState 和 AppDispatch 类型，以便在整个应用中使用
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
