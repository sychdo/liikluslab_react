import React from 'react';

import LocaleContext from './../../behavior/contexts/localeContext';
import localeService from '../../behavior/services/localeService';

export default function LocaleProvider({ routes: Routes, ...props }) {
  const { match, history, location } = props;
  const { locale: requestedLocale } = match.params;

  if (requestedLocale === undefined) {
    history.replace(`${location.pathname}${localeService.getLocale()}/`);
    return null;
  }

  if (!localeService.localeExists(requestedLocale)) {
    history.replace(`/${localeService.getLocale()}/404`);
    return null;
  }

  const locale = localeService.initLocale(requestedLocale);

  return (
    <LocaleContext.Provider value={locale}>
      <Routes {...props} />
    </LocaleContext.Provider>
  );
}
