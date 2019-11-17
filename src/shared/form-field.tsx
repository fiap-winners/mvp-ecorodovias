import React, { ChangeEvent } from "react";
import { Option } from "./types";
import { FormGroup, FormLabel } from "react-bootstrap";

interface FormFieldProps {
  label: string;
  name: string;
  value: number;
  options: Option[];
  onSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function FormField({
  label,
  name,
  value,
  options,
  onSelect
}: FormFieldProps) {
  return (
    <FormGroup>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <select
        id={name}
        className="form-control"
        value={value}
        onChange={onSelect}
      >
        <option value="">Selecionar</option>
        {options.map((opt: Option) => (
          <option key={opt.name} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>
    </FormGroup>
  );
}
