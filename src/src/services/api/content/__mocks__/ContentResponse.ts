export const ContentResponse = {
  data: {
    pageId: 1,
    pageName: 'Home',
    title: null,
    breadcrumb: null,
    sections: [
      {
        content: '<h1 data-testid="heading-level-1-test">Teste</h1>',
        banners: [
          {
            bannerId: 2,
            type: 2,
            medias: [
              {
                imageUrl:
                  'https://m.media-amazon.com/images/I/61CiqVTRBEL._SX1500_.jpg',
                videoUrl: null,
                text: null,
                content: null,
                href: 'https://www.amazon.com/b/?_encoding=UTF8&node=23508887011&pf_rd_r=NGQQXRSZEX2BTSSXFMSE&pf_rd_p=b3367632-3703-47fc-9e4a-042ab9bd1208',
                order: 3
              },
              {
                imageUrl:
                  'https://m.media-amazon.com/images/I/61TD5JLGhIL._SX1500_.jpg',
                href: 'https://www.amazon.com/b/?_encoding=UTF8&node=16225007011&pf_rd_r=NGQQXRSZEX2BTSSXFMSE&pf_rd_p=da67e2af-3930-4aa9-9ced-7c541705ee2b',
                videoUrl: null,
                text: null,
                content: null,
                order: 1
              },
              {
                imageUrl:
                  'https://m.media-amazon.com/images/I/61jovjd+f9L._SX1500_.jpg',
                href: 'https://www.amazon.com/b/?_encoding=UTF8&node=16225015011&pf_rd_r=NGQQXRSZEX2BTSSXFMSE&pf_rd_p=466f6c10-383b-44c2-a942-4b0b7f6295c9',
                videoUrl: null,
                text: null,
                content: null,
                order: 2
              }
            ],
            order: 1
          },
          {
            bannerId: 1,
            type: 1,
            medias: [
              {
                imageUrl:
                  'https://m.media-amazon.com/images/I/61CiqVTRBEL._SX1500_.jpg',
                href: 'https://www.amazon.com/b/?_encoding=UTF8&node=23508887011&pf_rd_r=NMDG71DKN5XRWHGVWCQ6&pf_rd_p=b3367632-3703-47fc-9e4a-042ab9bd1208',
                videoUrl: null,
                text: null,
                content: null,
                order: 0
              }
            ],
            order: 0
          }
        ],
        shelf: [
          // {
          //   shelfId: 2,
          //   type: 2,
          //   collection: {
          //     collectionId: 100,
          //     collectionType: {
          //       id: 2,
          //       description: 'Mais Vendidos da Categoria'
          //     },
          //     skus: [1040, 5050, 474554, 654654, 8787]
          //   }
          // },
          // {
          //   shelfId: 3,
          //   type: 1,
          //   collection: {
          //     collectionId: 100,
          //     collectionType: {
          //       id: 3,
          //       description: 'Todos os produtos da categoria'
          //     },
          //     skus: [100, 5456, 231, 321, 564, 9875456]
          //   }
          // },
          // {
          //   shelfId: 4,
          //   type: 99999999,
          //   collection: {
          //     collectionId: 100,
          //     collectionType: {
          //       id: 3,
          //       description: 'Todos os produtos da categoria'
          //     },
          //     skus: [100, 5456, 231, 321, 564, 9875456]
          //   }
          // }
        ]
      },
      {
        content: null,
        banners: null,
        shelf: null
      }
    ],
    navigation: [
      {
        id: 'moveis',
        text: 'Móveis',
        url: 'https://m.casasbahia.com.br/moveis',
        children: [
          {
            text: 'Cama',
            url: 'https://m.casasbahia.com.br/cama/moveis',
            children: null
          }
        ]
      },
      {
        id: 'telefones-e-celulares',
        text: 'Telefones & Celulares',
        url: 'https//m.casasbahia.com.br/telefones-e-celulares',
        children: []
      }
    ],
    links: [
      {
        id: 'after-sale',
        text: 'Atendimento',
        url: 'https://meusite.com.br/atendimento'
      },
      {
        id: 'cart',
        text: 'Meu carrinho',
        url: 'https://meusite.com.br/cart'
      },
      {
        id: 'my-account',
        text: 'Minha Conta',
        url: 'https://meusite.com.br/account'
      },
      {
        id: 'wedding-list',
        text: 'Lista de casamento',
        url: 'https://meusite.com.br/wedding-list'
      },
      {
        id: 'orders',
        text: 'Meus Pedidos',
        url: 'https://account.meusite.com.br/orders'
      }
    ],
    'company-contact-data': {
      storeName: 'Giorgio Armany',
      street: 'Av. Magalhães de Castro, 12000',
      zipCode: '09362-325',
      city: 'São Paulo',
      state: 'SP'
    },
    products: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      23
    ],
    filters: {
      prices: [
        {
          priceMin: 1000,
          priceMax: 3000,
          skusCount: 1589
        },
        {
          priceMin: 3000,
          priceMax: 6500,
          skusCount: 2000
        }
      ],
      brands: [
        {
          brandId: 1,
          name: 'Apple',
          skusCount: 30
        }
      ],
      categories: [
        {
          categoryId: 100,
          name: 'Acessórios e Inovações',
          parent: {
            categoryId: 1,
            name: 'Celulares e Telefones'
          },
          children: [],
          skusCount: 3737
        },
        {
          categoryId: 100,
          name: 'Smartphones',
          parent: {
            categoryId: 1,
            name: 'Celulares e Telefones'
          },
          children: [],
          skusCount: 1157
        }
      ],
      discounts: [
        {
          discountMin: 1000,
          discountMax: 3000,
          skusCount: 10
        },
        {
          discountMin: 2000,
          discountMax: 6500,
          skusCount: 50
        }
      ],
      attributes: [
        {
          attributeId: 12,
          attributeName: 'Tamanho da tela',
          attributeValues: [
            {
              attributeValueId: 121,
              attributeValue: 'Acima de 6',
              skusCount: 58
            },
            {
              attributeValueId: 122,
              attributeValue: 'De 5.1 a 5.9',
              skusCount: 16
            }
          ]
        },
        {
          attributeId: 1,
          attributeName: 'Cor',
          attributeValues: [
            {
              attributeValueId: 300,
              attributeValue: 'Branco',
              skusCount: 47
            },
            {
              attributeValueId: 301,
              attributeValue: 'Preto',
              skusCount: 40
            }
          ]
        }
      ]
    },
    recordsReturned: 100,
    totalRecords: 15000
  }
};

