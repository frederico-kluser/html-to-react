import { IPageContent } from '@/types/content';
import React from 'react';

const initialContext: IPageContent = {
  pageId: 0,
  pageName: '',
  title: '',
  breadcrumb: null,
  sections: null,
  navigation: null,
  links: null,
  'company-contact-data': null,
  products: null,
  filters: null,
  recordsReturned: null,
  totalRecords: null
};

export const PageContext = React.createContext(initialContext);
