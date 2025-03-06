import { Plus } from "lucide-react";
import { useState } from "react";
export default function AddNewProjectComponent({ onAddCard }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  // const [dateCount, setDateCount] = useState();
  const [dueDateError, setDueDateError] = useState("");
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    dueDate: "",
    projectProgress: 0,
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log([name], value);
  };
  const handleFocus = (e) => {
    const { name } = e.target;
    setErrors((prevData) => ({ ...prevData, [name]: "" }));
    if (e.target.name === "dueDate") setDueDateError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Validation
    let isError = {};
    if (!formData.projectName) {
      isError.projectName = "*Please enter a project name";
    }
    if (!formData.projectProgress || formData.projectProgress === "") {
      isError.projectProgress = "*Please select project progress";
    }
    console.log(formData.dueDate == "");

    if (Object.keys(isError).length > 0) {
      setErrors(isError);
      console.log("is error", isError);
      return;
    }
    const date = new Date(formData.dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // if (formData.dueDate == "") {
    //   setDueDateError("Please enter a date");
    //   if (date < today) {
    //     setDueDateError("Due date should be in the future");
    //   }
    // }

    if (!formData.dueDate) {
      console.log("no data");
      setDueDateError("*Please enter a date");
      return;
    } else if (date < today) {
      console.log("due date is in the past");
      setDueDateError("*Due date should be in the future");
      return;
    }
    onAddCard(formData);

    setErrors({});
    setDueDateError("");
    setFormData({
      projectName: "",
      projectDescription: "",
      dueDate: "",
      projectProgress: 0,
    });
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="cursor-pointer text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-3 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500 dark:focus:ring-custom-sky-blue-500 flex items-center gap-2"
        type="button"
      >
        <Plus size={22} />
        <span className="text-base">New Project</span>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="crud-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-2xl shadow-sm dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Create New Project
                </h3>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="projectName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Project Name
                    </label>
                    <input
                      type="text"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      id="projectName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type Project Name"
                    />
                    {errors.projectName && (
                      <p className="text-xs text-red-500 mt-1" id="error">
                        {errors.projectName}
                      </p>
                    )}
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="dueDate"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Due Date
                    </label>
                    <input
                      onChange={handleChange}
                      onFocus={handleFocus}
                      type="date"
                      name="dueDate"
                      value={formData.dueDate}
                      id="dueDate"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                    {/* {formData.dueDate && ( */}
                    <p className="text-xs text-red-500 mt-1" id="error">
                      {dueDateError}
                    </p>
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="progress"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Progress
                    </label>
                    <select
                      onChange={handleChange}
                      onFocus={handleFocus}
                      name="projectProgress"
                      value={formData.projectProgress}
                      id="progress"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option value="">select progress</option>
                      <option value="100">100</option>
                      <option value="75">75</option>
                      <option value="50">50</option>
                      <option value="25">25</option>
                    </select>
                    {errors.projectProgress && (
                      <p className="text-xs text-red-500 mt-1" id="error">
                        {errors.projectProgress}
                      </p>
                    )}
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Project Description
                    </label>
                    <textarea
                      id="description"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write product description here"
                    ></textarea>
                  </div>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-4 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500 dark:focus:ring-custom-sky-blue-500"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
