/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      orders {
        items {
          id
          createAt
          type
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          userId
          carId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        email
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
      name
      type
      latitude
      longitude
      heading
      orders {
        items {
          id
          createAt
          type
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          userId
          carId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCars = /* GraphQL */ `
  query ListCars(
    $id: ID
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCars(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        type
        latitude
        longitude
        heading
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      createAt
      type
      originLatitude
      originLongitude
      destinationLatitude
      destinationLongitude
      userId
      user {
        id
        name
        email
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      carId
      car {
        id
        name
        type
        latitude
        longitude
        heading
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $id: ID
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        createAt
        type
        originLatitude
        originLongitude
        destinationLatitude
        destinationLongitude
        userId
        user {
          id
          name
          email
          createdAt
          updatedAt
          __typename
        }
        carId
        car {
          id
          name
          type
          latitude
          longitude
          heading
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByUserId = /* GraphQL */ `
  query OrdersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createAt
        type
        originLatitude
        originLongitude
        destinationLatitude
        destinationLongitude
        userId
        user {
          id
          name
          email
          createdAt
          updatedAt
          __typename
        }
        carId
        car {
          id
          name
          type
          latitude
          longitude
          heading
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByCarId = /* GraphQL */ `
  query OrdersByCarId(
    $carId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByCarId(
      carId: $carId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createAt
        type
        originLatitude
        originLongitude
        destinationLatitude
        destinationLongitude
        userId
        user {
          id
          name
          email
          createdAt
          updatedAt
          __typename
        }
        carId
        car {
          id
          name
          type
          latitude
          longitude
          heading
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
