import { BrowserRouter as Router, Route } from "react-router-dom"
import { HomePage } from "./pages/home_page"
import { MentorBuddyPage } from "./pages/mentorbuddy_page"
import { EventsPage } from "./pages/events_page"
import { ErrorPage } from "./pages/error_page"
import { ArticlesPage } from "./pages/articles_page"
import { ArticleDetail } from "./pages/articles_detail_page"
import { UpdateProfileBox } from "./components/UpdateProfileBox"
import UserProfile from "./pages/user_profile"

export const Routes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <HomePage />
                </Route>
                <Route path="/events">
                    <EventsPage />
                </Route>
                <Route path="/mentorbuddy">
                    <MentorBuddyPage />
                </Route>
                <Route path="/articles">
                    <ArticlesPage />
                </Route>
                <Route path="/articles/:articleId">
                    <ArticleDetail />
                </Route>
                <Route path="/profile">
                    <UserProfile />
                </Route>


                <Route>
                    <ErrorPage/>
                </Route>
            </Routes>
        </Router>
    )
}
