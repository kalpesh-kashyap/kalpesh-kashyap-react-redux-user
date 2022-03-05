import {
    all,
    call,
    delay,
    put,
    select,
    takeLatest,
    takeLeading,
} from "redux-saga/effects";
import {getUsersApi} from "../../api";
import * as actions from "../actions/users";

function* getUsers() {
    try {
        const users = yield getUsersApi();
        yield put(actions.setUserProps({users}));
    } catch (error) {
        console.error(error);
    }
}

export default function* saga() {
    yield all([
        takeLatest(actions.Types.FETCH_USERS, getUsers),
    ]);
}
