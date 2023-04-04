
```sh
yarn install
yarn run seed
yarn run dev
```

You can now query your server. Try this:

```graphql
query Actors {
  actors {
    name
    movies (where: {
      title_CONTAINS: "Ultron"
    }) {
      title
    }
  }
}
```
