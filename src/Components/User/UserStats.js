import React from "react";
import Head from "../Helper/Head";
import useFetch from "../../Hooks/useFetch";
import { GET_STATS } from "../../Api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
import UserStatsGraphs from "./UserStatsGraphs";

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div>
        <Head title="Estatísticas" description="Estatísticas do usuário" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStats;
