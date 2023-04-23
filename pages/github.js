import Layout from "../components/Layout";

const Github = ({ usuarioGit }) => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{usuarioGit.name}</h1>
            <img src={usuarioGit.avatar_url} alt={usuarioGit.login}></img>
            <a
              href={usuarioGit.html_url}
              target="_blank"
              className="btn btn-outline-secondary m-3"
            >
              Ir a mi Github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const resp = await fetch("https://api.github.com/users/jasaenzh");
  const dataGit = await resp.json();
  return {
    props: {
      usuarioGit: dataGit,
    },
  };
}

export default Github;
