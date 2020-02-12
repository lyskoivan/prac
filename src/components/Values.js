import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/budgetApp/budgetAppActions';
import styled from 'styled-components';
import Value from './Value';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const calculateTotalExpenses = expenses => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

const calculateBalance = (budget, expenses) => budget - expenses;

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
  budget: store.budgetApp.budget,
  expenses: calculateTotalExpenses(store.budgetApp.expense),
  balance: calculateBalance(
    store.budgetApp.budget,
    calculateTotalExpenses(store.budgetApp.expense),
  ),
});

export default connect(mapStateToProps, null)(Values);
