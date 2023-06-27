import netflixLogo from "../assets/netflix_logo.png";
import JobCard from "./JobCard";

function JobList() {
  return (
    <div className="flex gap-6 flex-wrap justify-center items-center">
      {jobListData.map((job, index) => {
        return (
          <JobCard
            key={index}
            jobImg={job.jobImg}
            title={job.title}
            company={job.company}
            location={job.location}
            details={job.details}
            apply={job.apply}
          />
        );
      })}
    </div>
  );
}

export default JobList;

const jobListData = [
  {
    jobImg: netflixLogo,
    title: "UX UI Designer",
    company: "Great Vibes - Information Technology",
    location: "Chennai, Tamilnadu, India (in-office)",
    details: [
      "Part-Time (9.00 am - 5.00 pm IST)",
      "Experience (1 - 2 years)",
      "INR (₹) 30,000 - 50,000 / Month",
      "51-200 employees",
    ],
    apply: {
      type: "quick",
      label: "Apply Now",
    },
  },
  {
    jobImg: netflixLogo,
    title: "Developer",
    company: "Great Vibes - Information Technology",
    location: "Chennai, Tamilnadu, India (in-office)",
    details: [
      "Part-Time (9.00 am - 5.00 pm IST)",
      "Experience (1 - 2 years)",
      "INR (₹) 30,000 - 50,000 / Month",
      "51-200 employees",
    ],
    apply: {
      type: "external",
      label: "External Apply",
    },
  },
  {
    jobImg: netflixLogo,
    title: "Interaction Designer",
    company: "Great Vibes - Information Technology",
    location: "Chennai, Tamilnadu, India (in-office)",
    details: [
      "Part-Time (9.00 am - 5.00 pm IST)",
      "Experience (1 - 2 years)",
      "INR (₹) 30,000 - 50,000 / Month",
      "51-200 employees",
    ],
    apply: {
      type: "external",
      label: "External Apply",
    },
  },
  {
    jobImg: netflixLogo,
    title: "SEO Analyst",
    company: "Great Vibes - Information Technology",
    location: "Chennai, Tamilnadu, India (in-office)",
    details: [
      "Part-Time (9.00 am - 5.00 pm IST)",
      "Experience (1 - 2 years)",
      "INR (₹) 30,000 - 50,000 / Month",
      "51-200 employees",
    ],
    apply: {
      type: "quick",
      label: "Apply Now",
    },
  },
];
