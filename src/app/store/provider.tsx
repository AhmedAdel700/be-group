"use client";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "@/app/store/store";

interface ProvidersProps {
	children: React.ReactNode;
	session: any;
}

export function Providers({ children, session }: ProvidersProps) {
	return (
		<SessionProvider session={session} refetchOnWindowFocus={true}>
			<Provider store={store}>{children}</Provider>
		</SessionProvider>
	);
}
