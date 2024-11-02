"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/app/_components/design-system/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/design-system/form";
import { Input } from "@/app/_components/design-system/input";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/app/_components/design-system/radio-group";

import { useForm } from "react-hook-form";
import { useMemo } from "react";

import { toast } from "sonner";
import { EmailContactRequestBody } from "@/app/api/send/contact/route";
import MatieresFormField from "./MatieresFormField";
import SelectFormItem from "./SelectFormItem";
import {
  ARRAY_CLASSES,
  ARRAY_SPECIALITES,
  ARRAY_VILLES,
  ARRAY_VOIE,
  TYPE_CLASSES,
  TYPE_SPECIALITES,
  TYPE_VILLES,
} from "@/src/entities/student";

const SEND_CONTACT_ROUTE = "api/send/contact";

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
  matieres: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Vous devez choisir au moins une matière",
  }),
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
      matieres: [],
    },
  });

  const currentClasse = form.watch("class");
  const currentVoie = form.watch("voie");

  const estUnLyceenEnPremiereOuTerminale = useMemo(
    () => currentClasse === "Terminale" || currentClasse === "Première",
    [currentClasse]
  );

  const estUnLycéenVoieGénérale = useMemo(
    () => estUnLyceenEnPremiereOuTerminale && currentVoie === "Générale",
    [estUnLyceenEnPremiereOuTerminale, currentVoie]
  );

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const body: EmailContactRequestBody = {
        subject: `Formulaire de contact par ${values.firstname} ${values.lastname}`,
        ...values,
      };
      const response = await fetch(SEND_CONTACT_ROUTE, {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        toast.error("Il y a eu un problème avec la soumission du formulaire.");
        throw new Error("Failed to send email");
      }
      toast.success(
        "Votre demande de rendez-vous a bien été envoyée à cours-geroa@gmail.com"
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <h2>Prenez rendez-vous en quelques clics !</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          {/* Select Classe */}
          <SelectFormItem<TYPE_CLASSES>
            form={form}
            label="Classe*"
            name="class"
            options_value={ARRAY_CLASSES}
            placeholder="Selectionnez une classe"
          />
          {/* Voie Générale ou Technologique */}
          {estUnLyceenEnPremiereOuTerminale && (
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
                      <FormItem className="flex items-center space-x-3 space-y-0 ">
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
          {/* Spécalité générale */}
          {estUnLycéenVoieGénérale && (
            <SelectFormItem<TYPE_SPECIALITES>
              form={form}
              label="Spécialité*"
              name="specialite"
              options_value={ARRAY_SPECIALITES}
              placeholder="Selectionnez une spécialité"
            />
          )}

          {/* Matières */}
          <MatieresFormField form={form} />

          {/* Prénom et Nom */}
          <div className="w-full flex flex-row justify-between gap-4">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{`Prénom de l'élève*`}</FormLabel>
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
            placeholder="Selectionnez votre ville"
          />

          <span>*Champ requis</span>
          <Button type="submit">Demandez un rendez-vous</Button>
        </form>
      </Form>
    </div>
  );
};
export default FormContact;
