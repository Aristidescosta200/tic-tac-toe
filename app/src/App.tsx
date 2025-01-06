import { RoutesConfig } from '@routes/RoutesConfig';
import { AuthProvider, GameProvider } from '@/src/providers';
import { InvitationNotification } from './components';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    <AuthProvider>
      <GameProvider>
        <BrowserRouter>
          <Routes>
            {RoutesConfig.map((route, index) =>
              Array.isArray(route?.children) ? (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                  errorElement={route.errorElement}
                >
                  {route.children.map((inner) => (
                    <Route
                      key={inner.path}
                      path={inner.path}
                      element={inner.element}
                      errorElement={inner.errorElement}
                    />
                  ))}
                </Route>
              ) : (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                  errorElement={route.errorElement}
                />
              ),
            )}
          </Routes>
          <InvitationNotification />
        </BrowserRouter>
      </GameProvider>
    </AuthProvider>
  );
}

export default App;
