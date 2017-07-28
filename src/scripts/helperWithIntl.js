import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';

export const createComponentWithIntl = (children, props = { locale: 'en' }) => {
  return renderer.create(
    <IntlProvider {...props}>
      {children}
    </IntlProvider>
  );
};

export const componentWithIntl = (children, props = { locale: 'en' }) => {
  return (
    <IntlProvider {...props}>
      {children}
    </IntlProvider>
  );
};
