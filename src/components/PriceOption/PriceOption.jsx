import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { plan, price, features } = option;
  return (
    <div className="bg-blue-500 text-white rounded-lg p-6 flex flex-col space-y-6">
      <div className="text-center space-y-3">
        <h3>
          <span className="text-7xl">{price}</span>
          <span className="text-2xl">/mon</span>
        </h3>
        <h2 className="text-4xl font-bold">{plan} Package</h2>
      </div>
      <ul className="flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </ul>
      <button className="w-full py-4 text-white bg-blue-700 rounded-lg hover:bg-blue-800 font-bold">
        Choose this plan
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
