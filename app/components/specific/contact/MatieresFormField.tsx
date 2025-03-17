import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormControl,
  FormMessage,
} from "../../design-system/form";
import { FormInputs } from "./FormContact";
import { Checkbox } from "../../design-system/checkbox";

type Props = {
  form: UseFormReturn<FormInputs, any, undefined>;
};

const items = [
  {
    id: "mathematiques",
    label: "Mathématiques",
  },
  {
    id: "physique",
    label: "Physique",
  },
  {
    id: "chimie",
    label: "Chimie",
  },
  {
    id: "informatique_python",
    label: "Informatique (Python)",
  },
  {
    id: "Informatique_autre",
    label: "Informatique (Autre)",
  },
] as const;

const MatieresFormField = ({ form }: Props) => {
  return (
    <FormField
      control={form.control}
      name={"matieres"}
      render={() => (
        <FormItem>
          <FormLabel>Matières*</FormLabel>
          <FormDescription>
            Sur quelle(s) matière(s) souhaites-tu progresser ?
          </FormDescription>
          {items.map((item) => (
            <FormField
              key={item.id}
              control={form.control}
              name={"matieres"}
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.id}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        className="h-6 w-6"
                        aria-label={item.label}
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.id])
                            : field.onChange(
                                field.value?.filter(
                                  (value) => value !== item.id
                                )
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{item.label}</FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default MatieresFormField;
