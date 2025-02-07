"use client";

import { useAuth, ClerkProvider } from "@clerk/nextjs";

import { ConvexProviderWithClerk } from "convex/react-clerk";

import {
  AuthLoading,
  Authenticated,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import { Loading } from "@/components/auth/Loading";
import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <SignedIn>
          <Authenticated>{children}</Authenticated>
        </SignedIn>

        <Unauthenticated>
          <div className="flex justify-center items-center pt-7">
            <SignedOut>
              <SignIn routing="hash"></SignIn>
            </SignedOut>
          </div>
        </Unauthenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
