import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import createOccurrence from "./create-occurrence";

import { Option } from "../shared/types";
import { bases, weatherConditions, weekDays, dayPeriods } from "../shared/data";

const genRandom = (options: Option[]) => {
  const id = Math.ceil(Math.random() * options.length);
  return options.find(opt => opt.id === id);
};

function genRandomWithProbability(options: Option[]) {
  var probabilities = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5];
  var idx = Math.floor(Math.random() * probabilities.length);
  const id = probabilities[idx];
  return options.find(opt => opt.id === id);
}

function loadRandomOccurrency() {
  const base = genRandom(bases);
  const weatherCondition = genRandomWithProbability(weatherConditions);
  const weekDay = genRandom(weekDays);
  const dayPeriod = genRandom(dayPeriods);

  if (base && weatherCondition && weekDay && dayPeriod) {
    createOccurrence(base, weatherCondition, weekDay, dayPeriod);
  }
}

export default function OccurrenceLoad() {
  const onLoadOccurrencies = useCallback(() => {
    let count = 0;
    while (count < 20) {
      loadRandomOccurrency();
      count = count + 1;
    }
  }, []);

  return (
    <Button block variant="outline-primary" onClick={onLoadOccurrencies}>
      Registrar 20 Ocorrências
    </Button>
  );
}
