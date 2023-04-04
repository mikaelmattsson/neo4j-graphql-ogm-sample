import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { join } from 'path';

export function loadOGMTypeDefs() {
  const typesArray = loadFilesSync(join(__dirname, '../typeDefs/*.graphql'));
  return mergeTypeDefs(typesArray);
}
