import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
};

export type Query = {
  __typename?: "Query";
  actors: Array<Actor>;
  actorsAggregate: ActorAggregateSelection;
  actorsConnection: ActorsConnection;
  movies: Array<Movie>;
  moviesAggregate: MovieAggregateSelection;
  moviesConnection: MoviesConnection;
};

export type QueryActorsArgs = {
  where?: InputMaybe<ActorWhere>;
  options?: InputMaybe<ActorOptions>;
};

export type QueryActorsAggregateArgs = {
  where?: InputMaybe<ActorWhere>;
};

export type QueryActorsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ActorWhere>;
  sort?: InputMaybe<Array<InputMaybe<ActorSort>>>;
};

export type QueryMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  options?: InputMaybe<MovieOptions>;
};

export type QueryMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
};

export type QueryMoviesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<MovieWhere>;
  sort?: InputMaybe<Array<InputMaybe<MovieSort>>>;
};

export type Mutation = {
  __typename?: "Mutation";
  createActors: CreateActorsMutationResponse;
  deleteActors: DeleteInfo;
  updateActors: UpdateActorsMutationResponse;
  createMovies: CreateMoviesMutationResponse;
  deleteMovies: DeleteInfo;
  updateMovies: UpdateMoviesMutationResponse;
};

export type MutationCreateActorsArgs = {
  input: Array<ActorCreateInput>;
};

export type MutationDeleteActorsArgs = {
  where?: InputMaybe<ActorWhere>;
  delete?: InputMaybe<ActorDeleteInput>;
};

export type MutationUpdateActorsArgs = {
  where?: InputMaybe<ActorWhere>;
  update?: InputMaybe<ActorUpdateInput>;
  connect?: InputMaybe<ActorConnectInput>;
  disconnect?: InputMaybe<ActorDisconnectInput>;
  create?: InputMaybe<ActorRelationInput>;
  delete?: InputMaybe<ActorDeleteInput>;
  connectOrCreate?: InputMaybe<ActorConnectOrCreateInput>;
};

export type MutationCreateMoviesArgs = {
  input: Array<MovieCreateInput>;
};

export type MutationDeleteMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  delete?: InputMaybe<MovieDeleteInput>;
};

export type MutationUpdateMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  update?: InputMaybe<MovieUpdateInput>;
  connect?: InputMaybe<MovieConnectInput>;
  disconnect?: InputMaybe<MovieDisconnectInput>;
  create?: InputMaybe<MovieRelationInput>;
  delete?: InputMaybe<MovieDeleteInput>;
  connectOrCreate?: InputMaybe<MovieConnectOrCreateInput>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type Actor = {
  __typename?: "Actor";
  id: Scalars["ID"];
  name: Scalars["String"];
  movies: Array<Movie>;
  moviesAggregate?: Maybe<ActorMovieMoviesAggregationSelection>;
  moviesConnection: ActorMoviesConnection;
};

export type ActorMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
  options?: InputMaybe<MovieOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type ActorMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type ActorMoviesConnectionArgs = {
  where?: InputMaybe<ActorMoviesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<ActorMoviesConnectionSort>>;
};

export type ActorAggregateSelection = {
  __typename?: "ActorAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ActorEdge = {
  __typename?: "ActorEdge";
  cursor: Scalars["String"];
  node: Actor;
};

export type ActorMovieMoviesAggregationSelection = {
  __typename?: "ActorMovieMoviesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<ActorMovieMoviesNodeAggregateSelection>;
};

export type ActorMovieMoviesNodeAggregateSelection = {
  __typename?: "ActorMovieMoviesNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
};

