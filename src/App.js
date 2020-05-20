import React, { Component } from "react";
import ProtectedRoute from "./components/common/protectedRoute";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginForm from "./components/loginForm";
import EditNews from "./components/editNews";
import NotFound from "./components/notFound";
import Logout from "./components/logout";
import NavBar from "./components/navBar";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Contact from "./components/contact";
import News from "./components/news";
import Career from "./components/career";
import Home from "./components/home";
import { getProjectsDone } from "./services/projectDoneService";
import { getProjectsOngoing } from "./services/projectOngoingService";
import { getNews } from "./services/newsService";
import FullNews from "./components/fullNews";
import { getCareers, deleteCareer } from "./services/careerService";
import { getPartners, deletePartner } from "./services/partnerService";
import EditPartner from "./components/editPartner";
import EditCareer from "./components/editCareer";
import { toast } from "react-toastify";
import ScrollToTop from "./components/common/ScrollToTop";
import WhoWeAre from "./components/whoweare";
import Governance from "./components/governance";
import StrategicVision from "./components/strategicVision";
import QualityAndPermits from "./components/qualityandpermits";
import Branches from "./components/branches";
import Partners from "./components/partners";
import Training from "./components/trainings";
import SearchPage from "./components/searchPage";
import Engineering from "./components/engineering";
import Services from "./components/servicesAct";
import Customers from "./components/customers";
import ProjectsOngoing from "./components/projectsOngoing";
import EditProjectOngoing from "./components/editProjectOngoing";
import ProjectsDone from "./components/projectsDone";
import EditProjectDone from "./components/editProjectDone";
import FullProject from "./components/fullProject";
import { deleteNews } from "./services/newsService";
import { deleteProjectDone } from "./services/projectDoneService";
import { deleteProjectOngoing } from "./services/projectOngoingService";

class App extends Component {
  state = {
    newss: [],
    projectsDone: [],
    projectsOngoing: [],
    user: {},
    careers: [],
    partners: [],
  };

  async componentDidMount() {
    const { data: newss } = await getNews();
    const { data: projectsDone } = await getProjectsDone();
    const { data: projectsOngoing } = await getProjectsOngoing();
    const { data: careers } = await getCareers();
    const { data: partners } = await getPartners();
    const user = auth.getCurrentUser();

    this.setState({
      careers,
      user,
      newss,
      projectsDone,
      projectsOngoing,
      partners,
    });
  }

  handleDeletePartner = async (partner) => {
    const originalPartners = this.state.partners;
    const partners = originalPartners.filter((s) => s._id !== partner._id);
    this.setState({ partners });
    try {
      await deletePartner(partner._id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("This partner has already been deleted");
        this.setState({ partners: originalPartners });
      }
    }
  };
  handleNewsDelete = async (news) => {
    const originalNews = this.state.newss;
    const newss = originalNews.filter((s) => s._id !== news._id);
    this.setState({ newss });
    try {
      await deleteNews(news._id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("This news has already been deleted");
        this.setState({ newss: originalNews });
      }
    }
  };

  handleProjectDoneDelete = async (project) => {
    const originalDoneProjects = this.state.projectsDone;
    const projectsDone = originalDoneProjects.filter(
      (s) => s._id !== project._id
    );
    this.setState({ projectsDone });
    try {
      await deleteProjectDone(project._id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("This project has already been deleted");
        this.setState({ projectsDone: originalDoneProjects });
      }
    }
  };

