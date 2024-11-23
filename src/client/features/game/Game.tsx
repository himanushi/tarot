import { useMutation } from "@tanstack/react-query";
import { Box, Button, Textarea, VStack } from "@yamada-ui/react";
import { hc } from "hono/client";
import { useState } from "react";
import { clientUrl } from "~/client/utils/clientUrl";
import type { TarotDrawHistoryApi } from "~/server/routes";

const query = hc<TarotDrawHistoryApi>(clientUrl);

export const Game = () => {
  const [question, setQuestion] = useState("");

  const addTarotDrawHistoryMutation = useMutation({
    mutationFn: ({ question }: { question: string }) =>
      query.api["tarot-draw-histories"].$post({
        json: { question },
      }),
    onSuccess: () => {
      setQuestion("");
    },
  });

  return (
    <VStack>
      <Textarea
        placeholder="聞くことを入力してください"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button
        onClick={() => {
          addTarotDrawHistoryMutation.mutate({ question });
        }}
      >
        送信
      </Button>
    </VStack>
  );
};