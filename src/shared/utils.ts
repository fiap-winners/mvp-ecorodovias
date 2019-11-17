import { Option } from "./types";

export const byId = (id: number) => (b: Option) => b.id === id;
