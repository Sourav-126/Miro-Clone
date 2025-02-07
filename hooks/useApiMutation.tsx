import { useState } from "react";

import { useMutation } from "convex/react";

export const UseApiMutation = (mutationFunction: any) => {
  const [pending, setPending] = useState(false);

  const apiMutation = useMutation(mutationFunction);

  const mutate = (payload: any) => {
    setPending(true);

    return apiMutation(payload)
      .finally(() => setPending(false))
      .catch((error) => {
        throw new error();
      });
  };

  return {
    mutate,
    pending,
  };
};
