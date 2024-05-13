import rubyIcon from "../assets/ruby-icon.png"
const Footer = () => {
  return (
    <>
      <hr className="mx-4 text-lightGray" />
      <div className="flex justify-between">
        <a href="https://sdruby.org/" target="blank">
          <img src={rubyIcon} alt="SD Ruby Icon" className="mx-4 my-2 h-10" />
        </a>
        <p className="mx-4 my-auto">
          Organizers Sarah Proctor | Rob Kaufman | Chris McCann | Erik Guzman
        </p>
      </div>
    </>
  )
}

export default Footer
