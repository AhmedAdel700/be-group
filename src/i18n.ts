/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-assign-module-variable */
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ar"];
const namespaces = ["header", "hero", "about", "diplomas", "footer", "signin", "enroll"]; // Add more as needed

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  const messages = Object.fromEntries(
    await Promise.all(
      namespaces.map(async (ns) => {
        const module = await import(`../messages/${locale}/${ns}.json`);
        return [ns, module.default];
      })
    )
  );

  return {
    messages,
  };
});
