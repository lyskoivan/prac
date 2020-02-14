import React from 'react';
import { connect } from 'react-redux';

import {
  getBudget,
  getTotalExpenses,
  calculateBalance,
} from '../redux/budgetApp/budgetAppSelectors';

import styled from 'styled-components';
import Value from './Value';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => {
  return (
    <Container>
      <Value label="Budget" value={budget} isPositive />
      <Value label="Expenses" value={expenses} />
      <Value label="Balance" value={balance} isPositive={balance >= 0} />
    </Container>
  );
};

const mapStateToProps = store => ({
  budget: getBudget(store),
  expenses: getTotalExpenses(store),
  balance: calculateBalance(store),
});

export default connect(mapStateToProps, null)(Values);
