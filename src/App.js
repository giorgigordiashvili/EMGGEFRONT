import React, { Component } from "react";
import ProtectedRoute from "./components/common/protectedRoute";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginForm from "./components/loginForm";
import EditProject from "./components/editProject";
import EditCategory from "./components/editCategory";
import EditNews from "./components/editNews";
import NotFound from "./components/notFound";
import Logout from "./components/logout";
import NavBar from "./components/navBar";
import Projects from "./components/projects";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/footer";
import Contact from "./components/contact";
import News from "./components/news";
import Categorised from "./components/Categorised";
import FullProject from "./components/fullProject";
import Career from "./components/career";
import Home from "./components/home";
import { getProjects } from "./services/projectService";
import { getNews } from "./services/newsService";
import { getCategories } from "./services/categoryService";
import FullNews from "./components/fullNews";
import { getCareers, deleteCareer } from "./services/careerService";
import { getPartners, deletePartner } from "./services/partnerService";
import EditPartner from "./components/editPartner";
import EditCareer from "./components/editCareer";
import { toast } from "react-toastify";
import Activities from "./components/activities";
import ScrollToTop from "./components/common/ScrollToTop";
import WhoWeAre from "./components/whoweare";
import Governance from "./components/governance";
import StrategicVision from "./components/strategicVision";
import QualityAndPermits from "./components/qualityandpermits";
import Branches from "./components/branches";
import Partners from "./components/partners";

class App extends Component {
  state = {
    newss: [],
    categories: [],
    projects: [],
    user: {},
    careers: [],
    partners: [],
  };

  async componentDidMount() {
    const { data: newss } = await getNews();
    const { data: projects } = await getProjects();
    const { data: categories } = await getCategories();
    const { data: careers } = await getCareers();
    const { data: partners } = await getPartners();
    const user = auth.getCurrentUser();

    this.setState({ careers, user, newss, projects, categories, partners });
  }

  handleDeletePartner = async (partner) => {
    const originalPartners = this.state.partners;
    const partners = originalPartners.filter((s) => s._id !== partner._id);
    this.setState({ partners });
    try {
      await deletePartner(partner._id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("This project has already been deleted");
        this.setState({ partners: originalPartners });
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
            <Route path="/about/branches" component={Branches} />
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
            <Route
              render={(props) => (
                <Home
                  categories={this.state.categories}
                  projects={this.state.projects}
                  newss={this.state.newss}
                  user={this.state.user}
                  {...props}
                />
              )}
              path="/home"
            />

            <Route path="/projects/category/:id" component={Categorised} />
            <Route path="/project/:id" component={FullProject} />
            <Route
              path="/news/:id"
              render={(props) => (
                <FullNews newss={this.state.newss} {...props}></FullNews>
              )}
            />
            <Route
              path="/news"
              render={(props) => (
                <News
                  user={this.state.user}
                  newss={this.state.newss}
                  {...props}
                />
              )}
            />
            <ProtectedRoute path="/projects/:id" component={EditProject} />
            <ProtectedRoute path="/partners/:id" component={EditPartner} />
            <ProtectedRoute path="/career/:id" component={EditCareer} />
            <ProtectedRoute path="/category/:id" component={EditCategory} />

            <ProtectedRoute path="/editnews/:id" component={EditNews} />
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

            <Route
              path="/projects"
              render={(props) => (
                <Projects
                  categories={this.state.categories}
                  projects={this.state.projects}
                  user={this.state.user}
                  {...props}
                />
              )}
            />
            <Route path="/activities" component={Activities} />

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
