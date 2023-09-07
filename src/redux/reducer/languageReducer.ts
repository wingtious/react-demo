import i18n from 'i18next'
import { createSlice } from '@reduxjs/toolkit'

export interface LanguageState {
    language: string
    languageList: { value: string, label:string }[]
}

const defaultState: LanguageState = {
    language: 'zh',
    languageList: [
          { value: 'zh', label: '中文' },
          { value: 'en', label: 'English'},
          { value: 'vi', label: 'ไทย'  },
          { value: 'th', label: 'Tiếng Việt' },
    ],
}

const languageReducer = createSlice({
    name: 'language',
    initialState: defaultState,
    reducers: {
        changeLanguage: (state, action) => {
            const { type, payload } = action
            var lng =payload.val as string;
            i18n.changeLanguage(lng)
            return { ...state, language: lng }
          },
    }
})

export const {changeLanguage} = languageReducer.actions;
export default languageReducer.reducer;