import { log } from '@gate/utils';
import { Button } from '@gate/components';

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
