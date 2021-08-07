import React from 'react';
import { GetServerSideProps } from 'next';

import { fetchPageContent } from '../services/api/content';
import { resolveSection } from '../services/componentResolver';
import { PageContext } from '../contexts/PageContext';
import { IPageContent } from '../models/content';
import { fetchPageCustomization } from '../services/api/customizations';

const Home = (data: IPageContent) => {
  const { sections, customizations } = data;

  return (
    <PageContext.Provider value={data}>
      {/* Header will be rendered here */}
      {sections &&
        sections.map((section) => resolveSection(section, customizations))}
      {/* Footer will be rendered here */}
    </PageContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const PAGE_NAME = 'home';
  const { data } = await fetchPageContent(PAGE_NAME);
  const customizations = await fetchPageCustomization(PAGE_NAME);
  return { props: { ...data, customizations } };
};

export default Home;
