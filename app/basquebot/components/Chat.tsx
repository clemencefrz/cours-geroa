"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Message, useAssistant } from "ai/react";

type Role = Message["role"];

// eslint-disable-next-line no-unused-vars
const RoleToName: { [role in Role]: string } = {
  user: "Vous",
  system: "Système",
  assistant: "Jone",
  function: "Fonction",
  data: "Données",
  tool: "Outil",
};
export default function Chat() {
  const { status, messages, input, submitMessage, handleInputChange } =
    useAssistant({ api: "/api/assistant" });

  return (
    <div className="bg-brandThree rounded-md flex flex-col md:w-1/2 gap-2 p-4">
      <div className="flex flew-row">
        <div>
          <div className="rounded-full w-20 h-20 overflow-hidden">
            <Image
              width={200}
              height={200}
              src={"/images/jone.jpeg"}
              alt={""}
              className="w-full h-full object-cover"
            />
          </div>
          <p>{"Jone le pottok"}</p>
        </div>
        <div>
          {messages.map((m: Message) => (
            <div key={m.id}>
              <strong>{`${RoleToName[m.role]}: `}</strong>
              {m.role !== "data" && m.content}
              {m.role === "data" && (
                <>
                  {(m.data as any).description}
                  <br />
                  <pre className={"bg-gray-200"}>
                    {JSON.stringify(m.data, null, 2)}
                  </pre>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {status === "in_progress" && <div />}

      <form onSubmit={submitMessage} className="flex flex-row gap-2">
        <Input
          disabled={status !== "awaiting_message"}
          value={input}
          placeholder="Agur Jone !"
          onChange={handleInputChange}
        />
        <Button type="submit">Envoyer</Button>
      </form>
    </div>
  );
}
