import React from 'react';

/**
 *
 */
export const resolveContent = (content: string) => {
  return <div key="c1" dangerouslySetInnerHTML={{ __html: content }}></div>;
};
