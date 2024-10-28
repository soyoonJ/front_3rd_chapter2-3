import { BrowserRouter as Router } from "react-router-dom"
import Header from "./widgets/layout/ui/Header.tsx"
import Footer from "./widgets/layout/ui/Footer.tsx"
import PostsManagerPage from "./pages/PostsManagerPage.tsx"
import { UserContextProvider } from "./shared/model/UserContext.tsx"
import { PostContextProvider } from "./shared/model/PostContext.tsx"
import { PostParamsContextProvider } from "./shared/model/PostParamsContext.tsx"

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <UserContextProvider>
          <PostContextProvider>
            <PostParamsContextProvider>
              <Header />
              <main className="flex-grow container mx-auto px-4 py-8">
                <PostsManagerPage />
              </main>
              <Footer />
            </PostParamsContextProvider>
          </PostContextProvider>
        </UserContextProvider>
      </div>
    </Router>
  )
}

export default App
