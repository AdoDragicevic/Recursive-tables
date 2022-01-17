import Table from "./components/Table";
import { TableProvider } from "./contexts/table";
import "./styles/main.scss";

const App = () => (
  <TableProvider>
    <Table />
  </TableProvider>
)

export default App;
