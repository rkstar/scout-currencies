import React, { useState } from 'react';
import styled from 'styled-components';
import Main from './components/Main';
import Button from './components/Button';
import Table from './Table';

const App = styled.div`
  test-align: center;
  color: #212121;
`;

export default () => {
  const [requesting, setRequesting] = useState(false);
  const [slow, setSlowMode] = useState(false);
  const updateSlowMode = e => setSlowMode(e.target.value === 'true');

  return (
    <App>
      <select onChange={updateSlowMode}>
        <option value={false}>fast</option>
        <option value>slow</option>
      </select>
      <Main>
        {!requesting && (
          <Button onClick={() => setRequesting(true)}>load data</Button>
        )}
        {requesting && <Table slow={slow} />}
      </Main>
    </App>
  );
};
