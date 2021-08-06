const checkProperty = (obj: Object, propertyRules: Object): boolean => {
  let findProperty = true;

  Object.keys(propertyRules).forEach((rule) => {
    if (obj[rule] !== propertyRules[rule]) {
      findProperty = false;
    }
  });

  return findProperty;
};

const getSpecificProperty = (obj: Object, propertyRules: Object) => {
  const object = obj;
  const stack = [object];
  let result = null;
  let index = 0;

  while (index < stack.length) {
    const element = stack[index];
    if (result === null) {
      const { child }: any = element;
      result = checkProperty(element, propertyRules) ? element : null;
      if (child !== undefined) {
        child.forEach((childElement) => {
          stack.push(childElement);
        });
      }
    }
    index += 1;
  }

  return result;
};

module.exports = {
  checkProperty,
  getSpecificProperty,
};
