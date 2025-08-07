import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "https://tegrigobi.api.erxes.io/gateway",
    NEXT_PUBLIC_CP_ID: "gzeOstbmmN9HyDlLMDXNj",
    NEXT_PUBLIC_PMS_TOKEN: "WDhfiVSLriHkdzMd9Eaa2vgCpTiEgObD",
    NEXT_PUBLIC_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6IlRlZ3JpIiwiY3JlYXRlZEF0IjoiMjAyNS0wOC0wNlQxMzoyNToyNC41MDFaIiwidXNlckdyb3VwSWQiOiI0RUh5ZFREQWlzMkxkUW5abiIsImV4cGlyZURhdGUiOiIyMDI1LTA5LTA2VDAxOjQ5OjM4Ljk5NloiLCJub0V4cGlyZSI6dHJ1ZSwiYWxsb3dBbGxQZXJtaXNzaW9uIjp0cnVlLCJfaWQiOiJQZndzdnZKMVB4dEsyd0g2UlNGdVkiLCJfX3YiOjB9LCJpYXQiOjE3NTQ1MzEzODh9.I1_uKipwUsicxRbZ93xwRlDcPrbqUPZKX0AfILuPSnA",
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
