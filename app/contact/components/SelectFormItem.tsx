import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/design-system/form";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import { FormInputs } from "./FormContact";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/design-system/select";

type Props<T> = {
  form: UseFormReturn<FormInputs, any, undefined>;
  name: ControllerRenderProps<Omit<FormInputs, "matieres">>["name"];
  placeholder: string;
  label: string;
  options_value: readonly T[];
};

const SelectFormItem = <T,>({
  form,
  name,
  placeholder,
  label,
  options_value,
}: Props<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger aria-label={placeholder}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options_value.map((value, key) => (
                <SelectItem
                  className="cursor-pointer"
                  value={value as string}
                  key={key}
                >
                  {/* //assertions pour la value*/}
                  {value as string}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectFormItem;
