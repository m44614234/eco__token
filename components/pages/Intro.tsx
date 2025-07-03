import Back from "../tools/Back";
import Desc from "../tools/Desc";
import Title from "../tools/Title";

const Intro = ({ setChoose }: { setChoose: (value: string) => void }) => {
  return (
    <div className="container_">
      <div className="container__">
        <Back setChoose={setChoose} />

        <Title title="INTRO" />

        <img src="/images/pic01.jpg" className="mt-4 rounded-md w-full h-48" />

        <Desc
          text=" The ECO project is an innovative blockchain initiative designed to
          promote environmental sustainability through a dedicated token. By
          harnessing the power of decentralized technology, ECO incentivizes
          individuals and organizations to engage in eco-friendly practices,
          fostering a global community committed to protecting our planet."
        />

        <Desc
          text=" Through the use of the ECO token, participants can support various
          environmental projects, such as reforestation and renewable energy
          initiatives. This unique approach not only encourages responsible
          behavior but also ensures transparency and accountability in funding,
          paving the way for a greener and more sustainable future."
        />
      </div>
    </div>
  );
};
export default Intro;
