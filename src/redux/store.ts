
import { configureStore } from '@reduxjs/toolkit'
import languageReducer  from './reducer/languageReducer'
import loginReducer from './reducer/loginReducer'

const store = configureStore(
{
    //多个 reducer，访问数据时也需要通过多层获取
    //这里的名称，决定了获取数据时，需要访问的对象名称
    reducer: {
        language: languageReducer,
        login: loginReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store