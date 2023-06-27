function FormTwo() {
  return (
    <>
      <div className="w-form h-form bg-white rounded-lg p-8 font-primary text-dark border">
        <div className="flex justify-between items-center mb-8">
          <h5 className="font-normal text-xl leading-7">Create a job</h5>
          <h6 className="font-medium text-base leading-6 ">Step 2</h6>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted");
          }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-y-1">
            <p className="font-medium text-sm leading-5">Experience</p>
            <div className="flex gap-6">
              <input
                type="text"
                className="w-1/2 h-9 border border-gray-300 rounded px-2 py-2 focus:outline-none"
                placeholder="Minimum"
              />
              <input
                type="text"
                className="w-1/2 h-9 border border-gray-300 rounded px-2 py-2 focus:outline-none"
                placeholder="Maximum"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="font-medium text-sm leading-5">Salary</p>
            <div className="flex gap-6">
              <input
                type="text"
                className="w-1/2 h-9 border border-gray-300 rounded px-2 py-2 focus:outline-none"
                placeholder="Minimum"
              />
              <input
                type="text"
                className="w-1/2 h-9 border border-gray-300 rounded px-2 py-2 focus:outline-none"
                placeholder="Maximum"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="font-medium text-sm leading-5">Total employee</p>
            <div className="flex gap-6">
              <input
                type="text"
                className="w-full h-9 border border-gray-300 rounded px-2 py-2 focus:outline-none"
                placeholder="ex. 100"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="font-medium text-sm leading-5">Apply Type</p>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  value="quick"
                  name="apply"
                  defaultChecked={true}
                />
                <span className="ml-1 text-sm text-gray-500">Quick apply</span>
              </label>
              <label>
                <input type="radio" value="external" name="apply" />
                <span className="ml-1 text-sm text-gray-500">
                  External apply
                </span>
              </label>
            </div>
          </div>
          <section className="h-16"></section>
          <div className="flex justify-end items-center">
            <button
              type="submit"
              className="bg-primary text-white rounded font-medium text-sm leading-5 px-4 py-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormTwo;
