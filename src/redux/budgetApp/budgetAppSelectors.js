export const getExpenses = store => store.budgetApp.expense;

export const getBudget = store => store.budgetApp.budget;

export const getTotalExpenses = store => {
  return getExpenses(store).reduce(
    (total, expense) => total + expense.amount,
    0,
  );
};

export const calculateBalance = store =>
  getBudget(store) - getTotalExpenses(store);
