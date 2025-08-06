"use client";

import { ReactNode } from "react";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

const httpLink: any = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_MAIN_API_DOMAIN}/graphql`,
  credentials: "include",
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem("token") || "";

  return {
    headers: {
      ...headers,
      "Access-Control-Allow-Origin": (
        process.env.NEXT_PUBLIC_MAIN_API_DOMAIN || ""
      ).replace("/gateway", ""),
      "erxes-app-token": process.env.NEXT_PUBLIC_APP_TOKEN,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const wsLink: any =
  typeof window !== "undefined"
    ? new GraphQLWsLink(
      createClient({
        url: process.env.NEXT_PUBLIC_MAIN_SUBS_DOMAIN || "",
      })
    )
    : null;

const httpLinkWithMiddleware = authLink.concat(httpLink);

type Definintion = {
  kind: string;
  operation?: string;
};
const splitLink =
  typeof window !== "undefined"
    ? split(
      ({ query }) => {
        const { kind, operation }: Definintion = getMainDefinition(query);
        return kind === "OperationDefinition" && operation === "subscription";
      },
      wsLink,
      httpLinkWithMiddleware
    )
    : httpLinkWithMiddleware;

export const client = new ApolloClient({
  ssrMode: typeof window !== "undefined",
  cache: new InMemoryCache(),
  link: splitLink,
});

export function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}

const Apollo = ({ children }: { children: ReactNode }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Apollo;
