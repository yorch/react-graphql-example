import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/graphql',
  documents: 'src/**/*.tsx',
  generates: {
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
    // './src/generated/gql/': {
    //   preset: 'client',
    //   plugins: [],
    // },
    './src/generated/types-and-hooks.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;
