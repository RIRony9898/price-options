import Proptype from "prop-types";

const Link = ({ route }) => {
  return (
    <li className="mr-10 hover:bg-yellow-600 p-2 hover:rounded-lg">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route: Proptype.shape({
    path: Proptype.string.isRequired,
    name: Proptype.string.isRequired,
  }).isRequired,
};

export default Link;
