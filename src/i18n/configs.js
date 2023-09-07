import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation_en from './en.json';
import translation_zh from './zh.json';
 
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";

const resources = {
    en: {
        translation: translation_en,
    },
    zh: {
        translation: translation_zh,
    },
    vi:{
        translation: translation_en,
    },
    th:{
        translation: translation_en,
    }
};
 
i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'zh',
    lng: 'zh',
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
});


export default i18n;