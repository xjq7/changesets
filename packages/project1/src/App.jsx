import { log } from '@gate/utils';
import { Button } from '@gate/components';
log(222);
function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
          log('onClick');
        }}
      ></Button>
    </div>
  );
}

export default App;
