import React from "react";
import Head from "../Helper/Head";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../Api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
import UserStatsGraphs from "./UserStatsGraphs";

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <section className="container">
        <Head title="Statistics" />
        <UserStatsGraphs data={data} />
      </section>
    );
  else return null;
};

export default UserStats;
