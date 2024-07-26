"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useForm } from "react-hook-form";
import { useMemo } from "react";
import SelectFormItem from "./SelectFormItem";

const ARRAY_CLASSES = ["Première", "Terminale", "Supérieure"] as const;

type TYPE_CLASSES = (typeof ARRAY_CLASSES)[number];

const ARRAY_VILLES = ["Anglet", "Bayonne", "Biarritz", "Autre ville"] as const;

type TYPE_VILLES = (typeof ARRAY_VILLES)[number];

const ARRAY_SPECIALITES = [
  "Mathématiques",
  "Physique-Chimie",
  "Numérique et sciences informatiques",
  "Sciences de l'ingénieur",
] as const;

type TYPE_SPECIALITES = (typeof ARRAY_SPECIALITES)[number];

const ARRAY_PROFILE_TYPE = [
  "Je suis parent",
  "Je suis lycéen",
  "Je suis étudiant",
] as const;

const ARRAY_VOIE = ["Générale", "Technologique", ""] as const;

const formSchema = z.object({
  class: z.enum(ARRAY_CLASSES),
  email: z
    .string()
    .min(5, { message: "L'e-mail doit être renseigné." })
    .email("L'e-mail n'est pas valide."),
  voie: z.enum(ARRAY_VOIE),
  firstname: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères.",
  }),
  lastname: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  specialite: z.enum(ARRAY_SPECIALITES).optional(),
  ville: z
    .string()
    .min(2, {
      message: "La ville doit contenir au moins 2 caractères.",
    })
    .optional(),
});
export type FormInputs = z.infer<typeof formSchema>;

const FormContact = () => {
  const form = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      voie: "",
      email: "",
    },
  });

  const currentClasse = form.watch("class");

  const estUnLyceen = useMemo(
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
          <SelectFormItem<TYPE_CLASSES>
            form={form}
            label="Classe*"
            name="class"
            options_value={ARRAY_CLASSES}
            placeholder="Selectionne ta classe"
          />
          {/* Radio Button Voie */}
          {estUnLyceen && (
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
          {/* Select Classe */}
          <SelectFormItem<TYPE_SPECIALITES>
            form={form}
            label="Spécialité*"
            name="specialite"
            options_value={ARRAY_SPECIALITES}
            placeholder="Selectionne ta spécialité"
          />
          {/* Prénom et Nom */}
          <div className="w-full flex flex-row justify-between gap-4">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom*</FormLabel>
                  <FormControl>
                    <Input placeholder="Prénom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom*</FormLabel>
                  <FormControl>
                    <Input placeholder="Nom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* e-mail */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>e-mail*</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="e-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Ville */}
          <SelectFormItem<TYPE_VILLES>
            form={form}
            label="Ville"
            name="ville"
            options_value={ARRAY_VILLES}
            placeholder="Selectionne ta ville"
          />

          <span>*Champ requis</span>
          <Button type="submit">Demandez un rendez-vous</Button>
        </form>
      </Form>
    </div>
  );
};
export default FormContact;
