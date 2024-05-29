import { BrowserRouter as Router, Route } from "react-router-dom"
import { HomePage } from "./pages/home_page"
import { MentorBuddyPage } from "./pages/mentorbuddy_page"
import { EventsPage } from "./pages/events_page"
import { ErrorPage } from "./pages/error_page"

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
                <Route>
                    <ErrorPage/>
                </Route>
            </Routes>
        </Router>
    )
}
