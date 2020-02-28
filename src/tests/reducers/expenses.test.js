import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("should add an expense", () => {
    const action = {
        type: "ADD_EXPENSE",
        expense: {
            id: "4",
            description: "Bass",
            note: "",
            amount: 200,
            createdAt: 22
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test("should edit an expense", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            description: "Bass Modified"
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(action.updates.description);
});

test("should edit an expense if expense not found", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates: {
            description: "Bass Modified"
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
