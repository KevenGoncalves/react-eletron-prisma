import KitchenContent from 'renderer/components/kitchen-content/kitchen-content';
import Layout from 'renderer/components/layout';
import PageCard from 'renderer/components/page-card/page-card';

const KitchenPage = () => {
  return (
    <Layout>
      <PageCard />
      <KitchenContent />
    </Layout>
  );
};

export default KitchenPage;
