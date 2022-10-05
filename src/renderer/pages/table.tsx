import Content from 'renderer/components/content-recept/content';
import Layout from 'renderer/components/layout';
import PageCard from 'renderer/components/page-card/page-card';

const TablePage = (props: any) => {
  console.log(props);

  return (
    <Layout>
      <PageCard />
      <Content />
    </Layout>
  );
};

export default TablePage;
