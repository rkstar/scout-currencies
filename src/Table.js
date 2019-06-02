import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import Spinner from './components/Spinner';
import Error from './components/Error';
import { Grid, Code, Rate } from './Table.styles';

const GET_DATA = loader('./api/queries/getData.graphql');

export default ({ slow, showError }) => {
  const { data, loading, refetch, error } = useQuery(GET_DATA, {
    variables: { slow, error: showError },
  });

  const onClick = base => () => refetch({ slow, error: showError, base });

  return loading ? (
    <Spinner />
  ) : error ? (
    <Error>{error.message}</Error>
  ) : (
    <Grid>
      <Code>{data.getData.base}</Code>
      <Rate>1</Rate>
      {Object.entries(data.getData.rates).map(([code, rate]) => (
        <React.Fragment key={code}>
          <Code onClick={onClick(code)}>{code}</Code>
          <Rate onClick={onClick(code)}>{rate}</Rate>
        </React.Fragment>
      ))}
    </Grid>
  );
};
