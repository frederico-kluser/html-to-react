export const bannerCarousel = {
  bannerId: 2,
  type: 2,
  medias: [
    {
      imageUrl: 'https://m.media-amazon.com/images/I/61CiqVTRBEL._SX1500_.jpg',
      videoUrl: null,
      text: null,
      content: null,
      href: 'https://www.amazon.com/b/?_encoding=UTF8&node=23508887011&pf_rd_r=NGQQXRSZEX2BTSSXFMSE&pf_rd_p=b3367632-3703-47fc-9e4a-042ab9bd1208',
      order: 3
    },
    {
      imageUrl: 'https://m.media-amazon.com/images/I/61TD5JLGhIL._SX1500_.jpg',
      href: 'https://www.amazon.com/b/?_encoding=UTF8&node=16225007011&pf_rd_r=NGQQXRSZEX2BTSSXFMSE&pf_rd_p=da67e2af-3930-4aa9-9ced-7c541705ee2b',
      videoUrl: null,
      text: null,
      content: null,
      order: 1
    }
  ],
  order: 1
};

export const bannerCarouselWithoutHref = {
  bannerId: 2,
  type: 2,
  medias: [
    {
      imageUrl: 'https://m.media-amazon.com/images/I/61CiqVTRBEL._SX1500_.jpg',
      videoUrl: null,
      text: null,
      content: null,
      href: null,
      order: 3
    }
  ],
  order: 1
};

export const bannerCarouselWithoutImage = {
  bannerId: 2,
  type: 2,
  medias: [
    {
      imageUrl: null,
      videoUrl: null,
      text: null,
      content: null,
      href: 'https://www.amazon.com/b/?_encoding=UTF8&node=23508887011&pf_rd_r=NGQQXRSZEX2BTSSXFMSE&pf_rd_p=b3367632-3703-47fc-9e4a-042ab9bd1208',
      order: 1
    }
  ],
  order: 1
};
