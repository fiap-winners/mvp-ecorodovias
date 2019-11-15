import { db } from "../shared/firebase";

import { Option } from "../shared/types";

export default function createOccurrence(
  base: Option,
  weatherCondition: Option,
  weekDay: Option,
  dayPeriod: Option
) {
  db.collection("occurrences").add({
    base,
    weatherCondition,
    weekDay,
    dayPeriod
  });
}
