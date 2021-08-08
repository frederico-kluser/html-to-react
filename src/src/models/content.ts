// this file contains types for the Content layer

export type IMedia = {
  imageUrl: string | null;
  videoUrl: string | null;
  text: string | null;
  content: string | null;
  href: string | null;
  order: number;
};

export type IBanner = {
  bannerId: number;
  type: number;
  medias: IMedia[];
};

export type IShelf = {
  shelfId: number;
  type: number;
  collection: {
    collectionId: number;
    collectionType: {
      id: number;
      description: string;
    };
    skus: number[];
  };
};

export type ISection = {
  id?: string;
  content: string | null;
  banners: IBanner[] | null;
  shelf: IShelf[] | null;
};

type INavigation = {
  id: string | number;
  text: string;
  url: string;
  children: INavigation[] | null;
};

type IPageLink = {
  id: string | number;
  text: string;
  url: string;
};

type ICompanyContactData = {
  storeName: string;
  street: string;
  zipCode: string;
  city: string;
  state: string;
};

type IFilterPrice = {
  priceMin: number;
  priceMax: number;
  skusCount: number;
};

type IFilterBrand = {
  brandId: number;
  name: string;
  skusCount: number;
};

type IFilterCategory = {
  categoryId: number;
  name: string;
  parent: {
    categoryId: number;
    name: string;
  };
  children: IFilterCategory[];
  skusCount: number;
};

type IFilterDiscount = {
  discountMin: number;
  discountMax: number;
  skusCount: number;
};

type IFilterAttributeValue = {
  attributeValueId: number;
  attributeValue: string;
  skusCount: number;
};

type IFilterAttribute = {
  attributeId: number;
  attributeName: string;
  attributeValues: IFilterAttributeValue[];
};

type IFilters = {
  prices: IFilterPrice[];
  brands: IFilterBrand[];
  categories: IFilterCategory[];
  discounts: IFilterDiscount[];
  attributes: IFilterAttribute[];
};

export type IPageContent = {
  pageId: number | string | null;
  pageName: string;
  title: string | null;
  breadcrumb: string | null;
  sections: ISection[] | null;
  navigation: INavigation[] | null;
  links: IPageLink[] | null;
  'company-contact-data': ICompanyContactData | null;
  products: number[] | null;
  filters: IFilters | null;
  recordsReturned: number | null;
  totalRecords: number | null;
  // Customizations are not fully defined yet
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customizations?: any;
};
