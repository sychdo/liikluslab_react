import localeService from './../services/localeService';
import { createContext } from 'react';

const LocaleContext = createContext(localeService);

export default LocaleContext;
