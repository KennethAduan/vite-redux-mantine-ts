import MainRoutes from "./routes/MainRoutes";
import { MantineProviders, ReduxProviders } from "./services/providers";
const App = () => {
  return (
    <ReduxProviders>
      <MantineProviders>
        <MainRoutes />
      </MantineProviders>
    </ReduxProviders>
  );
};

export default App;
