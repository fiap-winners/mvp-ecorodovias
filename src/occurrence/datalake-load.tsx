import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import { firestore } from "firebase";

import { db, inc } from "../shared/firebase";

function generateAnalyticsIdsFromOccurrence({
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
        snapshots.forEach((snapshot: firestore.QueryDocumentSnapshot) => {
          const occurrence = snapshot.data();
          const ids = generateAnalyticsIdsFromOccurrence(occurrence);
          ids.forEach((id: string) => {
            db.collection("data")
              .doc("lake")
              .update({
                [id]: inc
              });
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