export type ActorMoviesConnection = {
  __typename?: "ActorMoviesConnection";
  edges: Array<ActorMoviesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type ActorMoviesRelationship = {
  __typename?: "ActorMoviesRelationship";
  cursor: Scalars["String"];
  node: Movie;
};

export type ActorsConnection = {
  __typename?: "ActorsConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<ActorEdge>;
};

export type CreateActorsMutationResponse = {
  __typename?: "CreateActorsMutationResponse";
  info: CreateInfo;
  actors: Array<Actor>;
};

export type CreateInfo = {
  __typename?: "CreateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
};

export type CreateMoviesMutationResponse = {
  __typename?: "CreateMoviesMutationResponse";
  info: CreateInfo;
  movies: Array<Movie>;
};

export type DeleteInfo = {
  __typename?: "DeleteInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesDeleted: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: "IDAggregateSelectionNonNullable";
  shortest: Scalars["ID"];
  longest: Scalars["ID"];
};

export type Movie = {
  __typename?: "Movie";
  id: Scalars["ID"];
  title: Scalars["String"];
  actors: Array<Actor>;
  actorsAggregate?: Maybe<MovieActorActorsAggregationSelection>;
  actorsConnection: MovieActorsConnection;
};

export type MovieActorsArgs = {
  where?: InputMaybe<ActorWhere>;
  options?: InputMaybe<ActorOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type MovieActorsAggregateArgs = {
  where?: InputMaybe<ActorWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type MovieActorsConnectionArgs = {
  where?: InputMaybe<MovieActorsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<MovieActorsConnectionSort>>;
};

export type MovieActorActorsAggregationSelection = {
  __typename?: "MovieActorActorsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<MovieActorActorsNodeAggregateSelection>;
};

export type MovieActorActorsNodeAggregateSelection = {
  __typename?: "MovieActorActorsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type MovieActorsConnection = {
  __typename?: "MovieActorsConnection";
  edges: Array<MovieActorsRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type MovieActorsRelationship = {
  __typename?: "MovieActorsRelationship";
  cursor: Scalars["String"];
  node: Actor;
};

export type MovieAggregateSelection = {
  __typename?: "MovieAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
};

export type MovieEdge = {
  __typename?: "MovieEdge";
  cursor: Scalars["String"];
  node: Movie;
};

export type MoviesConnection = {
  __typename?: "MoviesConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<MovieEdge>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

export type StringAggregateSelectionNonNullable = {
  __typename?: "StringAggregateSelectionNonNullable";
  shortest: Scalars["String"];
  longest: Scalars["String"];
};

export type UpdateActorsMutationResponse = {
  __typename?: "UpdateActorsMutationResponse";
  info: UpdateInfo;
  actors: Array<Actor>;
};

export type UpdateInfo = {
  __typename?: "UpdateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  nodesDeleted: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type UpdateMoviesMutationResponse = {
  __typename?: "UpdateMoviesMutationResponse";
  info: UpdateInfo;
  movies: Array<Movie>;
};

export type ActorConnectInput = {
  movies?: InputMaybe<Array<ActorMoviesConnectFieldInput>>;
};

export type ActorConnectOrCreateInput = {
  movies?: InputMaybe<Array<ActorMoviesConnectOrCreateFieldInput>>;
};

export type ActorConnectOrCreateWhere = {
  node: ActorUniqueWhere;
};

export type ActorConnectWhere = {
  node: ActorWhere;
};

export type ActorCreateInput = {
  name: Scalars["String"];
  movies?: InputMaybe<ActorMoviesFieldInput>;
};

export type ActorDeleteInput = {
  movies?: InputMaybe<Array<ActorMoviesDeleteFieldInput>>;
};

export type ActorDisconnectInput = {
  movies?: InputMaybe<Array<ActorMoviesDisconnectFieldInput>>;
};

export type ActorMoviesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<ActorMoviesAggregateInput>>;
  OR?: InputMaybe<Array<ActorMoviesAggregateInput>>;
  NOT?: InputMaybe<ActorMoviesAggregateInput>;
  node?: InputMaybe<ActorMoviesNodeAggregationWhereInput>;
};

export type ActorMoviesConnectFieldInput = {
  where?: InputMaybe<MovieConnectWhere>;
  connect?: InputMaybe<Array<MovieConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type ActorMoviesConnectionSort = {
  node?: InputMaybe<MovieSort>;
};

export type ActorMoviesConnectionWhere = {
  AND?: InputMaybe<Array<ActorMoviesConnectionWhere>>;
  OR?: InputMaybe<Array<ActorMoviesConnectionWhere>>;
  NOT?: InputMaybe<ActorMoviesConnectionWhere>;
  node?: InputMaybe<MovieWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MovieWhere>;
};

export type ActorMoviesConnectOrCreateFieldInput = {
  where: MovieConnectOrCreateWhere;
  onCreate: ActorMoviesConnectOrCreateFieldInputOnCreate;
};

export type ActorMoviesConnectOrCreateFieldInputOnCreate = {
  node: MovieOnCreateInput;
};

export type ActorMoviesCreateFieldInput = {
  node: MovieCreateInput;
};

export type ActorMoviesDeleteFieldInput = {
  where?: InputMaybe<ActorMoviesConnectionWhere>;
  delete?: InputMaybe<MovieDeleteInput>;
};

export type ActorMoviesDisconnectFieldInput = {
  where?: InputMaybe<ActorMoviesConnectionWhere>;
  disconnect?: InputMaybe<MovieDisconnectInput>;
};

export type ActorMoviesFieldInput = {
  create?: InputMaybe<Array<ActorMoviesCreateFieldInput>>;
  connect?: InputMaybe<Array<ActorMoviesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ActorMoviesConnectOrCreateFieldInput>>;
};

export type ActorMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ActorMoviesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ActorMoviesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ActorMoviesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  title_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
};

export type ActorMoviesUpdateConnectionInput = {
  node?: InputMaybe<MovieUpdateInput>;
};

export type ActorMoviesUpdateFieldInput = {
  where?: InputMaybe<ActorMoviesConnectionWhere>;
  update?: InputMaybe<ActorMoviesUpdateConnectionInput>;
  connect?: InputMaybe<Array<ActorMoviesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<ActorMoviesDisconnectFieldInput>>;
  create?: InputMaybe<Array<ActorMoviesCreateFieldInput>>;
  delete?: InputMaybe<Array<ActorMoviesDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ActorMoviesConnectOrCreateFieldInput>>;
};

export type ActorOnCreateInput = {
  name: Scalars["String"];
};

export type ActorOptions = {
  /** Specify one or more ActorSort objects to sort Actors by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ActorSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type ActorRelationInput = {
  movies?: InputMaybe<Array<ActorMoviesCreateFieldInput>>;
};

/** Fields to sort Actors by. The order in which sorts are applied is not guaranteed when specifying many fields in one ActorSort object. */
export type ActorSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type ActorUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type ActorUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  movies?: InputMaybe<Array<ActorMoviesUpdateFieldInput>>;
};

export type ActorWhere = {
  OR?: InputMaybe<Array<ActorWhere>>;
  AND?: InputMaybe<Array<ActorWhere>>;
  NOT?: InputMaybe<ActorWhere>;
  id?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Use `movies_SOME` instead. */
  movies?: InputMaybe<MovieWhere>;
  /** @deprecated Use `movies_NONE` instead. */
  movies_NOT?: InputMaybe<MovieWhere>;
  moviesAggregate?: InputMaybe<ActorMoviesAggregateInput>;
  /** Return Actors where all of the related Movies match this filter */
  movies_ALL?: InputMaybe<MovieWhere>;
  /** Return Actors where none of the related Movies match this filter */
  movies_NONE?: InputMaybe<MovieWhere>;
  /** Return Actors where one of the related Movies match this filter */
  movies_SINGLE?: InputMaybe<MovieWhere>;
  /** Return Actors where some of the related Movies match this filter */
  movies_SOME?: InputMaybe<MovieWhere>;
  /** @deprecated Use `moviesConnection_SOME` instead. */
  moviesConnection?: InputMaybe<ActorMoviesConnectionWhere>;
  /** @deprecated Use `moviesConnection_NONE` instead. */
  moviesConnection_NOT?: InputMaybe<ActorMoviesConnectionWhere>;
  /** Return Actors where all of the related ActorMoviesConnections match this filter */
  moviesConnection_ALL?: InputMaybe<ActorMoviesConnectionWhere>;
  /** Return Actors where none of the related ActorMoviesConnections match this filter */
  moviesConnection_NONE?: InputMaybe<ActorMoviesConnectionWhere>;
  /** Return Actors where one of the related ActorMoviesConnections match this filter */
  moviesConnection_SINGLE?: InputMaybe<ActorMoviesConnectionWhere>;
  /** Return Actors where some of the related ActorMoviesConnections match this filter */
  moviesConnection_SOME?: InputMaybe<ActorMoviesConnectionWhere>;
};

export type MovieActorsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<MovieActorsAggregateInput>>;
  OR?: InputMaybe<Array<MovieActorsAggregateInput>>;
  NOT?: InputMaybe<MovieActorsAggregateInput>;
  node?: InputMaybe<MovieActorsNodeAggregationWhereInput>;
};

export type MovieActorsConnectFieldInput = {
  where?: InputMaybe<ActorConnectWhere>;
  connect?: InputMaybe<Array<ActorConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars["Boolean"];
};

export type MovieActorsConnectionSort = {
  node?: InputMaybe<ActorSort>;
};

export type MovieActorsConnectionWhere = {
  AND?: InputMaybe<Array<MovieActorsConnectionWhere>>;
  OR?: InputMaybe<Array<MovieActorsConnectionWhere>>;
  NOT?: InputMaybe<MovieActorsConnectionWhere>;
  node?: InputMaybe<ActorWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ActorWhere>;
};

export type MovieActorsConnectOrCreateFieldInput = {
  where: ActorConnectOrCreateWhere;
  onCreate: MovieActorsConnectOrCreateFieldInputOnCreate;
};

export type MovieActorsConnectOrCreateFieldInputOnCreate = {
  node: ActorOnCreateInput;
};

export type MovieActorsCreateFieldInput = {
  node: ActorCreateInput;
};

export type MovieActorsDeleteFieldInput = {
  where?: InputMaybe<MovieActorsConnectionWhere>;
  delete?: InputMaybe<ActorDeleteInput>;
};

export type MovieActorsDisconnectFieldInput = {
  where?: InputMaybe<MovieActorsConnectionWhere>;
  disconnect?: InputMaybe<ActorDisconnectInput>;
};

export type MovieActorsFieldInput = {
  create?: InputMaybe<Array<MovieActorsCreateFieldInput>>;
  connect?: InputMaybe<Array<MovieActorsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MovieActorsConnectOrCreateFieldInput>>;
};

export type MovieActorsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MovieActorsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MovieActorsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MovieActorsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]>;
};

export type MovieActorsUpdateConnectionInput = {
  node?: InputMaybe<ActorUpdateInput>;
};

export type MovieActorsUpdateFieldInput = {
  where?: InputMaybe<MovieActorsConnectionWhere>;
  update?: InputMaybe<MovieActorsUpdateConnectionInput>;
  connect?: InputMaybe<Array<MovieActorsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<MovieActorsDisconnectFieldInput>>;
  create?: InputMaybe<Array<MovieActorsCreateFieldInput>>;
  delete?: InputMaybe<Array<MovieActorsDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MovieActorsConnectOrCreateFieldInput>>;
};

export type MovieConnectInput = {
  actors?: InputMaybe<Array<MovieActorsConnectFieldInput>>;
};

export type MovieConnectOrCreateInput = {
  actors?: InputMaybe<Array<MovieActorsConnectOrCreateFieldInput>>;
};

export type MovieConnectOrCreateWhere = {
  node: MovieUniqueWhere;
};

export type MovieConnectWhere = {
  node: MovieWhere;
};

export type MovieCreateInput = {
  title: Scalars["String"];
  actors?: InputMaybe<MovieActorsFieldInput>;
};

export type MovieDeleteInput = {
  actors?: InputMaybe<Array<MovieActorsDeleteFieldInput>>;
};

export type MovieDisconnectInput = {
  actors?: InputMaybe<Array<MovieActorsDisconnectFieldInput>>;
};

export type MovieOnCreateInput = {
  title: Scalars["String"];
};

export type MovieOptions = {
  /** Specify one or more MovieSort objects to sort Movies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MovieSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type MovieRelationInput = {
  actors?: InputMaybe<Array<MovieActorsCreateFieldInput>>;
};

/** Fields to sort Movies by. The order in which sorts are applied is not guaranteed when specifying many fields in one MovieSort object. */
export type MovieSort = {
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
};

export type MovieUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MovieUpdateInput = {
  title?: InputMaybe<Scalars["String"]>;
  actors?: InputMaybe<Array<MovieActorsUpdateFieldInput>>;
};

export type MovieWhere = {
  OR?: InputMaybe<Array<MovieWhere>>;
  AND?: InputMaybe<Array<MovieWhere>>;
  NOT?: InputMaybe<MovieWhere>;
  id?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT?: InputMaybe<Scalars["String"]>;
  title_IN?: InputMaybe<Array<Scalars["String"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  /** @deprecated Use `actors_SOME` instead. */
  actors?: InputMaybe<ActorWhere>;
  /** @deprecated Use `actors_NONE` instead. */
  actors_NOT?: InputMaybe<ActorWhere>;
  actorsAggregate?: InputMaybe<MovieActorsAggregateInput>;
  /** Return Movies where all of the related Actors match this filter */
  actors_ALL?: InputMaybe<ActorWhere>;
  /** Return Movies where none of the related Actors match this filter */
  actors_NONE?: InputMaybe<ActorWhere>;
  /** Return Movies where one of the related Actors match this filter */
  actors_SINGLE?: InputMaybe<ActorWhere>;
  /** Return Movies where some of the related Actors match this filter */
  actors_SOME?: InputMaybe<ActorWhere>;
  /** @deprecated Use `actorsConnection_SOME` instead. */
  actorsConnection?: InputMaybe<MovieActorsConnectionWhere>;
  /** @deprecated Use `actorsConnection_NONE` instead. */
  actorsConnection_NOT?: InputMaybe<MovieActorsConnectionWhere>;
  /** Return Movies where all of the related MovieActorsConnections match this filter */
  actorsConnection_ALL?: InputMaybe<MovieActorsConnectionWhere>;
  /** Return Movies where none of the related MovieActorsConnections match this filter */
  actorsConnection_NONE?: InputMaybe<MovieActorsConnectionWhere>;
  /** Return Movies where one of the related MovieActorsConnections match this filter */
  actorsConnection_SINGLE?: InputMaybe<MovieActorsConnectionWhere>;
  /** Return Movies where some of the related MovieActorsConnections match this filter */
  actorsConnection_SOME?: InputMaybe<MovieActorsConnectionWhere>;
};

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface ActorAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  name?: StringAggregateInputNonNullable;
}

export declare class ActorModel {
  public find(args?: {
    where?: ActorWhere;

    options?: ActorOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Actor[]>;
  public create(args: {
    input: ActorCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateActorsMutationResponse>;
  public update(args: {
    where?: ActorWhere;
    update?: ActorUpdateInput;
    connect?: ActorConnectInput;
    disconnect?: ActorDisconnectInput;
    create?: ActorCreateInput;
    connectOrCreate?: ActorConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateActorsMutationResponse>;
  public delete(args: {
    where?: ActorWhere;
    delete?: ActorDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: ActorWhere;

    aggregate: ActorAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<ActorAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface MovieAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  title?: StringAggregateInputNonNullable;
}

export declare class MovieModel {
  public find(args?: {
    where?: MovieWhere;

    options?: MovieOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Movie[]>;
  public create(args: {
    input: MovieCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateMoviesMutationResponse>;
  public update(args: {
    where?: MovieWhere;
    update?: MovieUpdateInput;
    connect?: MovieConnectInput;
    disconnect?: MovieDisconnectInput;
    create?: MovieCreateInput;
    connectOrCreate?: MovieConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateMoviesMutationResponse>;
  public delete(args: {
    where?: MovieWhere;
    delete?: MovieDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: MovieWhere;

    aggregate: MovieAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<MovieAggregateSelection>;
}

export interface ModelMap {
  Actor: ActorModel;
  Movie: MovieModel;
}
