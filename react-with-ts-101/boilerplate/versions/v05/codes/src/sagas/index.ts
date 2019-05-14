import { all, take, race, delay, put } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import * as Actions from "../actions";

function* monitoringWorkflow() {
  while (true) {
    yield take(getType(Actions.startMonitoring));

    let polling = true;

    while (polling) {
      yield all([
        put({ type: getType(Actions.fetchSuccess) }),
        put({ type: getType(Actions.fetchFailure) })
      ]);

      const { stoped } = yield race({
        waitting: delay(200),
        stoped: take(getType(Actions.stopMonitoring))
      });

      if (stoped) {
        polling = false;
      }
    }
  }
}

export default function*() {
  yield monitoringWorkflow();
}
