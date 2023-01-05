import React, { useDeferredValue, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Character, { Results } from './Character';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';
import { useGlobalContext } from 'components/Context/SearchContext';

interface Info {
  count: number;
  next: string;
  pages: number;
  prev: string;
}

interface Response {
  info: Info;
  results: Results[];
}

const CardList = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<Response | null>(null);
  const { search } = useGlobalContext();
  const deferredSearch = useDeferredValue(search);
  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/?name=${deferredSearch}`)
      .then((response) => {
        if (!response.ok) {
          throw Error('Could not fetch the data');
        }
        return response.json();
      })
      .then((json) => {
        toast.success('Data was loading!');
        setData(json);
      })
      .catch((e) => toast.error(e.message))
      .finally(() => setLoading(false));
  }, [deferredSearch]);
  return (
    <Grid container spacing={2}>
      {data && !isLoading ? (
        data.results.map((user) => (
          <Grid item xs={3} key={user.id}>
            <Character user={user} />
          </Grid>
        ))
      ) : (
        <div>
          <CircularProgress />
        </div>
      )}
    </Grid>
  );
};

export default CardList;
