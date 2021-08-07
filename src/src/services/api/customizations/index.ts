export const fetchPageCustomization = async (page = 'home') => {
  // Todo obter dinamicamente a url do server
  const server = 'http://localhost:3000';
  const res = await fetch(`${server}/api/customizations?page=${page}`);

  return await res.json();
};
