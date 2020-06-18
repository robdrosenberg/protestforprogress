import React from "react"
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'


const GET_PROTESTS_QUERY = gql`query {
  protestsList {
    items {
      name
      date
      time
      details
      location {
        city
        country
        state
        street1
        street2
        zip
      }
    }
  }
}`

const Protests = ({ protests }) => {
  return protests.length ? (
    <div>
      {protests.map((protest) =>
        <li>
          <h1>{protest.name}</h1>
          <p>{protest.date} at {protest.time}</p>
        </li>
      )}
    </div>
  ) : (
      <p>Loading</p>
    )
}

export default graphql(GET_PROTESTS_QUERY, {
  props: result => {
    const { loading, data } = result;
    let items = [];
    if (data && data.protestsList) items = data.protestsList.items;
    return {
      loading,
      protests: items
    }
  }
})(Protests)