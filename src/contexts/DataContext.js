import React, { createContext, useContext, useReducer } from "react";

// إنشاء Context للبيانات
const DataContext = createContext();

// الحالة الأولية للبيانات
const initialState = {
  isAdmin: false,
  projects: [
    {
      id: 1,
      img: require("../assets/book-store.png"),
      cat: "HTML & CSS",
      title: "BOOK STORE",
      link: "https://github.com/HebaRabaya/BOOK_STORE__Html-CSS_ASAL",
      description: "A modern book store website with responsive design",
    },
    {
      id: 2,
      img: require("../assets/todo-list.jpg"),
      cat: "JAVA SCRIPT",
      title: "TO DO LIST",
      link: "https://github.com/HebaRabaya/TO_DO_LIST__js_ASAL",
      description: "Interactive task management application",
    },
    {
      id: 3,
      img: require("../assets/my-profile.png"),
      cat: "HTML & CSS",
      title: "MY-PORTFOLIO",
      link: "https://github.com/HebaRabaya/MY_PORTFOLIO_HTML_CSS.git",
      description: "Personal portfolio website design",
    },
    {
      id: 4,
      img: require("../assets/portfolio-react.png"),
      cat: "REACT",
      title: "MY-PORTFOLIO-React",
      link: "https://github.com/HebaRabaya/MY-PORTFOLIO-React.git",
      description: "Personal portfolio website design with React",
    },
    {
      id: 5,
      img: require("../assets/todo list react.png"),
      cat: "REACT",
      title: "TODO List _ React",
      link: "https://github.com/HebaRabaya/To-Do-List-React.git",
      description: "Interactive task management",
    },
    {
      id: 6,
      img: require("../assets/book-store.png"),
      cat: "HTML & CSS",
      title: "BOOK STORE V4",
      link: "projects/book-store-v4.html",
      description: "Latest version with modern design patterns",
    },
  ],
  skills: [
    {
      id: 1,
      icon: "fa-brands fa-html5",
      title: "HTML",
      description:
        "📄 Structure the Web\nCreate and organize the content of web pages using structured elements and semantic tags.",
      color: "#e34c26",
    },
    {
      id: 2,
      icon: "fa-brands fa-css3-alt",
      title: "CSS",
      description:
        "🎨 Style and Design\nEnhance the appearance of web pages with colors, layouts, and responsive designs.",
      color: "#1572b6",
    },
    {
      id: 3,
      icon: "fa-brands fa-js",
      title: "JAVA SCRIPT",
      description:
        "⚡ Make It Interactive\nAdd dynamic behavior and interactivity to websites using scripting and event-driven programming.",
      color: "#f7df1e",
    },
  ],
};

// دالة reducer لإدارة الحالة
const dataReducer = (state, action) => {
  switch (action.type) {
    // إدارة المشاريع
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, { ...action.payload, id: Date.now() }],
      };

    case "UPDATE_PROJECT":
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload.id ? action.payload : project
        ),
      };

    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
      };

    // إدارة المهارات
    case "ADD_SKILL":
      return {
        ...state,
        skills: [...state.skills, { ...action.payload, id: Date.now() }],
      };

    case "UPDATE_SKILL":
      return {
        ...state,
        skills: state.skills.map((skill) =>
          skill.id === action.payload.id ? action.payload : skill
        ),
      };

    case "DELETE_SKILL":
      return {
        ...state,
        skills: state.skills.filter((skill) => skill.id !== action.payload),
      };

    default:
      return state;
  }
};

// مكون Provider
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  // تحديد الإدارة من localStorage
  React.useEffect(() => {
    const flag = localStorage.getItem("isAdmin");
    if (flag === "true") {
      // لا نغير via reducer للحفاظ على البساطة؛ نُسند مباشرة قبل نشر القيمة
      state.isAdmin = true;
    }
  }, []);

  // دوال إدارة المشاريع
  const addProject = (project) => {
    dispatch({ type: "ADD_PROJECT", payload: project });
  };

  const updateProject = (project) => {
    dispatch({ type: "UPDATE_PROJECT", payload: project });
  };

  const deleteProject = (projectId) => {
    dispatch({ type: "DELETE_PROJECT", payload: projectId });
  };

  // دوال إدارة المهارات
  const addSkill = (skill) => {
    dispatch({ type: "ADD_SKILL", payload: skill });
  };

  const updateSkill = (skill) => {
    dispatch({ type: "UPDATE_SKILL", payload: skill });
  };

  const deleteSkill = (skillId) => {
    dispatch({ type: "DELETE_SKILL", payload: skillId });
  };

  const value = {
    ...state,
    addProject,
    updateProject,
    deleteProject,
    addSkill,
    updateSkill,
    deleteSkill,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// Hook لاستخدام Context
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
