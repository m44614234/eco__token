import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Back = ({ setChoose }: { setChoose: (value: string) => void }) => {
  const handleBack = () => {
    setChoose("");
  };

  return (
    <section className="w-full flex flex-row justify-end text-end ">
      <FontAwesomeIcon
        icon={faX}
        onClick={handleBack}
        className="w-6 h-6 cursor-pointer px-2 py-3  transition-all   text-white hover:bg-white/40  rounded-full"
      />
    </section>
  );
};
export default Back;
