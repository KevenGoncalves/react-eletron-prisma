import FormUser from 'renderer/components/form-user/form-user';
import Layout from 'renderer/components/layout';
import PageCard from 'renderer/components/page-card/page-card';

const Users = () => {
  return (
    <Layout>
      <PageCard />
      <FormUser />
    </Layout>
  );
};

export default Users;
