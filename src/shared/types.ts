export interface Option {
  id: number;
  name: string;
}

interface Occurence {
  base: string;
  weather: string;
  weekDay: string;
  dayPeriod: string;
}

export default Occurence;
