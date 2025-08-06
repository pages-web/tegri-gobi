import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "https://tegrigobi.api.erxes.io/gateway",
    NEXT_PUBLIC_CP_ID: "gzeOstbmmN9HyDlLMDXNj",
    NEXT_PUBLIC_PMS_TOKEN: "WDhfiVSLriHkdzMd9Eaa2vgCpTiEgObD",
    NEXT_PUBLIC_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6InRva2VuIiwiY3JlYXRlZEF0IjoiMjAyNS0wOC0wNVQwNToyNjo0Ni4xMzBaIiwidXNlckdyb3VwSWQiOiI0RUh5ZFREQWlzMkxkUW5abiIsImV4cGlyZURhdGUiOiIyMDI1LTA5LTA1VDA0OjM1OjU3LjYyM1oiLCJub0V4cGlyZSI6dHJ1ZSwiYWxsb3dBbGxQZXJtaXNzaW9uIjp0cnVlLCJfaWQiOiJIbHZvWDRvb3REWHVLM1BuTHZUQlUiLCJfX3YiOjB9LCJpYXQiOjE3NTQ0NTQ5NjV9.U6guIY55QhbURmfRuJWP9nH3YYw_nPhqRLS7IdWdIBU",
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
