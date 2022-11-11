import Content from "./components/Content"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <div className="min-h-screen">
      <Header />
      <main className="h-[90vh] flex p-8">
        <Sidebar />
        <Content />
      </main>
    </div>
  )
}

export default App
