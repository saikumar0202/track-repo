import React, { useEffect, useState } from 'react';
import './App.scss';
import Commit from './components/Commit/Commit';
import Header from './components/Header/Header';
import getCommits from './service/octokit-service';

function App ()
{
  const [commits, setCommits ] = useState([]);
  const [count, setCount ] = useState(30);
  const getCommitData = () => {
    getCommits().then(json => {
      setCount(() => 30);
      setCommits(() => json.data);
    })
  }
  useEffect( () => {
    if(count < 0) {
      getCommitData();
    } else {
      setTimeout(()=> {
        setCount(prevCount =>  prevCount - 1);
      },1000)
    }
  }, [count] );
  useEffect( () => {
    getCommitData();
  }, [] );
  const handleRefresh = () => {
    getCommitData();
  }
  return (
    <div>
      <Header />
      <div className="container">
        <div className="body">
        <div className='commit-container-header'>
          <h2>Commit History</h2>
          <div>
            <div className='timer'>
              Refresh in {count} Sec(s)
            </div>
            <div>
              <button onClick={handleRefresh}>refresh now</button>
            </div>
          </div>
        </div>
        {commits.map((commit) => <Commit key={commit.sha} data={commit.commit} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
