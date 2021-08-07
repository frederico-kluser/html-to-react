import Header from '@components/header';
import data, { componentsType } from './data';

const allComponents: any = {
  header: Header
};

const PageBuilder = (pageName: string) => {
  const { components } = data.pages[pageName];
  const { componentDefaultConfig }: any = data;
  return (
    <>
      {components.map((item: componentsType, index: number) => {
        const { name } = item;
        const setup = { ...componentDefaultConfig[name], key: index, ...item };
        return allComponents[name](setup);
      })}
    </>
  );
};

export default PageBuilder;
