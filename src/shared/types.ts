export interface Option {
  id: number;
  name: string;
}

export interface Occurrence {
  base: Option;
  weatherCondition: Option;
  weekDay: Option;
  dayPeriod: Option;
}
