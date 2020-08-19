import { useContext } from 'react';
import LocaleContext from './../../behavior/contexts/localeContext';
import * as locales from './../../resourses/locales';

export default function SimpleText({textKey}) {
    const locale = useContext(LocaleContext);
    const text = locales[locale][textKey];
    
    return text;
};