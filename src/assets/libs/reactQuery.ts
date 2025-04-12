import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5 minutos: evita refetch desnecessário
            refetchOnWindowFocus: false, // não refaz fetch ao focar a janela
            retry: 1, // tenta novamente apenas uma vez em caso de erro
            refetchOnReconnect: true,
            refetchInterval: false,
        },
        mutations: {
            retry: 0, // não tenta novamente por padrão (evita duplicidade)
        },
    },
});
