import { GroupBase, StylesConfig } from "react-select";
import { SelectOption } from "../components/inputs/SelectInput";

export function selectStyle<T>(
  isView: boolean = false
): StylesConfig<SelectOption<T>, boolean, GroupBase<SelectOption<T>>> {
  if (isView) {
    return {
      control: (base, state) => ({
        ...base,
        color: "#000",
        border: "none",
        backgroundColor: "#fff",
      }),
      indicatorsContainer: (base) => ({
        ...base,
        display: "none",
      }),
      multiValueRemove: (base) => ({
        ...base,
        display: "none",
      }),
      multiValueLabel: (base) => ({
        ...base,
        padding: "0.2rem 0.5rem",
      }),
      valueContainer: (base) => ({
        ...base,
        padding: "0",
      }),
      singleValue: (base) => ({
        ...base,
        color: "#000",
      }),
    };
  }
  return {};
}