  handleProjectOngoingDelete = async (project) => {
    const originalOngoingProjects = this.state.projectsOngoing;
    const projectsOngoing = originalOngoingProjects.filter(
      (s) => s._id !== project._id
    );
    this.setState({ projectsOngoing });
    try {
      await deleteProjectOngoing(project._id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("This project has already been deleted");
        this.setState({ projectsOngoing: originalOngoingProjects });
      }
    }
  };
  handleDeleteCareer = async (career) => {
    const originalCareers = this.state.careers;
    const careers = originalCareers.filter((s) => s._id !== career._id);
    this.setState({ careers });
    try {
      await deleteCareer(career._id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("This project has already been deleted");
        this.setState({ careers: originalCareers });
      }
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div className="fluid-container">
          <ToastContainer />
          <NavBar user={this.state.user} />
          <ScrollToTop></ScrollToTop>
          <Switch>
            <Route path="/login" component={LoginForm} />

            <Route path="/contact" component={Contact} />
            <Route path="/about/whoweare" component={WhoWeAre} />
            <Route path="/about/governance" component={Governance} />
            <Route path="/about/strategicvision" component={StrategicVision} />
            <Route path="/about/training" component={Training} />
            <Route path="/about/branches" component={Branches} />

            <Route path="/activities/engineering" component={Engineering} />
            <Route path="/activities/services" component={Services} />
            <Route path="/activities/customers" component={Customers} />
            <Route path="/activities" component={Engineering} />
            <Route
              path="/about/qualityandpermits"
              component={QualityAndPermits}
            />
            <Route
              path="/about/partners"
              render={(props) => (
                <Partners
                  onDeletePartner={this.handleDeletePartner}
                  {...props}
                  user={this.state.user}
                  partners={this.state.partners}
                ></Partners>
              )}
            />
            <Route path="/about" component={WhoWeAre} />
            <Route
              render={(props) => (
                <Home
                  projectsOngoing={this.state.projectsOngoing}
                  projectsDone={this.state.projectsDone}
                  newss={this.state.newss}
                  user={this.state.user}
                  {...props}
                />
              )}
              path="/home"
            />
            <Route
              render={(props) => (
                <SearchPage
                  projectsOngoing={this.state.projectsOngoing}
                  projectsDone={this.state.projectsDone}
                  newss={this.state.newss}
                  {...props}
                />
              )}
              path="/search"
            />

            <Route
              path="/news/:id"
              render={(props) => (
                <FullNews newss={this.state.newss} {...props}></FullNews>
              )}
            />
            <Route
              path="/projects/ongoing/:id"
              render={(props) => (
                <FullProject
                  projects={this.state.projectsOngoing}
                  {...props}
                ></FullProject>
              )}
            />
            <Route
              path="/projects/done/:id"
              render={(props) => (
                <FullProject
                  projects={this.state.projectsDone}
                  {...props}
                ></FullProject>
              )}
            />
            <Route
              path="/news"
              render={(props) => (
                <News
                  onNewsDelete={this.handleNewsDelete}
                  user={this.state.user}
                  newss={this.state.newss}
                  {...props}
                />
              )}
            />
            <Route
              path="/projects/ongoing"
              render={(props) => (
                <ProjectsOngoing
                  fullProjectsDone={this.state.projectsOngoing}
                  user={this.state.user}
                  onDelete={this.handleProjectOngoingDelete}
                  projectsOngoing={this.state.projectsOngoing}
                  {...props}
                />
              )}
            />
            <Route
              path="/projects/done"
              render={(props) => (
                <ProjectsDone
                  fullProjectsDone={this.state.projectsDone}
                  onDelete={this.handleProjectDoneDelete}
                  user={this.state.user}
                  projectsDone={this.state.projectsDone}
                  {...props}
                />
              )}
            />
            <Route
              path="/projects/"
              render={(props) => (
                <ProjectsOngoing
                  user={this.state.user}
                  onDelete={this.handleProjectDoneDelete}
                  fullProjectsDone={this.state.projectsOngoing}
                  projectsOngoing={this.state.projectsOngoing}
                  {...props}
                />
              )}
            />
            <ProtectedRoute path="/partners/:id" component={EditPartner} />
            <ProtectedRoute path="/career/:id" component={EditCareer} />
            <ProtectedRoute path="/editnews/:id" component={EditNews} />
            <ProtectedRoute
              path="/editProjectOngoing/:id"
              component={EditProjectOngoing}
            />
            <ProtectedRoute
              path="/editProjectDone/:id"
              component={EditProjectDone}
            />
            {/* 
          <ProtectedRoute path="/career/:id" component={EditCareer} /> */}
            <Route path="/logout" component={Logout} />
            <Route
              path="/career"
              render={(props) => (
                <Career
                  careers={this.state.careers}
                  onDelete={this.handleDeleteCareer}
                  {...props}
                />
              )}
            />

            <Route path="/not-found" component={NotFound} />

            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