export const heroBanner = {
  bannerId: 1,
  type: 1,
  medias: [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1572584642822-6f8de0243c93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=50',
      href: 'https://www.amazon.com/b/?_encoding=UTF8&node=23508887011&pf_rd_r=NMDG71DKN5XRWHGVWCQ6&pf_rd_p=b3367632-3703-47fc-9e4a-042ab9bd1208',
      videoUrl: null,
      text: null,
      content: null,
      order: 0
    }
  ],
  order: 0
};

export const carouselContent = {
  bannerId: 2,
  type: 2,
  medias: [
    {
      imageUrl: 'https://m.media-amazon.com/images/I/61CiqVTRBEL._SX1500_.jpg',
      videoUrl: null,
      text: null,
      content: null,
      href: 'https://www.amazon.com/b/?_encoding=UTF8&node=23508887011&pf_rd_r=NGQQXRSZEX2BTSSXFMSE&pf_rd_p=b3367632-3703-47fc-9e4a-042ab9bd1208',
      order: 0
    },
    {
      imageUrl: 'https://m.media-amazon.com/images/I/61TD5JLGhIL._SX1500_.jpg',
      href: 'https://www.amazon.com/b/?_encoding=UTF8&node=16225007011&pf_rd_r=NGQQXRSZEX2BTSSXFMSE&pf_rd_p=da67e2af-3930-4aa9-9ced-7c541705ee2b',
      videoUrl: null,
      text: null,
      content: null,
      order: 1
    },
    {
      imageUrl: 'https://m.media-amazon.com/images/I/61jovjd+f9L._SX1500_.jpg',
      href: 'https://www.amazon.com/b/?_encoding=UTF8&node=16225015011&pf_rd_r=NGQQXRSZEX2BTSSXFMSE&pf_rd_p=466f6c10-383b-44c2-a942-4b0b7f6295c9',
      videoUrl: null,
      text: null,
      content: null,
      order: 1
    }
  ],
  order: 1
};

export const carouselContentNoImage = {
  bannerId: 2,
  type: 2,
  medias: [
    {
      imageUrl: null,
      videoUrl: null,
      text: null,
      content: null,
      href: 'https://www.amazon.com/b/?_encoding=UTF8&node=23508887011&pf_rd_r=NGQQXRSZEX2BTSSXFMSE&pf_rd_p=b3367632-3703-47fc-9e4a-042ab9bd1208',
      order: 0
    }
  ],
  order: 1
};

export const carouselContentWithoutHref = {
  bannerId: 2,
  type: 2,
  medias: [
    {
      imageUrl: 'https://m.media-amazon.com/images/I/61jovjd+f9L._SX1500_.jpg',
      videoUrl: null,
      text: null,
      content: null,
      href: null,
      order: 0
    }
  ],
  order: 1
};
