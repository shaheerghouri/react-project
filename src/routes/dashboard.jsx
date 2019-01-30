// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
//  import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
import School from "@material-ui/icons/School"
import LocationCity from "@material-ui/icons/LocationCity"
import Business from "@material-ui/icons/Business"

// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
//admin views
import adminDashboardPage from "views/Admin/adminDashboard.jsx";
import adminUniversityPage from "views/Admin/adminUniversity.jsx";
import adminDepartmentPage from "views/Admin/adminDepartment.jsx";
import adminStudentPage from "views/Admin/adminStudent.jsx";
import adminDegreePage from "views/Admin/adminDegree";



//university views



import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";





//import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import Landing from '../layouts/Landing'


const dashboardRoutes = [
  
  {
    path: "/admin/dashboard",
    sidebarName: "Dashboard",
    navbarName: "",
    icon: Notifications,
    component: adminDashboardPage
  
  },
  {
    path: "/admin/university",
    sidebarName: "University",
    navbarName: "",
    icon: LocationCity,
    component: adminUniversityPage
  
  },

  {
    path: "/admin/department",
    sidebarName: "Department",
    navbarName: "",
    icon: Business,
    component: adminDepartmentPage
  
  },

  {
    path: "/admin/user",
    sidebarName: "Student",
    navbarName: "",
    icon: Person,
    component: adminStudentPage
  
  },

  {
    path: "/admin/degree",
    sidebarName: "Degree",
    navbarName: "",
    icon: School,
    component: adminDegreePage
  
  },
  
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "Create Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  // {
  //   path: "/maps",
  //   sidebarName: "Maps",
  //   navbarName: "Map",
  //   icon: LocationOn,
  //   component: Maps
  // },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  // {
  //   path: "/upgrade-to-pro",
  //   sidebarName: "Upgrade To PRO",
  //   navbarName: "Upgrade To PRO",
  //   icon: Unarchive,
  //   component: UpgradeToPro
  // },
  { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

export default dashboardRoutes;
