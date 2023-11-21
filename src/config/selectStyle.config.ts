import { GroupBase, StylesConfig, Theme, ThemeConfig } from "react-select";
import { SelectOption } from "../components/inputs/SelectInput";

export function selectStyle<T>(
  isView: boolean = false
): StylesConfig<SelectOption<T>, boolean, GroupBase<SelectOption<T>>> {
  if (isView) {
    return {
      control: (base, state) => ({
        ...base,
        color: "#000",
        minHeight: state.isMulti ? "40px" : "0",
        borderColor: "transparent",
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
        paddingTop: "0.4rem",
        paddingBottom: "0.4rem",
        transform: "translateX(0.5rem)",
        transition: "all 0.3s ease-in-out",
      }),
      valueContainer: (base) => ({
        ...base,
        transform: "translateX(-8px)",
        transition: "all 0.3s ease-in-out",
      }),
      multiValue: (base) => ({
        ...base,
        borderRadius: "4px",
        transform: "translateX(-2px)",
        transition: "all 0.3s ease-in-out",
      }),
      singleValue: (base) => ({
        ...base,
        margin: "0",
        color: "#000",
        transition: "all 0.3s ease-in-out",
      }),
    };
  }
  return {
    control: (base, state) => ({
      ...base,
      boxShadow: "var(--light-shadow)",
      border: `1px solid ${
        state.isFocused ? "var(--dark-grey)" : "var(--light-grey)"
      }`,
      borderRadius: "8px",
      minHeight: state.isMulti ? "40px" : "0",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        border: `1px solid ${
          state.isFocused ? "var(--dark-grey)" : "var(--light-grey)"
        }`,
      },
    }),
    container: (base) => ({
      ...base,
      minHeight: "0",
    }),
    indicatorsContainer: (base) => ({
      ...base,
      transition: "all 0.3s ease-in-out",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      padding: "6px 8px",
      transition: "all 0.3s ease-in-out",
    }),
    clearIndicator: (base) => ({
      ...base,
      padding: "6px 8px",
      transition: "all 0.3s ease-in-out",
    }),
    multiValueRemove: (base) => ({
      ...base,
      transition: "all 0.3s ease-in-out",
    }),
    multiValueLabel: (base) => ({
      ...base,
      paddingTop: "0.4rem",
      paddingBottom: "0.4rem",
      transition: "all 0.3s ease-in-out",
    }),
    multiValue: (base) => ({
      ...base,
      borderRadius: "4px",
      transition: "all 0.3s ease-in-out",
    }),
    valueContainer: (base) => ({
      ...base,
      transition: "all 0.3s ease-in-out",
    }),
    singleValue: (base) => ({
      ...base,
      transition: "all 0.3s ease-in-out",
    }),
  };
}

export const selectTheme: ThemeConfig = (theme: Theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "var(--primary-color)",
    primary25: "#e8f0fe",
    primary50: "#e8f0fe",
    danger: "var(--error-color)",
  },
});
