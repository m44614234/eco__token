import Back from "../tools/Back";
import Title from "../tools/Title";
import Desc from "../tools/Desc";

const Work = ({ setChoose }: { setChoose: (value: string) => void }) => {
  return (
    <div className="container_">
      <div className="container__">
        <Back setChoose={setChoose} />

        <Title title="WORK" />

        <img src="/images/pic02.jpg" className="mt-4 rounded-md w-full h-48" />

        <Desc
          text="The ECO project is an innovative initiative that harnesses the power
          of blockchain technology to promote environmental sustainability. By
          introducing a dedicated token, ECO incentivizes individuals and
          organizations to engage in eco-friendly practices. This unique
          approach not only fosters a community committed to environmental
          stewardship but also facilitates transparent transactions that
          directly support sustainable initiatives."
        />

        <Desc
          text=" Through the ECO token, users can contribute to various projects aimed
          at combating climate change and preserving biodiversity. Each
          transaction helps fund reforestation efforts, renewable energy
          solutions, and other vital environmental programs. By participating in
          the ECO ecosystem, individuals can make a tangible difference while
          enjoying the benefits of a decentralized platform that prioritizes the
          health of our planet. Join us in creating a sustainable future with
          ECO!"
        />
      </div>
    </div>
  );
};
export default Work;
