import Back from "../tools/Back";
import Desc from "../tools/Desc";
import Title from "../tools/Title";

const About = ({ setChoose }: { setChoose: (value: string) => void }) => {
  return (
    <div className="container_">
      <div className="container__">
        <Back setChoose={setChoose} />

        <Title title="ABOUT" />

        <img src="/images/pic03.jpg" className="mt-4 rounded-md w-full h-48" />


      <Desc text='ECO is a groundbreaking blockchain project dedicated to promoting
          environmental sustainability through innovative technology. Our
          mission is to empower individuals and organizations to take actionable
          steps towards a greener future by leveraging our unique token. By
          incentivizing eco-friendly practices, we aim to create a community
          that values and rewards sustainable choices. The ECO token facilitates
          transparent transactions while supporting initiatives that combat
          climate change and promote biodiversity. With every transaction, users
          contribute to environmental projects, from reforestation efforts to
          renewable energy solutions. Join us in our journey to create a
          positive impact on the planet, one token at a time. Together, we can
          build a sustainable ecosystem that benefits both people and the Earth.
          Welcome to the future of eco-conscious living with ECO!'/>
      </div>
    </div>
  );
};
export default About;
