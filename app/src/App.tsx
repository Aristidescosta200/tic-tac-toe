import RoutesConfig from '@routes/RoutesConfig';
import { AuthProvider } from '@/src/providers';

function App() {
  return (
    <AuthProvider>
      <RoutesConfig />
    </AuthProvider>
  );
}

export default App;
