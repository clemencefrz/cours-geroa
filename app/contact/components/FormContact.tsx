"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ARRAY_CLASSES = ["Première", "Terminale", "Supérieure"] as const;

const ARRAY_PROFILE_TYPE = [
  "Je suis parent",
  "Je suis lycéen",
  "Je suis étudiant",
] as const;

const formSchema = z.object({
  class: z.enum(ARRAY_CLASSES),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const FormContact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex flex-col">
      <RadioGroup
        defaultValue={ARRAY_PROFILE_TYPE[0]}
        className="flex flex-row items-center gap-4"
      >
        <div className="flex items-center space-x-2">
          {ARRAY_PROFILE_TYPE.map((value, key) => (
            <div key={key} className="flex items-center space-x-2">
              <RadioGroupItem value={value} id={value} aria-label={value} />
              <Label htmlFor={value}>{value}</Label>
            </div>
          ))}
        </div>
      </RadioGroup>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* Select Classe */}
          <FormField
            control={form.control}
            name="class"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Classe*</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger aria-label="Selectionne ta classe">
                      <SelectValue placeholder="Selectionne ta classe" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {ARRAY_CLASSES.map((classe, key) => (
                      <SelectItem value={classe} key={key}>
                        {classe}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your{" "}
                  <Link href="/examples/forms">email settings</Link>.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Other */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Demandez un rendez-vous</Button>
        </form>
      </Form>
    </div>
  );
};
export default FormContact;
