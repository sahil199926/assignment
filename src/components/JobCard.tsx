type JobCardProps = {
  jobImg: string;
  title: string;
  company: string;
  location: string;
  details: string[];
  apply: {
    type: string;
    label: string;
  };
};

function JobCard({
  jobImg,
  title,
  company,
  location,
  details,
  apply,
}: JobCardProps) {

  const { type, label } = apply;
  const ApplySection = () => {
    let styles = undefined;
    switch (type) {
      case "quick":
        styles =
          "bg-primary text-white rounded-md font-medium text-sm leading-5 px-4 py-2";
        break;
      case "external":
        styles =
          "bg-white text-primary rounded-md font-medium text-sm leading-5 px-4 py-2 border border-primary";
        break;
      default:
        break;
    }
    return (
      <button className={styles} type="button">
        {label}
      </button>
    );
  };

  return (
    <div className="bg-white rounded-lg px-6 py-4 w-card text-dark font-primary border">
      <div className="flex justify-start">
        <div className="flex justify-start gap-2">
          <div>
            <img src={jobImg} alt="logo" />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-normal text-2xl leading-8">{title}</h3>
              <h5 className="font-normal text-base">{company}</h5>
              <p className="font-normal text-base text-gray-500">{location}</p>
            </div>
            <div className="flex flex-col gap-2 text-base">
              {details.map((detail, index) => {
                return <p key={index}>{detail}</p>;
              })}
            </div>
            <div className="flex justify-start gap-4">
              <ApplySection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
