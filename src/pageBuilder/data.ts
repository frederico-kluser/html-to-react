export type componentsType = {
  name: string;
  logo?: {
    src: string;
    width: number;
  };
};

interface dataInterface {
  componentDefaultConfig: {
    header: {
      logo: {
        src: string;
        width: number;
      };
      nav: Array<{
        background: string;
        borderBottom?: boolean;
        height: number;
      }>;
    };
  };
  pages: {
    [key: string]: {
      components: Array<componentsType>;
    };
  };
}

export const data: dataInterface = {
  componentDefaultConfig: {
    header: {
      logo: {
        src: './img/logos/armani.svg',
        width: 225
      },
      nav: [
        {
          background: 'lightgreen',
          borderBottom: true,
          height: 32
        },
        {
          background: 'lightcoral',
          height: 57
        }
      ]
    }
  },
  pages: {
    home: {
      components: [
        { name: 'header' },
        {
          name: 'header',
          logo: {
            src: './img/logos/armani.svg',
            width: 500
          }
        }
      ]
    },
    about: {
      components: [
        {
          name: 'header',
          logo: { src: './img/logos/ifc-logo.svg', width: 300 }
        }
      ]
    },
    card: {
      components: [{ name: 'header' }]
    },
    login: {
      components: [
        {
          name: 'header',
          logo: { src: './img/logos/armani.svg', width: 700 }
        }
      ]
    },
    info: {
      components: [
        { name: 'header' },
        {
          name: 'header',
          logo: { src: './img/logos/ifc-logo.svg', width: 300 }
        }
      ]
    }
  }
};

export default data;
