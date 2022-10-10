import { useParams } from 'react-router-dom';
import Content from 'renderer/components/content-recept/content';
import Layout from 'renderer/components/layout';
import PageCard from 'renderer/components/page-card/page-card';

const TablePage = () => {
  const props = useParams();
  console.log(props);

  return (
    <Layout>
      <PageCard />
      <Content />
    </Layout>
  );
};

export default TablePage;
