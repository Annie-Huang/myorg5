module.exports = {
  name: 'ui-greeter',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-greeter',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
