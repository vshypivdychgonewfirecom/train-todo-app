/* eslint-disable import/no-anonymous-default-export */

export default (props: {
  open: boolean;
  onClose: Function;
  title: string;
  content: JSX.Element;
  footer?: JSX.Element;
  className?: string;
}) => {
  return (
    <>
      {props.open && (
        <div
          id="defaultModal"
          tabIndex={-1}
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
          aria-modal="true"
        >
          <span className="w-full absolute h-full bg-black opacity-50" />
          <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <div className={`relative bg-white rounded-lg shadow ${props.className}`}>
              <header className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900">
                  {props.title}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => props.onClose()}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </header>
              <div className="p-4 space-y-4 flex flex-col">{props.content}</div>
              {props.footer}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
