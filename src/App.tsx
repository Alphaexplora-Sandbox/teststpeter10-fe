export interface AppProps {
  title?: string;
}

export function App({ title = 'teststpeter10-frontend' }: AppProps) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}