import "./../styles/globals.css";
import "antd/dist/antd.css";
import BackIMAGE from "./../Components/backIMAGE";
import { TasksProvider } from "./../context/taskContext";

function MyApp({ Component, pageProps }) {
  return (
    <TasksProvider>
      <BackIMAGE>
        <Component {...pageProps} />
      </BackIMAGE>
    </TasksProvider>
  );
}

export default MyApp;
