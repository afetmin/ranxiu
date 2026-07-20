import { OpenPanelComponent } from "@openpanel/nextjs";

/**
 * OpenPanel Analytics (https://openpanel.dev)
 *
 * https://docs.openpanel.dev/docs/sdks/nextjs#options
 */
export default function OpenPanelAnalytics() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  const clientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID;
  if (!clientId) {
    return null;
  }

  return (
    <OpenPanelComponent
      apiUrl="/api/op"
      scriptUrl="/api/op/op1.js"
      clientId={clientId}
      trackScreenViews={true}
      trackAttributes={true}
      trackOutgoingLinks={true}
    />
  );
}
