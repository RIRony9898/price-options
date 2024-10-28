import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const gymPriceOptions = [
    {
      id: 1,
      plan: "Basic",
      price: 30,
      duration: "1 Month",
      features: ["Access to gym equipment", "Locker access"],
    },
    {
      id: 2,
      plan: "Standard",
      price: 80,
      duration: "3 Months",
      features: [
        "Access to gym equipment",
        "Locker access",
        "One personal training session per month",
      ],
    },
    {
      id: 3,
      plan: "Premium",
      price: 150,
      duration: "6 Months",
      features: [
        "Access to gym equipment",
        "Locker access",
        "One personal training session per month",
        "Access to group classes",
      ],
    },
    {
      id: 4,
      plan: "Yearly",
      price: 250,
      duration: "1 Year",
      features: [
        "Access to gym equipment",
        "Locker access",
        "Monthly personal training",
        "Access to group classes",
        "Access to sauna and steam room",
      ],
    },
    {
      id: 5,
      plan: "VIP",
      price: 500,
      duration: "1 Year",
      features: [
        "All-access pass",
        "Unlimited personal training",
        "Group classes",
        "Private locker",
        "Sauna and steam room access",
        "Complimentary health supplements",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-4xl text-center mt-10 md:mt-20">
        Best prices in town
      </h2>
      <div className='grid md:grid-cols-3 gap-5 px-4 mt-10 md:mt-15'>
        {gymPriceOptions.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
