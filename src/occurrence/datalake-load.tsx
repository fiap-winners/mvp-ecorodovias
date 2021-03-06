import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import { firestore } from "firebase";

import { db, datalakeDoc } from "../shared/firebase";

export function generateAnalyticsIdsFromOccurrence({
  base,
  weatherCondition,
  weekDay,
  dayPeriod
}: firestore.DocumentData) {
  const data = [
    [base.id, weatherCondition.id, weekDay.id, dayPeriod.id],
    [base.id, weatherCondition.id, weekDay.id, 0],
    [base.id, weatherCondition.id, 0, dayPeriod.id],
    [base.id, weatherCondition.id, 0, 0],
    [base.id, 0, weekDay.id, dayPeriod.id],
    [base.id, 0, weekDay.id, 0],
    [base.id, 0, 0, dayPeriod.id],
    [base.id, 0, 0, 0],
    [0, weatherCondition.id, weekDay.id, dayPeriod.id],
    [0, weatherCondition.id, weekDay.id, 0],
    [0, weatherCondition.id, 0, dayPeriod.id],
    [0, weatherCondition.id, 0, 0],
    [0, 0, weekDay.id, dayPeriod.id],
    [0, 0, weekDay.id, 0],
    [0, 0, 0, dayPeriod.id],
    [0, 0, 0, 0]
  ];
  return data.map(arr => arr.join("_"));
}

export default function DatalakeLoad() {
  const onLoadDatalake = useCallback(() => {
    db.collection("occurrences")
      .limit(60)
      .get()
      .then((snapshots: firestore.QuerySnapshot) => {
        const tmpIds: { [key: string]: number } = {};
        snapshots.forEach((snapshot: firestore.QueryDocumentSnapshot) => {
          const occurrence = snapshot.data();
          const ids = generateAnalyticsIdsFromOccurrence(occurrence);
          ids.forEach((id: string) => {
            if (tmpIds[id]) {
              tmpIds[id] = tmpIds[id] + 1;
            } else {
              tmpIds[id] = 1;
            }
          });
        });
        Object.keys(tmpIds).forEach((id: string) => {
          datalakeDoc(id).set({
            c: tmpIds[id]
          });
        });
      });
  }, []);

  return (
    <Button block variant="primary" onClick={onLoadDatalake}>
      Carregar o Datalake
    </Button>
  );
}
