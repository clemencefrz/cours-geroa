"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  email: z
    .string()
    .min(5, { message: "L'e-mail doit être renseigné." })
    .email("L'e-mail n'est pas valide."),
});

const Login = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log({ data });
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="font-bold text-5xl">Connection (bientôt)</h1>

      {/* Bientôt, inscription Newsletter */}
      <div className="bg-black text-white w-full text-center p-4 rounded-lg gap-4 flex flex-col">
        <h2 className="text-2xl font-semibold">
          {`Une nouvelle application pour apprendre encore plus, bientôt
          disponible !`}
        </h2>

        <span>
          {`Bientôt, vous pourrez accéder à des exercices approfondis, des quizz
          interactifs, des conseils pour l'orientation, et bien plus encore.`}
          <br />
          {`Restez informé en vous inscrivant à notre newsletter 👇`}
        </span>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center justify-center gap-1"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Votre adresse email"
                      className="text-black"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">{`S'inscrire à la newsletter`}</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
