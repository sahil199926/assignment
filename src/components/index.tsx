import JobList from "./JobList";
import JobForm from "./JobForm";

function Job() {
  return (
    <div>
      <main className="flex justify-center items-center flex-col p-12 gap-12">
        <section>
          <JobForm />
        </section>
        <section>
          <JobList />
        </section>
      </main>
    </div>
  );
}

export default Job;
