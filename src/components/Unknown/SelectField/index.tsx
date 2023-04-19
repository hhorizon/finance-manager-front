import { useFormikContext, useField } from "formik";
import React from "react";
import Select from "react-select";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";

type Option = {
  label: string;
  value: any;
};

type GroupedOption = {
  label: string;
  options: Option[];
};

type SelectFieldProps = {
  name: string;
} & Omit<
  StateManagerProps<Option, false | true, GroupedOption>,
  "value" | "onChange"
>;

export const SelectField: React.FC<SelectFieldProps> = (props) => {
  const { name, ...restProps } = props;
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  const flattenedOptions = props.options?.flatMap((option) => {
    const isNotGrouped = "value" in option;
    if (isNotGrouped) {
      return option;
    } else {
      return option.options;
    }
  });

  const value = flattenedOptions?.filter((option) => {
    const isArrayValue = Array.isArray(field.value);

    if (isArrayValue) {
      const values = field.value as Array<any>;
      return values.includes(option.value);
    } else {
      return field.value === option.value;
    }
  });

  return (
    <Select
      {...restProps}
      value={value}
      onChange={(val) => {
        const _val = val as Option[] | Option;
        const isArray = Array.isArray(_val);
        if (isArray) {
          const values = _val.map((o) => o.value);
          setFieldValue(name, values);
        } else {
          setFieldValue(name, _val.value);
        }
      }}
    />
  );
};
