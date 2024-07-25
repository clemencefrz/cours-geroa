"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useForm } from "react-hook-form";
import { useMemo } from "react";

const ARRAY_CLASSES = ["Première", "Terminale", "Supérieure"] as const;

const ARRAY_PROFILE_TYPE = [
  "Je suis parent",
  "Je suis lycéen",
  "Je suis étudiant",
] as const;

const ARRAY_VOIE = ["Générale", "Technologique", ""] as const;
// type Voie = (typeof ARRAY_VOIE)[number];

// const isVoie = (variable: any): variable is Voie => {
//   return (ARRAY_VOIE as readonly string[]).includes(variable);
// };

const formSchema = z.object({
  class: z.enum(ARRAY_CLASSES),
  voie: z.enum(ARRAY_VOIE),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const FormContact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      voie: "",
    },
  });

  const currentClasse = form.watch("class");

  const estUnLycéen = useMemo(
    () => currentClasse === "Terminale" || currentClasse === "Première",
    [currentClasse]
  );

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
          {/* Radio Button Générale ou Technologique */}
          {estUnLycéen && (
            <FormField
              control={form.control}
              name="voie"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Voie*</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="Générale"
                            aria-label="Générale"
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {"Générale"}
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="Technologique"
                            aria-label="Technologique"
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {"Technologique"}
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
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
