import { Alert, AlertDescription, AlertIcon } from "@hope-ui/core";

export default function App() {
  return (
    <div class="flex flex-col space-y-4 max-w-[500px] p-4">
      <Alert status="info">
        <AlertIcon class="mr-2.5" />
        <AlertDescription>Hope UI is going live on April 7th. Get ready!</AlertDescription>
      </Alert>

      <Alert status="success">
        <AlertIcon class="mr-2.5" />
        <AlertDescription>Data uploaded to the server. Fire on!</AlertDescription>
      </Alert>

      <Alert status="warning">
        <AlertIcon class="mr-2.5" />
        <AlertDescription>Seems your account is about expire, upgrade now</AlertDescription>
      </Alert>

      <Alert status="danger">
        <AlertIcon class="mr-2.5" />
        <AlertDescription>There was an error processing your request</AlertDescription>
      </Alert>
    </div>
  );
}
