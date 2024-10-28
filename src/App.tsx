import { BrowserRouter as Router } from "react-router-dom"
import Header from "./widgets/layout/ui/Header.tsx"
import Footer from "./widgets/layout/ui/Footer.tsx"
import PostsManagerPage from "./pages/PostsManagerPage.tsx"
import { UserContextProvider } from "./entities/user/model/UserContext.tsx"
import { PostContextProvider } from "./entities/post/model/PostContext.tsx"
import { PostParamsContextProvider } from "./entities/post/model/PostParamsContext.tsx"
import { CommentContextProvider } from "./entities/comment/model/CommentContext.tsx"

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <UserContextProvider>
          <Header />

          <main className="flex-grow container mx-auto px-4 py-8">
            <PostContextProvider>
              <PostParamsContextProvider>
                <CommentContextProvider>
                  <PostsManagerPage />
                </CommentContextProvider>
              </PostParamsContextProvider>
            </PostContextProvider>

            <Footer />
          </main>
        </UserContextProvider>
      </div>
    </Router>
  )
}

export default App
