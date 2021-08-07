import { ISection } from '@/types/content';
import { resolveBanners } from './resolveBanners';
import { resolveShelves } from './resolveShelves';
import { resolveContent } from './resolveContent';

// Customizations are not fully defined yet
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const resolveSection = (section: ISection, customizations: any) => {
  const { content, banners, shelf } = section;
  const { banners: bannerCustomizations } = customizations;

  type ComponentMap = {
    [index: string]: JSX.Element | JSX.Element[] | null;
  };

  const components: ComponentMap = {
    content: content ? resolveContent(content) : null,
    banners: banners ? resolveBanners(banners, bannerCustomizations) : null,
    shelf: shelf ? resolveShelves(shelf) : null
  };

  // sorting back to original section order
  return Object.keys(section).map((item) => {
    const component = components[item];
    if (component) {
      return component;
    }
  });
};
