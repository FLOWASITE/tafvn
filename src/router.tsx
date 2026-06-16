import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Fonts — bundled, Vietnamese subset supported
import "@fontsource/playfair-display/vietnamese-700.css";
import "@fontsource/playfair-display/vietnamese-900.css";
import "@fontsource/playfair-display/latin-700.css";
import "@fontsource/playfair-display/latin-900.css";
import "@fontsource/source-serif-4/vietnamese-400.css";
import "@fontsource/source-serif-4/vietnamese-600.css";
import "@fontsource/source-serif-4/latin-400.css";
import "@fontsource/source-serif-4/latin-600.css";
import "@fontsource/inter/vietnamese-400.css";
import "@fontsource/inter/vietnamese-500.css";
import "@fontsource/inter/vietnamese-600.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
