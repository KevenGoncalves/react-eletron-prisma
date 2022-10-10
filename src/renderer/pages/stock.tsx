import Layout from 'renderer/components/layout';
import PageCard from 'renderer/components/page-card/page-card';
import StockForm from 'renderer/components/stock-form/stock-form';

const Stock = () => {
  return (
    <Layout>
      <PageCard />
      <StockForm />
    </Layout>
  );
};

export default Stock;
