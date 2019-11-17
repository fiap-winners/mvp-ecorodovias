import React, { ChangeEvent, useCallback } from "react";
import { Option } from "./types";
import { FormGroup, FormLabel } from "react-bootstrap";

interface FormFieldProps {
  label: string;
  name: string;
  value: number;
  options: Option[];
  onSelect: (value: number) => void;
}

export default function FormField({
  label,
  name,
  value,
  options,
  onSelect
}: FormFieldProps) {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onSelect(Number.parseInt(e.target.value, 10));
    },
    [onSelect]
  );

  return (
    <FormGroup>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <select
        id={name}
        className="form-control"
        value={value}
        onChange={onChange}
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
