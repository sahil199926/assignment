function FormOne() {
  return (
    <>
      <div className="w-form h-form bg-white rounded-lg p-8 font-primary text-dark border">
        <div className="flex justify-between items-center mb-8">
          <h5 className="font-normal text-xl leading-7">Create a job</h5>
          <h6 className="font-medium text-base leading-6 ">Step 1</h6>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted");
          }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-1">
            <p className="font-medium text-sm leading-5">
              Job Title <sup className="text-alert">*</sup>
            </p>
            <input
              className="w-full h-9 border border-gray-300 rounded px-2 py-2 focus:outline-none"
              type="text"
              placeholder="ex. UX UI Designer"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium text-sm leading-5">
              Company name <sup className="text-alert">*</sup>
            </p>
            <input
              className="w-full h-9 border border-gray-300 rounded px-2 py-2 focus:outline-none"
              type="text"
              placeholder="ex. Google"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium text-sm leading-5">
              Industry <sup className="text-alert">*</sup>
            </p>
            <input
              className="w-full h-9 border border-gray-300 rounded px-2 py-2 focus:outline-none"
              type="text"
              placeholder="ex. Information Technology"
            />
          </div>
          <div className="flex gap-x-6">
            <div className="flex flex-col gap-1">
              <p className="font-medium text-sm leading-5">
                Location <sup className="text-alert">*</sup>
              </p>
              <input
                className="w-full h-9 border border-gray-300 rounded px-2 py-2 focus:outline-none"
                type="text"
                placeholder="ex. Chennai"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium text-sm leading-5">
                Remote Type <sup className="text-alert">*</sup>
              </p>
              <input
                className="w-full h-9 border border-gray-300 rounded px-2 py-2 focus:outline-none"
                type="text"
                placeholder="ex. In-Office"
              />
            </div>
          </div>
          <section className="h-16"></section>
          <div className="flex justify-end items-center">
            <button
              type="submit"
              className="bg-primary text-white rounded font-medium text-sm leading-5 px-4 py-2"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormOne;
