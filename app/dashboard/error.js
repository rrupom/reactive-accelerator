"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong in analytics and settings page</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

{
  /* <GlobalError>
<RootLayout>
    <RootErrorBoundary>
        <ErrorBoundary>
            <Suspense fallback={<DashboardLoading />}>
                <DashboardLayout>
                    <ErrorBoundary>
                        <Analytics />
                    </ErrorBoundary>
                </DashboardLayout>
            </Suspense>
        </ErrorBoundary>
    <Heavy>
    </RootErrorBoundary>
</RootLayout>
</GlobalError> */
}
