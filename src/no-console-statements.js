module.exports = function ({ types: t }) {
  return {
    visitor: {
      CallExpression(path) {
        const callee = path.get('callee');
        object = callee.get('object');
        if (object.isIdentifier({ name: 'console' })) {
          path.remove();
        }
      },
    },
  };
};
