import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

/**
 * ServerStateProvider component for providing the QueryClient object to its children components
 * @param children - Children components to wrap with the ServerStateProvider context
 * @returns JSX.Element
 */
export const ServerStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
