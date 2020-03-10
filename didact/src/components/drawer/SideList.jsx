import React from "react";
import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
////

//Material UI Icons
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import BuildIcon from "@material-ui/icons/Build";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SchoolIcon from "@material-ui/icons/School";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import BookIcon from "@material-ui/icons/Book";
import CreateIcon from "@material-ui/icons/Create";
import SettingsIcon from "@material-ui/icons/Settings";
import { SideListWrapper } from "./SideListStyles";

const SideList = ({ props }) => {
  const drawerStyles = makeStyles(theme => ({
    listing: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      padding: 0,
      height: "100vh"
    },
    dashboardDiv: {
      display: "flex",
      height: "55px",
      margin: "10px 0px",
      fontSize: "28px"
      // border: "1px solid black"
    },
    paraDiv: {
      marginLeft: "10%",
      fontWeight: "bold",
      fontSize: "14px"
    },

    coursesDiv: {
      display: "flex",
      height: "55px",
      margin: "10px 0px"
    },
    learningPathDiv: {
      width: "100%",
      outline: "none !important",
      display: "flex",
      alignItems: "center"
    },
    resourcesDiv: {
      display: "flex",
      height: "55px",
      margin: "10px 0px"
    },

    activeTab: {
      backgroundColor: "#ffffff",
      borderRadius: "0 7px 7px 0",
      width: "225px",
      height: "auto",
      margin: "0px"
    },

    listItem: {
      width: "225px",
      // display: "flex",
      margin: "0px",
      height: "55px"
    },

    arrow: {
      textAlign: "right",
      paddingRight: "10%",
      width: "100%",
      fontSize: "2rem",
      color: "#5b5b5b",
      margin: "0 6px "
    },

    collapseNav: {
      textDecoration: "none",
      textAlign: "left",
      marginRight: "20%"
    },
    nested: {
      paddingLeft: theme.spacing(4),
      marginLeft: "20%",
      textDecoration: "none",
      color: "#242424"
    },
    // resourcesDiv: {
    //   display: "flex",
    //   flexDirection: "row",
    //   alignItems: "center",
    //   width: "225px"
    // },
    nestedSmall: {
      paddingLeft: theme.spacing(4),
      marginLeft: "-20%",
      textDecoration: "none",
      color: "#242424"
    },
    listItemSmall: {
      display: "flex"
    }
  }));

  const classes = drawerStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [resOpen, resSetOpen] = React.useState(false);

  const resourcesHandleClick = () => {
    resSetOpen(!resOpen);
  };

  return (
    <SideListWrapper>
      {props.open ? (
        <ul className={classes.listing}>
          <NavLink
            exact
            to="/"
            style={{
              textDecoration: "none",
              color: "#5b5b5b",
              outline: "none !important"
            }}
            activeStyle={{ color: "#242424BF" }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="Dashboard"
          >
            <div className={classes.dashboardDiv}>
              <DashboardIcon
                style={{
                  marginLeft: "17px",
                  marginTop: "4%",
                  fontSize: "28px"
                }}
              />
              <p className={classes.paraDiv}>Dashboard</p>
              {props.props.match.path.includes("/courses") ? (
                <p className={classes.arrow}>
                  <ChevronRightIcon style={{ fontSize: "2rem" }} />
                </p>
              ) : (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{
                      fontSize: "2rem"
                      // marginBottom: "6px",
                      // color: "#5b5b5b"
                    }}
                  />
                </p>
              )}
            </div>
          </NavLink>

          <NavLink
            to="/courses"
            style={{
              textDecoration: "none",
              color: "#5b5b5b",
              outline: "none !important"
            }}
            activeStyle={{ color: "#242424" }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="Add Course"
          >
            <div className={classes.coursesDiv}>
              <FolderOpenIcon
                style={{
                  marginLeft: "17px",
                  marginTop: "4%",
                  fontSize: "28px"
                }}
              />
              <p className={classes.paraDiv}>Courses</p>
              {props.props.match.path.includes("/courses") ? (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{ fontSize: "2rem", marginBottom: "6%" }}
                  />
                </p>
              ) : (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{
                      fontSize: "2rem",
                      // marginTop: "6px",
                      color: "#5b5b5b",
                      marginBottom: "6%"
                    }}
                  />
                </p>
              )}
            </div>
          </NavLink>

          {/* <List component="learning-path-nav" className={classes.root}> */}

          <NavLink
            onClick={handleClick}
            to="/learning-paths"
            style={{
              textDecoration: "none",
              color: "#5b5b5b",
              outline: "none !important"
            }}
            activeStyle={{ color: "#242424BF" }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="Learning Paths"
          >
            <div className={classes.learningPathDiv}>
              <InboxIcon
                style={{
                  marginLeft: "17px",
                  marginTop: "4%",
                  fontSize: "28px"
                }}
              />
              <p className={classes.paraDiv}>Learning Paths</p>

              {props.props.match.path.includes("/learning-paths") ? (
                <p className={classes.arrow}>
                  <ChevronRightIcon style={{ fontSize: "2rem" }} />
                </p>
              ) : (
                <p className={classes.arrow}>
                  <ChevronRightIcon style={{ fontSize: "2rem" }} />
                </p>
              )}
            </div>
          </NavLink>

          <div className={classes.collapseNav}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {/* </List> */}
              <ListItem className={classes.nested}>
                <Link
                  to="/learning-paths/current"
                  style={{
                    fontSize: "12px",

                    color: "#5b5b5b"
                  }}
                >
                  Current
                </Link>
              </ListItem>
              <ListItem className={classes.nested}>
                <Link
                  to="/learning-paths/add"
                  style={{
                    fontSize: "12px",
                    color: "#5b5b5b"
                  }}
                >
                  Create
                </Link>
              </ListItem>
              <ListItem className={classes.nested}>
                <Link
                  to="/learning-paths/join"
                  style={{
                    fontSize: "12px",
                    color: "#5b5b5b"
                  }}
                >
                  Join
                </Link>
              </ListItem>
            </Collapse>
          </div>

          <NavLink
            onClick={resourcesHandleClick}
            to={window}
            style={{
              textDecoration: "none",
              color: "#5b5b5b",
              outline: "none !important"
            }}
            activeStyle={{ color: "#242424BF" }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="Resources"
          >
            <div className={classes.resourcesDiv}>
              <SettingsIcon
                style={{
                  marginLeft: "17px",
                  marginTop: "4%",
                  fontSize: "28px"
                }}
              />
              <p className={classes.paraDiv}>Resources</p>
              {props.props.match.path.includes("/") ? (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{ fontSize: "2rem", marginTop: "6px" }}
                  />
                </p>
              ) : (
                <p className={classes.arrow}>
                  <ChevronRightIcon style={{ fontSize: "2rem" }} />
                </p>
              )}
            </div>
          </NavLink>

          <div className={classes.collapseNav}>
            <Collapse in={resOpen} timeout="auto" unmountOnExit>
              {/* </List> */}
              <ListItem className={classes.nested}>
                <Link
                  to="/tools"
                  style={{
                    fontSize: "12px",

                    color: "#5b5b5b"
                  }}
                >
                  Tools
                </Link>
              </ListItem>
              <ListItem className={classes.nested}>
                <Link
                  to="/sources"
                  style={{
                    fontSize: "12px",

                    color: "#5b5b5b"
                  }}
                >
                  Sources
                </Link>
              </ListItem>
              <ListItem className={classes.nested}>
                <Link
                  to="/articles"
                  style={{
                    fontSize: "12px",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                >
                  Articles
                </Link>
              </ListItem>
            </Collapse>
          </div>

          <NavLink
            to="/about"
            style={{
              textDecoration: "none",
              color: "#5b5b5b",
              outline: "none !important"
            }}
            activeStyle={{ color: "black" }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="about"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginLeft: "20%"
              }}
            >
              <p
                style={{
                  marginLeft: "25px",
                  fontWeight: "bold",
                  fontSize: "14px"
                }}
              >
                About
              </p>
            </div>
          </NavLink>

          <NavLink
            to="/contact"
            style={{
              textDecoration: "none",
              color: "#5b5b5b",
              outline: "none !important"
            }}
            activeStyle={{ color: "black" }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="about"
          >
            {/* <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginLeft: "20%"
              }}
              activeStyle={{ color: "black" }}
              activeClassName={classes.activeTab}
              className={classes.listItem}
              key="contact"
            >
              <p style={{ marginLeft: "25px", fontWeight: "bold" }}>Contact</p>
            </div> */}
          </NavLink>

          {/* </div> */}
        </ul>
      ) : (
        <ul className={classes.listing}>
          <NavLink
            exact
            to="/"
            style={{
              textDecoration: "none",
              color: "#242424BF",
              outline: "none !important"
            }}
            activeStyle={{ color: "#242424BF" }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="Dashboard"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                outline: "none !important"
              }}
            >
              <DashboardIcon style={{ marginLeft: "17px", fontSize: "28px" }} />
              <p
                style={{
                  marginLeft: "25px",
                  fontWeight: "bold",
                  fontSize: "14px"
                }}
              >
                Dashboard
              </p>
              {props.props.location.pathname === "/" ? (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{ fontSize: "2rem", marginTop: "6px" }}
                  />
                </p>
              ) : (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{
                      fontSize: "2rem",
                      marginTop: "6px",
                      color: "#5b5b5b"
                    }}
                  />
                </p>
              )}
            </div>
          </NavLink>
          <NavLink
            to="/courses"
            style={{
              textDecoration: "none",
              color: "#5b5b5b",
              outline: "none !important"
            }}
            activeStyle={{ color: "black" }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="Add Course"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center"
              }}
            >
              <FolderOpenIcon
                style={{ marginLeft: "17px", fontSize: "28px" }}
              />
              <p
                style={{
                  marginLeft: "25px",
                  fontWeight: "bold",
                  fontSize: "14px"
                }}
              >
                Courses
              </p>
              {props.props.match.path.includes("/courses") ? (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{ fontSize: "2rem", marginTop: "6px" }}
                  />
                </p>
              ) : (
                <p className={classes.arrow}>
                  <ChevronRightIcon
                    style={{
                      fontSize: "2rem",
                      marginTop: "6px",
                      color: "#5b5b5b"
                    }}
                  />
                </p>
              )}
            </div>
          </NavLink>

          <div className={classes.learningPathDiv}>
            {/* <List component="learning-path-nav" className={classes.root}> */}
            <nav onClick={handleClick}>
              <NavLink
                to="/learning-paths"
                style={{
                  textDecoration: "none",
                  color: "#5b5b5b",
                  outline: "none !important"
                }}
                activeStyle={{ color: "black" }}
                activeClassName={classes.activeTab}
                className={classes.listItem}
                key="Learning Paths"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center"
                  }}
                >
                  <InboxIcon style={{ marginLeft: "17px", fontSize: "28px" }} />
                  <p
                    style={{
                      marginLeft: "25px",
                      fontWeight: "bold",
                      fontSize: "14px"
                    }}
                  >
                    Learning Paths
                  </p>

                  {props.props.match.path.includes("/learning-paths") ? (
                    <p className={classes.arrow}>
                      <ChevronRightIcon
                        style={{ fontSize: "2rem", marginTop: "6px" }}
                      />
                    </p>
                  ) : (
                    <p className={classes.arrow}>
                      <ChevronRightIcon
                        style={{
                          fontSize: "2rem",
                          marginTop: "6px",
                          color: "#5b5b5b"
                        }}
                      />
                    </p>
                  )}
                </div>
                {/* {open ? <ExpandLess /> : <ExpandMore />} */}
              </NavLink>
            </nav>
            <div className={classes.collapseNav}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                {/* </List> */}
                <ListItem className={classes.nestedSmall}>
                  <Link
                    to="/learning-paths/current"
                    style={{
                      fontSize: "12px",

                      color: "#5b5b5b"
                    }}
                  >
                    <BookIcon />
                  </Link>
                </ListItem>
                <ListItem className={classes.nestedSmall}>
                  <Link
                    to="/learning-paths/add"
                    style={{
                      fontSize: "12px",

                      color: "#5b5b5b"
                    }}
                  >
                    <CreateIcon />
                  </Link>
                </ListItem>
                <ListItem className={classes.nestedSmall}>
                  <Link
                    to="/learning-paths/join"
                    style={{
                      fontSize: "12px",

                      color: "#5b5b5b"
                    }}
                  >
                    <LinearScaleIcon />
                  </Link>
                </ListItem>
              </Collapse>
            </div>
          </div>

          <div className={classes.resourcesDiv}>
            <nav onClick={resourcesHandleClick}>
              <NavLink
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#5b5b5b",
                  outline: "none !important"
                }}
                activeStyle={{ color: "black" }}
                activeClassName={classes.activeTab}
                className={classes.listItem}
                key="Resources"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center"
                  }}
                >
                  <SettingsIcon
                    style={{ marginLeft: "17px", fontSize: "28px" }}
                  />
                  <p
                    style={{
                      marginLeft: "25px",
                      fontWeight: "bold",
                      fontSize: "14px"
                    }}
                  >
                    Resources
                  </p>
                  {props.props.match.path.includes("/") ? (
                    <p className={classes.arrow}>
                      <ChevronRightIcon
                        style={{ fontSize: "2rem", marginTop: "6px" }}
                      />
                    </p>
                  ) : (
                    <p className={classes.arrow}>
                      <ChevronRightIcon
                        style={{
                          fontSize: "2.4rem",

                          color: "#5b5b5b"
                        }}
                      />
                    </p>
                  )}
                </div>
              </NavLink>
            </nav>
            <div className={classes.collapseNav}>
              <Collapse in={resOpen} timeout="auto" unmountOnExit>
                {/* </List> */}
                <ListItem className={classes.nestedSmall}>
                  <Link
                    to="/tools"
                    style={{
                      fontSize: "12px",

                      color: "#5b5b5b"
                    }}
                  >
                    <BuildIcon />
                  </Link>
                </ListItem>
                <ListItem className={classes.nestedSmall}>
                  <Link
                    to="/sources"
                    style={{
                      fontSize: "12px",

                      color: "#5b5b5b"
                    }}
                  >
                    <SchoolIcon />
                  </Link>
                </ListItem>
                <ListItem className={classes.nestedSmall}>
                  <Link
                    to="/articles"
                    style={{
                      fontSize: "12px",
                      marginTop: "6px",
                      color: "#5b5b5b"
                    }}
                  >
                    <LibraryBooksIcon />
                  </Link>
                </ListItem>
              </Collapse>
            </div>

            <NavLink
              to="/about"
              style={{
                textDecoration: "none",
                color: "#5b5b5b",
                outline: "none !important"
              }}
              activeStyle={{ color: "#242424" }}
              activeClassName={classes.activeTab}
              className={classes.listItemSmall}
              key="about"
            >
              <div
                style={
                  {
                    // display: "flex",
                    // flexDirection: "row",
                    // width: "100%"
                    // marginLeft: "20%"
                  }
                }
              >
                <p
                  style={{
                    marginLeft: "15%",
                    fontWeight: "bold",
                    fontSize: "14px"
                  }}
                >
                  About
                </p>
              </div>
            </NavLink>

            <NavLink
              to="/contact"
              style={{
                textDecoration: "none",
                color: "#5b5b5b",
                outline: "none !important"
              }}
              activeStyle={{ color: "#242424" }}
              activeClassName={classes.activeTab}
              className={classes.listItemSmall}
              key="about"
            >
              <div
                style={
                  {
                    // display: "flex",
                    // flexDirection: "row",
                    // width: "100%"
                    // marginRight: "90%"
                  }
                }
              >
                <p
                  style={{
                    marginRight: "25%",
                    fontWeight: "bold",
                    fontSize: "14px"
                  }}
                >
                  Contact
                </p>
              </div>
            </NavLink>
          </div>
        </ul>
      )}
    </SideListWrapper>
  );
};

export default SideList;
