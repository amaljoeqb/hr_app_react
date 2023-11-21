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
        transition: "all 0.3s ease-in-out",
      }),
      indicatorsContainer: (base) => ({
        ...base,
        opacity: "0",
        transition: "all 0.3s ease-in-out",
      }),
      multiValueRemove: (base) => ({
        ...base,
        opacity: "0",
        transition: "all 0.3s ease-in-out",
      }),
      multiValueLabel: (base) => ({
        ...base,
        padding: "0.2rem 0rem 0.2rem 0.5rem",
        transform: "translateX(0.5rem)",
        transition: "all 0.3s ease-in-out",
      }),
      valueContainer: (base) => ({
        ...base,
        padding: "0",
        transition: "all 0.3s ease-in-out",
      }),
      singleValue: (base) => ({
        ...base,
        color: "#000",
        transition: "all 0.3s ease-in-out",
      }),
    };
  }
  return {
    control: (base, state) => ({
      ...base,
      transition: "all 0.3s ease-in-out",
    }),
    indicatorsContainer: (base) => ({
      ...base,
      transition: "all 0.3s ease-in-out",
    }),
    multiValueRemove: (base) => ({
      ...base,
      transition: "all 0.3s ease-in-out",
    }),
    multiValueLabel: (base) => ({
      ...base,
      transition: "all 0.3s ease-in-out",
    }),
    valueContainer: (base) => ({
      ...base,
      transition: "all 0.3s ease-in-out",
    }),
  };
}
