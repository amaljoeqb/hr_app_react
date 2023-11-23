import { FormikContextType, useFormikContext } from "formik";
import React from "react";

export interface AutofillButtonProps<T>
  extends React.HTMLProps<HTMLDivElement> {
  onAutofill: (context: FormikContextType<T>) => void;
}

export default function AutofillButton<T>(props: AutofillButtonProps<T>) {
  const formik = useFormikContext<T>();
  return (
    <div
      className="field"
      {...props}
      onDoubleClick={() => {
        props.onAutofill(formik);
      }}
    />
  );
}
