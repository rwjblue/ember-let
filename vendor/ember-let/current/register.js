// Support for 2.15+
const { _registerMacros } = Ember.__loader.require('ember-glimmer/syntax');
const { compileExpression } = Ember.__loader.require('@glimmer/runtime');

_registerMacros(blocks => {
  blocks.add('let', (params, hash, _default, inverse, builder) => {
    compileExpression(params[0], builder);
    builder.invokeStatic(_default, 1);
  });
});
