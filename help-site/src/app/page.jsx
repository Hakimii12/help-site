import Feed from "../../components/feed"
function Home() {
  return (
    <section className="w-full section">
    <h1 className="head_text text-center">
        Discover & share
    <br  className="max-md:hidden"/>
    <span className=" orange_gradient text-center">
        AI-Powered Prompts
    </span></h1>
    <p className="desc text-center">
        promptopia is an open-source AI promting tool for moder world to discover,
        create and share creative prompts
    </p>
    <Feed/>
    </section>
  )
}
export default Home
